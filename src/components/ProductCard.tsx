import { Link } from "react-router-dom"
import Button from "./ui/Button"
import ShoppingCart from "./icons/ShoppingCart"
import { Product } from "../types/Product"
import { useDispatch } from "react-redux"
import { increaseCartQuantity, setShowCart } from "./cart/cartSlice"

function ProductCard({ product }: { product: Product }) {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col justify-start items-center w-full rounded-3xl px-5 py-3 shadow">
            <Link to={`/products/${product?.id}`}>
                <img src={product?.image} alt='' className='h-36 mt-3' />
            </Link>
            <div className="flex flex-col justify-between items-start w-full mt-6">
                <div className="flex justify-between items-center font-bold w-full">
                    <Link to={`/products/${product?.id}`}>
                        <p className='text-sm line-clamp-1'>{product?.title}</p>
                    </Link>
                    <p className='text-xs whitespace-nowrap'>
                        {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(parseFloat(product.price))}
                    </p>
                </div>
                <p className='text-sm w-full mt-1.5 line-clamp-1'>{product?.description}</p>
            </div>

            <Button
                button={{
                    action: () => { dispatch(increaseCartQuantity(product?.id)); dispatch(setShowCart(true)); },
                    style: "w-full mt-3 px-10 py-2 space-x-1 text-sm text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/70"
                }}
            >
                <>
                    <span className="text-xl"><ShoppingCart color='#fff' /></span>
                    <span>Add to cart</span>
                </>
            </Button>
        </div>
    )
}

export default ProductCard