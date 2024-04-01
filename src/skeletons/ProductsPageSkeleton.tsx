import ProductCardSkeleton from "./ProductCardSkeleton"

function ProductsPageSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-16 animate-pulse">
            {Array.from({ length: 5 }).map((_, index) => <ProductCardSkeleton key={index} />)}
        </div>
    )
}

export default ProductsPageSkeleton