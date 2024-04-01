import ProductCardSkeleton from "./ProductCardSkeleton"

function RelatedProductsSkeleton() {
    return (
        <div className="animate-pulse mt-10">
            {/* categorie title */}
            < div className='bg-secondary w-[60%] md:w-[20%] h-7 rounded'></div>

            {/* products */}
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-6'>
                {Array.from({ length: 3 }).map((_, index) => <ProductCardSkeleton key={index} />)}
            </div>
        </div>
    )
}

export default RelatedProductsSkeleton