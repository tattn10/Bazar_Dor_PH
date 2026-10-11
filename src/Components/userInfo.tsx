'use client'
import { FaSignOutAlt } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

import Link from "next/link";

const UserInfo = () => {
    
const {data:session} = authClient.useSession();
const user = session?.user;

const handleSignOut = async ()=>{
    await authClient.signOut();
}


    return (
        <>


        {user ? <div className="navbar-end flex gap-2 ">
            <div className="avatar flex gap-2 items-center">
                <Link href="/Profiule">
  <div className="w-10 rounded-full">
    <img alt="Tailwind-CSS-Avatar-component" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
  </div>
  </Link>
  <p className="font-bold">{user.name.toUpperCase()}</p>
</div>


<div>
    <Link href='/'>
    <button onClick={handleSignOut}  className=" p-2 rounded-full bg-red-600 shadow-lg text-white"><FaSignOutAlt /></button>
    </Link>
</div>
        </div>:<div className="navbar-end flex gap-2">
    <Link href="/LogIn">
      <button className="btn">সাইন ইন</button>
    </Link>
    <Link href="/SignUp">
      <button className="btn bg-green-600 shadow-lg text-white">সাইন আপ</button>
    </Link>
  </div>
        
    }
          
        </>
    )
}

export default UserInfo;