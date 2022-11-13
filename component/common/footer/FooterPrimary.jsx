import Link from 'next/link';

export default function FooterPrimary() {
  return (
    <div className="container footer-primary-inner">
      <nav className="footer-nav">
        <ul>
          <li>
            <Link href="/" title="Information">
              Information
            </Link>
          </li>

          <li>
            <Link href="/" title="Contact us">
              Contact us
            </Link>
          </li>

          <li>
            <Link href="/" title="Track my order">
              Track my order
            </Link>
          </li>

          <li>
            <Link href="/" title="Shipping">
              Shipping
            </Link>
          </li>

          <li>
            <Link href="/" title="Free Returns*">
              {' '}
              Free Returns*
            </Link>
          </li>

          <li>
            <Link href="/" title="My Account">
              My Account
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Careers">
              Careers
            </Link>
          </li>

          <li>
            <Link href="/" title="About us">
              About us
            </Link>
          </li>

          <li>
            <Link href="/" title="Our Story">
              Our Story
            </Link>
          </li>

          <li>
            <Link href="/" title="Art & Culture">
              Art & Culture
            </Link>
          </li>

          <li>
            <Link href="/" title="Our private labels">
              Our private labels
            </Link>
          </li>

          <li>
            <Link href="/" title="Stories">
              Stories
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Services">
              Services
            </Link>
          </li>

          <li>
            <Link href="/" title="Ship to store">
              Ship to store
            </Link>
          </li>

          <li>
            <Link href="/" title="Gift card">
              Gift card
            </Link>
          </li>

          <li>
            <Link href="/" title="Online only">
              Online only
            </Link>
          </li>

          <li>
            <Link href="/" title="Tips & tricks">
              Tips & tricks
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Loyalty programs">
              Loyalty programs
            </Link>
          </li>

          <li>
            <Link href="/" title="Sign up to the simons">
              Sign up to the simons
            </Link>
          </li>

          <li>
            <Link href="/" title="My account">
              My account
            </Link>
          </li>

          <li>
            <Link href="/" title="Conditions">
              Conditions
            </Link>
          </li>

          <li>
            <Link href="/" title="FAQ">
              FAQ
            </Link>
          </li>
        </ul>
      </nav>

      <section className="footer-contact">
        <ul>
          <li>
            <span>THREAD AFFAIR</span> MILANO
          </li>
          <li> Largo Augusto 3, Milano, 20122, Milano, IT</li>
          <li>Tel: 0039 02 760 003 66 </li>
          <li>office@thread-affair.com</li>
        </ul>
      </section>

      <nav className="footer-support">
        <ul>
          <li>
            <a href="tel:=0760 000 000" title="Call Us">
              <i className="fa-solid fa-phone"></i>
              Support
            </a>
          </li>

          <li>
            <a href="/s" title="Let's chat!" target="blank">
              <i className="fa-solid fa-comments"></i>
              Chat
            </a>
          </li>

          <li>
            <a href="mailto:office@traidaffairs.com" title="Email Us">
              <i className="fa-solid fa-envelope"></i>
              Email
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
