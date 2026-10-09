import { cacheLife } from "next/cache";

export type Product = {
  id: string | number;
  image: string;
  nameBn: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down";
    pct: number;
  };
};

export type Category = {
  id: string | number;
  icon: string;
  nameBn: string;
};

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

const API_URL = "https://api.api-store.workers.dev/api/bazardor";

async function fetchApi<T>(path: string): Promise<ApiResult<T>> {
  "use cache";
  cacheLife({ stale: 5, revalidate: 30, expire: 60 });

  try {
    const response = await fetch(`${API_URL}/${path}`);

    if (!response.ok) {
      return {
        ok: false,
        error: `তথ্য লোড করা যাচ্ছে না (HTTP ${response.status})। কিছুক্ষণ পরে আবার চেষ্টা করুন।`,
      };
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return {
        ok: false,
        error: "সার্ভার থেকে সঠিক তথ্য পাওয়া যায়নি। কিছুক্ষণ পরে আবার চেষ্টা করুন।",
      };
    }

    return { ok: true, data: (await response.json()) as T };
  } catch (error) {
    console.error(`Failed to load bazar-dor ${path} API:`, error);
    return {
      ok: false,
      error: "সার্ভারের সাথে সংযোগ করা যাচ্ছে না। কিছুক্ষণ পরে আবার চেষ্টা করুন।",
    };
  }
}

export function getProducts() {
  return fetchApi<Product[]>("products");
}

export function getCategories() {
  return fetchApi<Category[]>("categories");
}
