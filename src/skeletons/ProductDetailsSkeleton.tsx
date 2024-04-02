function ProductDetailsSkeleton() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 items-center w-full">
            <div className="bg-secondary w-full h-96 rounded-lg mt-3"></div>

            <div className="w-full mt-4 lg:mt-0">
                {/* Categorie */}
                <div className="bg-secondary w-[15%] md:w-[25%] h-2 md:h-3 rounded"></div>

                {/* Title */}
                <div className="bg-secondary w-[100%] h-4 md:h-6 mt-5 rounded"></div>

                {/* Description */}
                <div className="bg-secondary w-[100%] h-3 md:h-4 mt-10 rounded"></div>
                <div className="bg-secondary w-[100%] h-3 md:h-4 mt-3 rounded"></div>
                <div className="bg-secondary w-[35%] md:w-[65%] h-3 md:h-4 mt-3 rounded"></div>

                {/* Button */}
                <div className='bg-secondary w-[100%] h-12 rounded-lg mt-14'></div>
            </div>
        </div>
    )
}

export default ProductDetailsSkeleton