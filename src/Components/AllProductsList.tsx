import ProductCard from "@/Components/ProductDetails/page";
import type { ProductListProps } from "@/types/bazardor";

const AllProductsList = ({ data }: ProductListProps) => {
  return (
    <div className="max-w-7xl mx-auto my-8">
      <p className="text-lg font-bold">সব পণ্য</p>
      <p className="text-sm text-gray-500">
        মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-1 justify-center items-center">
        {data.map((product) => (
          <div key={product.id} className="my-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsList;
