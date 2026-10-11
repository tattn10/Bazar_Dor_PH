import type { CategoryRouteProps, Product } from "@/types/bazardor";
import { notFound } from "next/navigation";



const ProductDetail = async ({params}:  CategoryRouteProps ) => {
    const {id} = await params;

    const res= await fetch(`https://openapi.programming-hero.com/api/bazardor/products`,{
  next: { revalidate: 300 },
});

    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
    }


    const alldata: Product[] = await res.json();

    const data = alldata.find((product) => String(product.id) === id);
    if (!data) {
        notFound();
    }

  let changeDir = "";
    if(data.change.pct>0){
     changeDir = " বেড়েছে ";
    }
    else if(data.change.pct<0){
    changeDir = " কমেছে ";
    }
    else{
     changeDir = " সমান আছে ";
    }

const formatPrice = (price: number) =>
  `${price.toLocaleString("bn-BD")} টাকা`;

    const prices=[data.today,data.yesterday,data.lastWeek,data.lastMonth];
    const maxPrice=Math.max(...prices);
    const minPrice=Math.min(...prices);
    const avgPrice=prices.reduce((a,b)=>a+b,0)/prices.length;
    
    return (
        <>

<div className="max-w-7xl mx-auto my-4 ">

<div className="my-4 flex justify-between gap-2 items-center shadow-sm p-4 rounded-lg bg-base-100 mb-8 ">
  
       <div className="flex gap-2 items-center ">
      <p className="text-5xl p-2 bg-base-200 rounded-sm shadow-sm">{data.image}</p>
      <div>
           <p className="font-bold text-2xl">{data.nameBn}</p>
           <p className="text-gray-600 text-sm">{`গতকালের তুলনায় আজ দাম ${changeDir} ${changeDir === " সমান আছে " ? "" : Math.abs(data.today-data.yesterday).toLocaleString("bn-BD")} টাকা`}</p>
      </div>
</div>
<div className="flex flex-col  items-center bg-base-200 shadow-sm p-4 rounded-lg">

<p className="text-gray-600 text-sm">আজকের দাম</p>
<p className="font-bold text-2xl">{data.today.toLocaleString("bn-BD")}</p>
<p className="text-gray-600 text-sm">টাকা / কেজি</p>
<p className={`${data.change.pct > 0 ? 'text-red-500' : 'text-green-500'} text-sm `}>{data.change.pct}%</p>
</div>
</div>


<div className="my-4  shadow-sm p-4 rounded-lg bg-base-100 mb-8 ">

<div>
<p className="font-semibold text-xl py-4">দামের সারসংক্ষেপ</p>

<div className="grid grid-cols-3 gap-6">
<div className="flex flex-col justify-center bg-base-200 shadow-sm p-4 rounded-lg">

<p className="text-gray-600 text-sm">সর্বনিম্ন দাম</p>
<p className={`text-green-500 font-bold text-2xl`}>{minPrice.toLocaleString("bn-BD")} টাকা</p>
<p className="text-gray-600 text-sm">সবচেয়ে কম দামের বাজার</p>

</div>

<div className="flex flex-col  justify-center bg-base-200 shadow-sm p-4 rounded-lg">

<p className="text-gray-600 text-sm">সর্বাধিক দাম</p>
<p className={`text-red-500 font-bold text-2xl`}>{maxPrice.toLocaleString("bn-BD")} টাকা</p>
<p className="text-gray-600 text-sm">সবচেয়ে বেশি দামের বাজার</p>

</div>
<div className="flex flex-col  justify-center bg-base-200 shadow-sm p-4 rounded-lg">

<p className="text-gray-600 text-sm">গড় দাম</p>
<p className={`font-bold text-2xl`}>{avgPrice.toLocaleString("bn-BD")} টাকা</p>
<p className="text-gray-600 text-sm">প্রতি কেজি-এর হিসাবে</p>

</div>
</div>

</div>

<div>
<p className="font-semibold text-xl py-4">বাজারভিত্তিক আজকের দাম</p>


 <section className="w-full overflow-hidden rounded-xl border border-[#dfe8e0] bg-[#f8fbf8]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[#e5ebe5] text-[#788078]">
              <th className="px-3 py-3 font-semibold">বাজার</th>
              <th className="px-3 py-3 font-semibold">বিভাগ</th>
              <th className="px-3 py-3 text-right font-semibold">সর্বনিম্ন</th>
              <th className="px-3 py-3 text-right font-semibold">সর্বোচ্চ</th>
              <th className="px-3 py-3 text-right font-semibold">গড়</th>
            </tr>
          </thead>

          <tbody>
            {data.markets.map((item, index) => {
              const average = (item.min + item.max) / 2;

              return (
                <tr
                  key={`${item.market}-${item.division}`}
                  className={`border-b border-[#d7dfd7] last:border-b-0 ${
                    index % 2 === 0 ? "bg-[#f0f5f0]" : "bg-[#fbfdfb]"
                  } transition-colors hover:bg-[#e6f2e8]`}
                >
                  <td className="whitespace-nowrap px-3 py-3 font-medium text-[#354239]">
                    {item.market}
                  </td>

                  <td className="whitespace-nowrap px-3 py-3 text-[#68736a]">
                    {item.division}
                  </td>

                  <td className="whitespace-nowrap px-3 py-3 text-right text-[#465248]">
                    {formatPrice(item.min)}
                  </td>

                  <td className="whitespace-nowrap px-3 py-3 text-right text-[#465248]">
                    {formatPrice(item.max)}
                  </td>

                  <td className="whitespace-nowrap px-3 py-3 text-right font-semibold text-[#26352c]">
                    {formatPrice(average)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>












</div>
  
</div>




</div>


   
        </>
    )
}

export default ProductDetail;