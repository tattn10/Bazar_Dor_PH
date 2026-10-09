import HeroSec from "@/Components/hero-sec";
import AllProducts from "./AllProducts/page";
import PriceUp from "@/Components/priceUp";
import PriceDown from "@/Components/priceDown";


export default async function Home() {

  const products= await fetch("https://api.api-store.workers.dev/api/bazardor/products");
  const data = await products.json();
  console.log(data);


  return (
    <>
  
  <HeroSec />
  <PriceUp data={data} />
  <PriceDown data={data} />
  <AllProducts data={data} />
    </>
  );
}
