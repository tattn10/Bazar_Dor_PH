import Image from "next/image";
import logo from "@/app/assets/logo-icon.png"
const Footer = () => {
    
    return (
        <>
        <footer className="flex flex-col md:flex-row justify-between  bg-base-300 text-base-content px-8 py-4 mt-8 text-sm text-gray-700">
  
    <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
    <div>
        <Image src={logo} alt="Logo" width={30} height={30} className="inline-block mr-2" />
        <span>© 2024 বাজার দর</span>
    </div>
    <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>

</footer>
        
        </>
    )
}

export default Footer;