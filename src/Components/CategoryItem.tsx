import Link from "next/link";
import type { CategoryItemProps } from "@/types/bazardor";

const CategoryItem = ({ category }: CategoryItemProps) => (
  <Link href={`/Categories/${category.id}`}>
    <div className="text-sm hover:text-green-400">
      <span>{category.icon}</span>
      <span>{category.nameBn}</span>
    </div>
  </Link>
);

export default CategoryItem;
