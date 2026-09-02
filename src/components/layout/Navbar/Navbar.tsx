import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import Logo from "./Logo";
import { navigationItems } from "./navigationData";
import Search from "@/features/search/components/Search";
import CartButton from "@/features/cart/components/CartButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="hidden md:flex items-center justify-between">
        <Logo />

        <Navigation items={navigationItems} />

        <div className="flex items-center gap-4">
          <Search />
          <CartButton />
          <button type="button">Account</button>
        </div>
      </div>

      <div className="flex items-center justify-between md:hidden">
        <Logo />
        <MobileMenu items={navigationItems} />
      </div>
    </nav>
  );
}
