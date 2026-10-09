import ProductCard from "./productCard";

const PriceDown = ({ data }) => {
    const priceDown = data.filter(p => p.change.dir === "down");
    return (
        <>
        <div>
            <p className="text-lg font-bold"><span className="text-green-500">▼</span> আজ দাম কমেছে</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-1 justify-center items-center">
                {
                    priceDown.map(product => <div key={product.id} className="my-4">
                        <ProductCard product={product} />
                    </div>)
                }
            </div>
        </div>
        </>
    )
}

export default PriceDown;