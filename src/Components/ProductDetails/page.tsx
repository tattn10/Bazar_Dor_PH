import Link from "next/link";
import type { ProductCardProps } from "@/types/bazardor";

const ProductCard = ({ product }: ProductCardProps) => {
  const isUp = product.change.dir === "up";

  return (
    <Link href={`/product/${product.id}`}>
      <div className="w-full max-w-md rounded-[24px] border border-[#dfe8e0] bg-[#fbfdfb] p-5 shadow-sm hover:border-green-500 hover:shadow-md">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] bg-[#f0f5ef] text-3xl">
            {product.image}
          </div>
          <div>
            <h2 className="text-xl font-bold leading-tight text-[#26352c]">
              {product.nameBn}
            </h2>
            <p className="mt-1 text-sm text-[#626b64]">
              প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="mb-1 text-sm text-[#59635b]">আজকের দাম</p>
            <p className="text-2xl font-extrabold leading-tight text-[#26352c]">
              {product.today.toLocaleString("bn-BD")}{" "}
              <span className="text-lg font-medium">টাকা</span>
            </p>
          </div>
          <div
            className={`mb-1 flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-sm font-bold ${
              isUp
                ? "bg-[#f0f5ef] text-[#d94848]"
                : "bg-[#eaf6ed] text-[#238447]"
            }`}
          >
            <span>{isUp ? "▲" : "▼"}</span>
            <span>{Math.abs(product.change.pct).toLocaleString("bn-BD")}%</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
