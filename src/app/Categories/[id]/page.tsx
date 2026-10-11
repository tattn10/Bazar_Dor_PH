import type { CategoryDetails, CategoryRouteProps, Category } from "@/types/bazardor";
import ProductCard from "@/Components/ProductDetails/page";
import { notFound } from "next/navigation";

const CategoryDetailsPage = async ({ params }: CategoryRouteProps) => {
    
    const { id } = await params;

    const res= await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${id}`,{
  next: { revalidate: 300 },
});

    const res2= await fetch(`https://api.abcz.workers.dev/api/bazardor/categories`,{
  next: { revalidate: 300 },
});

    const p: CategoryDetails[] = await res.json();
    const categories: Category[] = await res2.json();


    const category = categories.find((cat) => String(cat.id) === id);
    if (!category) {
        notFound();
    }

    return (
        <>
        <div className="max-w-7xl mx-auto my-4">

           <div className="my-4 flex gap-2 items-center shadow-sm p-4 rounded-lg bg-base-100 mb-8">
  
       
      <p className="text-5xl">{category.icon}</p>
      <div>
           <p className="font-bold text-2xl">{category.nameBn}</p>
           <p className="text-gray-600 text-sm">{p.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
      </div>
 
        </div>

            <p className="text-gray-600 my-2">মোট {p.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            { p.map(product => <div className="my-2" key={product.id}>
        <ProductCard product={product} />
        </div>
        
        )}
</div>
           
        </div>

        </>
    )
}

export default CategoryDetailsPage;