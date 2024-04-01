import { Product } from '../../types/Product'
import { CartItem } from '../../types/CartItem'
import Button from '../ui/Button'
import { useDispatch } from 'react-redux';
import { decreaseCartQuantity, increaseCartQuantity, removeFromCart } from './cartSlice';
import Minus from '../icons/Minus';
import Plus from '../icons/Plus';
import Trash from '../icons/Trash';

function CartProductCard({ product, cartProduct, }: { product: Product, cartProduct: CartItem }) {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-start items-center space-x-2 lg:space-x-7 p-4">
            <a href={`/market/product/${product?.id}`}>
                <img src={product?.image} alt='' className='w-16 md:w-20' />
            </a>
            <div className="flex flex-1 justify-between items-center">
                <div className="">
                    <a href={`/market/product/${product?.id}`}>
                        <p className='font-semibold text-base line-clamp-1'>{product?.title}</p>
                    </a>
                    <p className='text-xs lg:text-sm line-clamp-1'>{product?.description}</p>

                    <div className="flex justify-start items-center text-xs lg:text-sm space-x-2">
                        <Button button={{
                            action: () => dispatch(decreaseCartQuantity(cartProduct.id)),
                            style: 'px-1 py-1 text-white cursor-pointer rounded focus:outline-none disabled:opacity-50 disabled:cursor-default',
                            disabled: cartProduct.quantity === 1
                        }} >
                            <span><Minus /></span>
                        </Button>
                        <span className='text-text-primary'>{cartProduct.quantity}</span>
                        <Button button={{
                            action: () => dispatch(increaseCartQuantity(cartProduct.id)),
                            style: 'px-1 py-1 text-white cursor-pointer rounded focus:outline-none disabled:opacity-50 disabled:cursor-default',
                        }} >
                            <span><Plus /></span>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className='font-semibold text-sm md:text-lg whitespace-nowrap lg:group-hover:hidden'>
                        {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(parseFloat(product?.price || '0'))}
                    </p>
                    <Button button={{
                        action: () => dispatch(removeFromCart(cartProduct.id)),
                        style: 'cursor-pointer'
                    }} >
                        <span className="text-xl"><Trash /></span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard