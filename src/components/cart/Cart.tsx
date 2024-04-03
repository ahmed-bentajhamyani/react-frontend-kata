import { useEffect, useState } from "react"
import { Product } from "../../types/Product"
import ProductService from "../../services/ProductService"
import { useDispatch, useSelector } from "react-redux"
import Button from "../ui/Button"
import { RootState } from "../../store"
import { deleteAll, setShowCart } from "./cartSlice"
import Close from "../icons/Close"
import { CartItem } from "../../types/CartItem"
import CartProductCard from "./CartProductCard"

function Cart() {
    const [products, setProducts] = useState<Product[]>([]);
    const showCart = useSelector((state: RootState) => state.cart.showCart);
    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
    const cartQuantity = useSelector((state: RootState) => state.cart.cartQuantity);
    const dispatch = useDispatch();

    useEffect(() => {
        ProductService.getProducts()
            .then(res => setProducts(res));
    }, []);

    return (
        <>
            <div className={`flex flex-col justify-center items-center overflow-hidden bg-white fixed w-4/5 sm:w-2/3 lg:w-1/3 h-screen top-0 right-0 z-50 outline-none focus:outline-none duration-300 ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>
                {/*header*/}
                <div className='flex items-center justify-between p-4 w-full border-b'>
                    <h3 className='text-xl font-semibold'>Your cart</h3>
                    <Button button={{
                        action: () => dispatch(setShowCart(false)),
                        style: 'hover:opacity-40'
                    }}
                    >
                        <span className="text-2xl"><Close /></span>
                    </Button>
                </div>

                {/*body*/}
                <div className='relative flex-auto p-4 overflow-y-auto w-full border-b'>
                    {cartProducts?.length > 0 ?
                        <>
                            {/* header */}
                            < div className="flex justify-between items-center mb-2">
                                <p className='font-semibold'>{cartQuantity} products</p>
                                <Button
                                    button={{
                                        action: () => dispatch(deleteAll()),
                                        style: 'font-medium text-sm hover:opacity-40'
                                    }}
                                >
                                    <span>Delete all</span>
                                </Button>
                            </div>

                            {cartProducts.map((cartProduct, index) => {
                                const product: Product = products.find(p => p.id === cartProduct.id)!;
                                if (product) {
                                    return (
                                        <CartProductCard
                                            key={index}
                                            product={product}
                                            cartProduct={cartProduct}
                                        />
                                    );
                                }
                            })}
                        </>
                        :
                        <div className='flex items-center justify-center h-full'>
                            <p className='font-medium whitespace-nowrap'>Your cart is empty.</p>
                        </div>
                    }
                </div>

                {/*footer*/}
                <div className="flex flex-col items-center justify-end w-full p-4">
                    <div className="flex items-center justify-between w-full mb-2">
                        <span className="font-semibold text-sm">Subtotal</span>
                        <span className="font-semibold text-lg">
                            {Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                            }).format(
                                cartProducts?.reduce((total: number, cartProduct: CartItem) => {
                                    const product = products?.find((a) => a.id === cartProduct.id);
                                    return total + (parseFloat(product?.price || '0')) * cartProduct.quantity;
                                }, 0)
                            )}
                        </span>
                    </div>
                    <Button
                        button={{
                            style: "flex justify-center items-center w-full px-10 py-3 space-x-1 text-white bg-primary hover:opacity-80 cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-default",
                            disabled: cartProducts.length < 1
                        }}
                    >
                        <span>Checkout</span>
                    </Button>
                </div>
            </div>
            <div onClick={() => dispatch(setShowCart(false))} className={`opacity-25 fixed inset-0 z-40 bg-black ${showCart ? '' : 'hidden'}`}></div>
        </>
    )
}

export default Cart