import { Product } from "../types/Product"
import ShoppingCart from "./icons/ShoppingCart"
import Button from "./ui/Button"

function ProductDetails({ product }: { product: Product }) {
    return (
        <div className='flex flex-col justify-center lg:items-center'>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-x-8">
                <img src={product?.image} alt='' className='h-[300px] md:h-[400px] mt-3' />
                <div className="flex flex-grow flex-col justify-between bg-secondary mt-6 px-5 py-3 w-full rounded-3xl">
                    <p className='mt-3'>{product?.category}</p>

                    <div className="flex justify-between items-start space-x-3 font-bold">
                        <p className='text-lg md:text-2xl'>{product?.title}</p>
                        <p className='md:text-xl whitespace-nowrap'>
                            {Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                            }).format(parseFloat(product?.price))}
                        </p>
                    </div>

                    <p className='text-sm md:text-base mt-3'>{product?.description}</p>

                    <Button
                        button={{
                            style: "w-full mt-6 py-2.5 space-x-1 text-lg text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/70"
                        }}
                    >
                        <>
                            <span className="text-3xl"><ShoppingCart color='#fff' /></span>
                            <span>Add to cart</span>
                        </>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails