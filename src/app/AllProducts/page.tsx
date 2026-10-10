import AllProductsList from "@/Components/AllProductsList";
import type { Product } from "@/types/bazardor";

const AllProducts = async () => {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { next: { revalidate: 300 } },
  );

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const result: unknown = await response.json();
  if (!Array.isArray(result)) {
    throw new Error("Products API response must be an array.");
  }

  const data = result as Product[];

  return <AllProductsList data={data} />;
};

export default AllProducts;