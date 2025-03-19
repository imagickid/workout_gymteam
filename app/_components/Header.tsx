import Link from "next/link";
import Logo from "./Logo";
import Navigation from "./Navigation";
import OptionsBlock from "./OptionsBlock";

function Header() {
  return (
    <header className="flex items-center justify-between bg-neutral-900 p-1 text-neutral-200 sm:p-2 md:bg-transparent md:p-4">
      <Link href="/">
        <Logo />
      </Link>
      <Navigation />
      <OptionsBlock />
    </header>
  );
}

export default Header;
