import CategoryItem from "@/Components/CategoryItem";
import type { Category } from "@/types/bazardor";

const CategoriesPage = async () => {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    { next: { revalidate: 300 } },
  );

  if (!response.ok) {
    throw new Error(`Category request failed: ${response.status}`);
  }

  const categories: Category[] = await response.json();

  return (
    <main className="mx-auto my-8 max-w-7xl">
      <h1 className="mb-4 text-2xl font-bold">সব ক্যাটাগরি</h1>
      <div className="flex flex-wrap gap-6">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
};

export default CategoriesPage;
