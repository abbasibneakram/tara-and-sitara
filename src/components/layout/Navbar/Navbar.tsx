import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import Logo from "./Logo";
import { navigationItems } from "./navigationData";
// import SearchInput from "@/src/features/search/components/SearchInput";
import Search from "@/src/features/search/components/Search";

export default function Navbar() {
  return (
    <nav>
      <div className="hidden md:flex items-center justify-between">
        <Logo />

        <Navigation items={navigationItems} />

        <div className="flex items-center gap-4">
  <Search />
  <button type="button">Cart</button>
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