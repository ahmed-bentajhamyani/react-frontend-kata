import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import ProductService from "../services/ProductService"
import { Product } from "../types/Product"
import ProductsPageSkeleton from "../skeletons/ProductsPageSkeleton";

function ProductsPage() {
    const [products, setProducts] = useState<Product[]>();

    useEffect(() => {
        ProductService.getProducts()
            .then(res => setProducts(res));
    }, [])

    return (
        <div className="my-16">
            {products ?
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {products.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </div>
                :
                <ProductsPageSkeleton />
            }
        </div>
    )
}

export default ProductsPage