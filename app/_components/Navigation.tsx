import Link from 'next/link';

function Navigation() {
  return (
    <nav className="hidden md:block">
      <ul className="flex justify-center space-x-9 text-sm">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
