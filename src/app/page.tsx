import HeroSec from "@/Components/hero-sec";
import AllProducts from "./AllProducts/page";
import PriceUp from "@/Components/priceUp";
import PriceDown from "@/Components/priceDown";
import type { Product } from "@/types/bazardor";


export default async function Home() {

  const res= await fetch("https://api.api-store.workers.dev/api/bazardor/products",{
  next: { revalidate: 300 },
});
  if (!res.ok) {
  throw new Error(`Request failed: ${res.status}`);
}
  const data: Product[] = await res.json();



  return (
    <>
  
  <HeroSec />
  <PriceUp data={data} />
  <PriceDown data={data} />
  <AllProducts data={data} />
    </>
  );
}
