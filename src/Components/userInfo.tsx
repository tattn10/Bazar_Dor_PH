'use-client'

import Link from "next/link";

const UserInfo = () => {
    
    return (
        <>
          <div className="navbar-end flex gap-2">
    <Link href="/LogIn">
      <button className="btn">সাইন ইন</button>
    </Link>
    <Link href="/SignUp">
      <button className="btn bg-green-600 shadow-lg text-white">সাইন আপ</button>
    </Link>
  </div>
        </>
    )
}

export default UserInfo;