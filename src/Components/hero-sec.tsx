import Image from "next/image";
import heroImg from "@/app/assets/bazar-hero.png"
import Link from "next/link";
const HeroSec = () => {
    
 const today = new Date();

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const bengaliDate = today.toLocaleDateString("bn-BD", options);



    return (
        <>
        <div className="hero bg-base-300 max-w-7xl mx-auto my-4 rounded-lg shadow-lg px-8">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <Image
   src={heroImg}
   height={300}
   width={500}  
    alt="hero image"
    />
    <div>
          <p className="text-md text-green-700 bg-green-100 w-fit p-1 rounded-md">{bengaliDate}</p>
      <h1 className="text-5xl font-bold">আজকের বাজারের দাম এক নজরে</h1>
      <p className="py-6">
       চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
      </p>
    <Link href="/AllProducts">
      <button className="btn bg-green-600 hover:bg-green-800 text-white">সব পণ্য দেখুন</button>
    </Link>
    </div>
  </div>
</div>
        
        
        </>
    )
}

export default HeroSec;