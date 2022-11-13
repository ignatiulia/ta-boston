import Link from 'next/link';

export default function HeaderPrimary() {
  return (
    <>
      <nav className="nav-primary">
        <ul>
          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li>
            <Link href="/" title="Suits">
              Suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Shirts">
              Shirts
            </Link>
          </li>

          <li>
            <Link href="/" title="Accessories">
              Accessories
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="nav-secondary mt-4">
        <ul>
          <li>
            <Link href="/" title="Glamour Suits">
              Glamour Suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Wedding Suits">
              Wedding Suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Office Suits">
              Office Suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Customize your suit">
              Customize your suit
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
