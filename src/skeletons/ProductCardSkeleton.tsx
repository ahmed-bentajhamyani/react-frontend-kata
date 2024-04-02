function ProductCardSkeleton() {
  return (
    <section className="flex flex-col justify-start items-center w-full py-3">
      <div className='w-full h-36 bg-secondary rounded-t-lg' />

      <div className="flex flex-col justify-between items-start w-full mt-2 p-2">
        <div className="w-full h-3.5 bg-secondary rounded"></div>
        <div className="w-full h-3 bg-secondary rounded mt-2"></div>
        <div className="w-full h-10 bg-secondary rounded-lg mt-3"></div>
      </div>
    </section>
  )
}

export default ProductCardSkeleton