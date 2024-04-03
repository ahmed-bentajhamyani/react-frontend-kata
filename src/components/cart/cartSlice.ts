import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartItem } from '../../types/CartItem'

export interface CartState {
    showCart: boolean,
    cartProducts: CartItem[],
    cartQuantity: number,
}

const initialState: CartState = {
    showCart: false,
    cartProducts: JSON.parse(localStorage.getItem("CartProducts")!) || [],
    cartQuantity: (JSON.parse(localStorage.getItem("CartProducts")!) as CartItem[])?.reduce((quantity: number, item: CartItem) => item.quantity + quantity, 0) || 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setShowCart: (state, action: PayloadAction<boolean>) => {
            state.showCart = action.payload ? action.payload : !state.showCart
        },
        increaseCartQuantity: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            const existingItem = state.cartProducts.find(item => item.id === itemId);

            if (!existingItem) {
                state.cartProducts.push({ id: itemId, quantity: 1 });
            } else {
                existingItem.quantity++;
            }

            state.cartQuantity++;
            setToLocalStorage(state.cartProducts);
        },
        decreaseCartQuantity: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            const existingItem = state.cartProducts.find(item => item.id === itemId);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.cartProducts = state.cartProducts.filter((item: CartItem) => item.id !== itemId);
                } else {
                    existingItem.quantity--;
                }

                state.cartQuantity--;
                setToLocalStorage(state.cartProducts);
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            const existingItem = state.cartProducts.find(item => item.id === itemId);

            if (existingItem) {
                state.cartProducts = state.cartProducts.filter((item: CartItem) => item.id !== itemId);
                state.cartQuantity -= existingItem.quantity;
                setToLocalStorage(state.cartProducts);
            }
        },
        deleteAll: (state) => {
            state.cartProducts = [];
            state.cartQuantity = 0;
            setToLocalStorage(state.cartProducts);
        }
    },
});

function setToLocalStorage(products: CartItem[]) {
    localStorage.setItem("CartProducts", JSON.stringify(products));
}

export const { setShowCart, increaseCartQuantity, decreaseCartQuantity, removeFromCart, deleteAll } = cartSlice.actions

export default cartSlice.reducer