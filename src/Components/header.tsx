import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo-icon.png"
import Marquee from "./marquee";
import { connection } from "next/server";
import Categories from "@/app/Categories/page";
import type { Category } from "@/types/bazardor";
import UserInfo from "./userInfo";

const Header = async () => {
  await connection();
const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories",{
  next: { revalidate: 300 },
});

if (!res.ok) {
  throw new Error(`Request failed: ${res.status}`);
}
const data: Category[] = await res.json();

    const today = new Date();

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const bengaliDate = today.toLocaleDateString("bn-BD", options);

console.log(bengaliDate);
    
    return (
<>

 <div className=" bg-base-100 shadow-sm ">
    <div className="max-w-7xl mx-auto">
    <div className="navbar border-b-2 border-gray-200">
  <div className="navbar-start flex gap-2 items-center">
    <div>

 <Link href="/" className="btn btn-ghost px-0">
    <Image
    className="rounded-[10px] bg-green-600"
      src={logo}
      alt="Logo"
      width={50}
      height={50}
    />
  </Link>

    </div>
 
    <div>
        <Link href="/" className="btn btn-ghost px-0 text-xl">
     <p>বাজার দর</p> 
    </Link>
    <p className="text-[12px] text-gray-500">{bengaliDate}</p>
    </div>
  </div>
  
<UserInfo />

</div>


<div className="bg-base-100 flex gap-6 my-2">
    {
        data.map((category) => (
          <Categories key={category.id} category={category} />
        ))
    }
</div>



</div>


</div>


<div>
    <Marquee />
</div>
</>
    )
}

export default Header;