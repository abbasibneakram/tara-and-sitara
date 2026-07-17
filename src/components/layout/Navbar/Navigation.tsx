import Link from "next/link";
import type { NavigationItem } from "./types";


interface NavigationProps {
  items: NavigationItem[];
}

export default function Navigation({ items }: NavigationProps) {
  return (
    <nav className="flex items-center gap-6">
  {items.map((item) => (
    <Link key={item.href} href={item.href}>
      {item.label}
    </Link>
  ))}
</nav>
  );
}