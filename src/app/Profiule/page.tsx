
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

const handleSignOut = async ()=>{
    await authClient.signOut();
}




export default function ProfilePage() {
    const {data:session} = authClient.useSession();
const user = session?.user;

  const [showPassword, setShowPassword] = useState(false);
  const [editing, setEditing] = useState(false);

  // Demo data: replace with the authenticated user's data.
  const [name, setName] = useState(user?.name);
  const [email,setEmail] = useState(user?.email);



  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-4xl">
        {/* Page heading */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-[#6c796e] transition hover:text-green-700"
          >
            ← হোম পেজে ফিরে যান
          </Link>

          <h1 className="mt-4 text-2xl font-extrabold text-[#26352c] sm:text-3xl">
            আমার প্রোফাইল
          </h1>
          <p className="mt-2 text-sm text-[#7b857d] sm:text-base">
            আপনার অ্যাকাউন্টের তথ্য ও নিরাপত্তা পরিচালনা করুন।
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[260px_1fr]">
          {/* Profile sidebar */}
          <aside className="h-fit rounded-2xl border border-[#e0e9e1] bg-[#fbfdfb] p-6 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#e2f1e5] text-3xl font-bold text-[#07883f]">
              {name?.trim().charAt(0) }
            </div>

            <h2 className="mt-4 text-lg font-bold text-[#26352c]">
              {name}
            </h2>
            <p className="mt-1 break-all text-sm text-[#7b857d]">
              {email}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#eaf6ed] px-3 py-1.5 text-xs font-semibold text-[#238447]">
              <span className="h-2 w-2 rounded-full bg-[#238447]" />
              সাইন ইন করা আছে
            </div>

            <div className="mt-6 border-t border-[#e5ebe5] pt-5 text-left">
              <Link
                href="/"
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#59635b] transition hover:bg-[#f0f5f0] hover:text-[#07883f]"
              >
                ← বাজারদর দেখুন
              </Link>
            </div>
          </aside>

          {/* Account settings */}
          <div className="space-y-6">
            <section className="rounded-2xl border border-[#e0e9e1] bg-[#fbfdfb] p-5 shadow-sm sm:p-6">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-[#26352c]">
                    ব্যক্তিগত তথ্য
                  </h2>
                  <p className="mt-1 text-sm text-[#7b857d]">
                    আপনার প্রোফাইলের তথ্য দেখুন ও পরিবর্তন করুন।
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setEditing(!editing)}
                  className="shrink-0 rounded-lg border border-[#dfe8e0] px-3 py-2 text-sm font-semibold text-[#07883f] transition hover:bg-[#f0f5f0]"
                >
                  {editing ? "বাতিল" : "সম্পাদনা"}
                </button>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setEditing(false);
                  // Save name through your authenticated API.
                }}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!editing}
                    required
                    className="w-full rounded-lg border border-[#dfe8e0] bg-white px-3 py-3 text-sm text-[#26352c] outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:bg-[#f3f6f3] disabled:text-[#59635b]"
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
                    type="email"
                    value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    disabled={!editing}
                    required
                    className="w-full rounded-lg border border-[#dfe8e0] bg-[#f3f6f3] px-3 py-3 text-sm text-[#59635b] outline-none"
                  />
                  <p className="mt-1.5 text-xs text-[#7b857d]">
                    ইমেইল পরিবর্তনের জন্য আলাদা যাচাইকরণ প্রক্রিয়া ব্যবহার করুন।
                  </p>
                </div>

                {editing && (
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#07883f] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#067535] sm:w-auto"
                  >
                    পরিবর্তন সংরক্ষণ করুন
                  </button>
                )}
              </form>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
