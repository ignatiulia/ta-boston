import Link from 'next/link';
import Footer from '../component/common/footer/Footer';
import Header from '../component/common/header/Header';
import HomeCatalogPreview from '../component/homepage/HomeCatalogPreview';
import HomeNewsletter from '../component/homepage/HomeNewsletter';
import HomePayment from '../component/homepage/HomePayment';
import HomeSocial from '../component/homepage/HomeSocial';

export default function Home() {
  return (
    <div>
      <header className="header container mt-lg-5 mb-lg-3">
        <Header></Header>
      </header>

      <main className="content">
        <header className="banner-main">
          <div className="banner-main-inner container">
            <h1>Office Suits</h1>
            <h2>Get back to work in style</h2>

            <Link
              href="/"
              title="CTA"
              className="banner-cta button button-large"
            >
              Create Your Suit
            </Link>

            <footer className="banner-main-copy">
              <p>
                <span>A Tailored Suit</span> that will fit you perfectly is a
                dream for everybody.
              </p>
              <p>
                We provide you with the design and you choose if you like it or
                if you want to change the details with our online configurator.
              </p>
            </footer>
          </div>
        </header>

        <div className="content-main mt-5">
          <HomeCatalogPreview></HomeCatalogPreview>

          <HomeCatalogPreview></HomeCatalogPreview>

          <HomeCatalogPreview></HomeCatalogPreview>

          <HomeSocial></HomeSocial>

          <HomePayment></HomePayment>

          <HomeNewsletter></HomeNewsletter>
        </div>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
