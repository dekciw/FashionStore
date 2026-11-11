import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Header from './components/header/Header'
import Promo from './components/promo/Promo';
import Sale from "./components/sale/Sale";
import Favorite from "./components/favorite/Favorite";
import Apps from "./components/app/Apps";
import Community from "./components/community/Community";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="Apps">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Favorite />
      <Apps />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
