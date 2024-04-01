function ProductCardSkeleton() {
  return (
    <div className="flex flex-col justify-start items-center w-full rounded-3xl py-3">
      <div className='w-full h-36 bg-secondary rounded-t' />

      <div className="flex flex-col justify-between items-start w-full mt-2 p-2">
        <div className="w-full h-3.5 bg-secondary rounded"></div>
        <div className="w-full h-3 bg-secondary rounded mt-2"></div>
        <div className="w-full h-8 bg-secondary rounded-full mt-3"></div>
      </div>
    </div>
  )
}

export default ProductCardSkeleton