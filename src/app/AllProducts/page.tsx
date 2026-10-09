import PriceUp from "@/Components/priceUp";
import ProductCard from "@/Components/productCard";

const AllProducts = async () => {
      const products= await fetch("https://api.api-store.workers.dev/api/bazardor/products");
  const data = await products.json();
  const priceUp = data.filter(p => p.change.dir === "up");
  console.log(data);
    return (
        <>
        <div className="max-w-7xl mx-auto my-8">

            <p className="text-lg font-bold">সব পণ্য</p>
            <p className="text-sm text-gray-500">মোট {Number(data.length).toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
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

export default AllProducts;