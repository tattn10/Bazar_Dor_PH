import Marqueee from "react-fast-marquee";
import { FaArrowCircleUp,FaArrowCircleDown } from "react-icons/fa";
import type { Product } from "@/types/bazardor";

const Marquee = async() => {
    
  const res= await fetch("https://api.api-store.workers.dev/api/bazardor/products",{
  next: { revalidate: 300 },
});
  if (!res.ok) {
  throw new Error(`Request failed: ${res.status}`);
}
  const data: Product[] = await res.json();

    return (
        <>
        <Marqueee speed={100} gradient={false} className="bg-base-100 my-4 shadow-sm">
        <div className="flex gap-4">
           {
           data.map(product => <div key={product.id} className="text-sm flex gap-3 " >
            <div className="flex items-center gap-1">
            <p>{product.image}</p>
            <p>{product.nameBn}</p>
            <p>{
                product.today ?
            Number(product.today).toLocaleString("bn-BD") : ""
        } টাকা/কেজি</p>
            <p>{
                product.change.dir === "up" ? <FaArrowCircleUp className="text-red-500" /> : <FaArrowCircleDown className="text-green-500" />
                
                }</p>

                <p className={` ${product.change.pct > 0 ? 'text-red-500' : 'text-green-500'}`}>
                    {Math.abs(product.change.pct)}%
                </p>
            </div>
            </div>)
           }
        </div>
        </Marqueee>     
        </>
    )
}

export default Marquee;