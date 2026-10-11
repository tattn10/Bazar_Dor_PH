
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-[#f0f5f0] px-4 py-12 text-center">
      <div className="w-full max-w-md rounded-3xl border border-[#e0e9e1] bg-[#fbfdfb] p-8 shadow-sm sm:p-10">
        {/* 404 Illustration */}
        <div className="relative mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-full bg-[#e4f2e6]">
          <span className="text-6xl font-extrabold tracking-tight text-[#07883f]">
            404
          </span>

          <span className="absolute -right-1 top-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d5e8d8] bg-white text-2xl shadow-sm">
            🛒
          </span>
        </div>

        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#07883f]">
          Page Not Found
        </p>

        <h1 className="text-2xl font-extrabold text-[#26352c] sm:text-3xl">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h1>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#7b857d] sm:text-base">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না।
          পেজটি সরানো হয়েছে অথবা ঠিকানাটি ভুল হতে পারে।
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#07883f] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#067535] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <span>⌂</span>
            হোম পেজে ফিরে যান
          </Link>

       
        </div>
      </div>

      <p className="mt-6 text-sm text-[#7b857d]">
        আপনার নিত্যপ্রয়োজনীয় পণ্যের সঠিক দাম জানুন
        <span className="ml-1 font-bold text-[#07883f]">BazarDor</span>-এ।
      </p>
    </main>
  );
}
