
"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";




const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
e.preventDefault();
const formData= new FormData(e.target)
const user= Object.fromEntries(formData.entries()) as{ name: string; email: string; password: string; confirmPassword: string }


const {data,error} = await authClient.signUp.email({
    ...user,
    callbackURL: "/" 
})


if(data){
  
    redirect("/");
}

    if(error){
        alert("Error signing up: " + error.message);
    }

}

const SignUp = () => {
      const [showPassword, setShowPassword] = useState(false);

    return (
        <>
        
         <main className="flex min-h-screen flex-col items-center bg-[#f0f5f0] px-4 py-8 sm:py-10">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-[#26352c] sm:text-3xl">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="mt-2 text-sm text-[#7b857d] sm:text-base">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <div className="w-full max-w-[394px] rounded-2xl border border-[#e0e9e1] bg-[#fbfdfb] p-5 shadow-sm sm:p-6">
        <form
          className="space-y-4"
          onSubmit={onSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-[#39453c]"
            >
              নাম
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="যেমন: রহিম উদ্দিন"
              autoComplete="name"
              required
              className="w-full rounded-lg border border-[#dfe8e0] bg-transparent px-3 py-2.5 text-sm text-[#26352c] outline-none transition placeholder:text-[#7b857d] focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-[#39453c]"
            >
              ইমেইল
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-[#dfe8e0] bg-transparent px-3 py-2.5 text-sm text-[#26352c] outline-none transition placeholder:text-[#7b857d] focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-[#39453c]"
            >
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="কমপক্ষে ৮ অক্ষর"
              autoComplete="new-password"
              minLength={8}
              required
              className="w-full rounded-lg border border-[#dfe8e0] bg-transparent px-3 py-2.5 text-sm text-[#26352c] outline-none transition placeholder:text-[#7b857d] focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-sm font-medium text-[#39453c]"
            >
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="আবার লিখুন"
              autoComplete="new-password"
              minLength={8}
              required
              className="w-full rounded-lg border border-[#dfe8e0] bg-transparent px-3 py-2.5 text-sm text-[#26352c] outline-none transition placeholder:text-[#7b857d] focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <label className="flex items-center gap-2 text-xs text-[#59635b]">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
              className="accent-green-700"
            />
            পাসওয়ার্ড দেখুন
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#07883f] px-4 py-3 text-sm font-bold text-white shadow-[0_3px_4px_rgba(0,0,0,0.2)] transition hover:bg-[#067535] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-[0.99]"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#dfe5df]" />
          <span className="text-xs text-[#7b857d]">অথবা</span>
          <div className="h-px flex-1 bg-[#dfe5df]" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className="flex min-w-0 items-center justify-center gap-1.5 rounded-lg border border-[#dfe8e0] px-2 py-2.5 text-xs font-semibold text-[#39453c] transition hover:bg-[#f0f5f0] sm:text-sm"
            onClick={() => {
              // Start Google OAuth here.
            }}
          >
            <GoogleIcon />
            <span>Google দিয়ে চালিয়ে যান</span>
          </button>

          <button
            type="button"
            className="flex min-w-0 items-center justify-center gap-1.5 rounded-lg border border-[#dfe8e0] px-2 py-2.5 text-xs font-semibold text-[#39453c] transition hover:bg-[#f0f5f0] sm:text-sm"
            onClick={() => {
              // Start GitHub OAuth here.
            }}
          >
            <GitHubIcon />
            <span>GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-[#59635b]">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/LogIn"
            className="font-semibold text-[#07883f] hover:underline"
          >
            সাইন ইন করুন
          </Link>
        </p>
      </div>

      <Link
        href="/"
        className="mt-6 text-sm text-[#7b857d] transition hover:text-green-700"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </main>
    </>
  );
  
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" transform="translate(2 4) scale(.9)"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.75 7.18l7.73 6C44.43 37.98 46.98 31.85 46.98 24.55Z" transform="translate(1 1) scale(.9)"/>
      <path fill="#FBBC05" d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a23.95 23.95 0 0 0 0 21.56l7.98-6.19Z" transform="translate(2 4) scale(.9)"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.17 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" transform="translate(2 0) scale(.9)"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.48-.28-5.08-1.24-5.08-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.06 1.14a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.09 5.5.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}
        


export default SignUp;