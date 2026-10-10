import ProductCard from "@/Components/ProductDetails/page";
import type { ProductListProps } from "@/types/bazardor";

const PriceUp = ({data}: ProductListProps) => {
    const priceUp = data.filter(p => p.change.dir === "up").sort((a,b)=> b.change.pct-a.change.pct).slice(1,7);
    return (
        <>
        <div className="mt-8 max-w-7xl mx-auto">
            <p className="text-lg font-bold"><span className="text-red-500">▲</span> আজ দাম বেড়েছে</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-1 justify-center items-center">
                {
                    priceUp.map(product => <div key={product.id} className="my-4">
                        <ProductCard product={product} />
                    </div>)
                }
            </div>
        </div>
        </>
    )
}

export default PriceUp;