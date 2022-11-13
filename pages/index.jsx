import Footer from '../component/common/footer/Footer';
import Header from '../component/common/header/Header';
import HomePayment from '../component/homepage/HomePayment';
import HomeSocial from '../component/homepage/HomeSocial';

export default function Home() {
  return (
    <div>
      <header className="header container mt-lg-5">
        <Header></Header>
      </header>

      <main className="content">
        <div className="content-main ">
          <HomeSocial></HomeSocial>
          <HomePayment></HomePayment>
        </div>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
