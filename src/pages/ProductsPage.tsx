import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import ProductService from "../services/ProductService"
import { Product } from "../types/Product"
import ProductsPageSkeleton from "../skeletons/ProductsPageSkeleton";

function ProductsPage({ searchQuery }: { searchQuery: string }) {
    const [products, setProducts] = useState<Product[]>();
    const [searchProducts, setSearchProducts] = useState<Product[]>();

    useEffect(() => {
        ProductService.getProducts()
            .then(res => setProducts(res));
    }, []);

    useEffect(() => {
        if (!searchQuery || searchQuery.trim() === '') {
            setSearchProducts(products);
        } else {
            setSearchProducts(products => products?.filter(
                ({ title, description }) =>
                    title.toLocaleLowerCase().includes(searchQuery) ||
                    description.toLowerCase().includes(searchQuery)
            ));
        }
    }, [products, searchQuery]);

    return (
        <main className="mb-16">
            {searchProducts ?
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {searchProducts.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </div>
                :
                <ProductsPageSkeleton />
            }
        </main>
    )
}

export default ProductsPage