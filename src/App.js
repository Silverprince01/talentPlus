import Header from "./components/Header";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Product from "./components/Product";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#BCBCBC]">
      <Header />
      <Intro />
      <Main />
      <Product />
      <Carousel/>
      <Footer/>
    </div>
  );
};

export default App;
