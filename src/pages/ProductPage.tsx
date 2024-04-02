import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProductService from "../services/ProductService";
import { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import ProductDetailsSkeleton from "../skeletons/ProductDetailsSkeleton";
import ProductDetails from "../components/ProductDetails";
import RelatedProductsSkeleton from "../skeletons/RelatedProductsSkeleton";

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>();
    const [products, setProducts] = useState<Product[] | null>();

    useEffect(() => {
        setProduct(null);
        ProductService.getProduct(parseInt(id!))
            .then(res => setProduct(res));
    }, [id]);

    useEffect(() => {
        setProducts(null);
        if (product)
            ProductService.getProductsByCategory(product?.category)
                .then(res => setProducts(res));
    }, [product]);

    return (
        <section className="mb-16">
            {product ?
                <ProductDetails key={product?.id} product={product!} />
                :
                <ProductDetailsSkeleton />
            }
            {products ?
                <div className="mt-10">
                    <p className='font-bold text-2xl 2xl:text-4xl'>
                        Related Products
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
                        {products?.filter(relatedProduct => relatedProduct.id !== product?.id).map(relatedProduct =>
                            <ProductCard key={relatedProduct.id} product={relatedProduct} />
                        )}
                    </div>
                </div>
                :
                <RelatedProductsSkeleton />
            }
        </section>
    )
}

export default ProductPage