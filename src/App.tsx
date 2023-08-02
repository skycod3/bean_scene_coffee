// sections
import About from "./sections/About";
import Banner from "./sections/Banner";
import Coffees from "./sections/Coffees";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Newsletter from "./sections/Newsletter";
import Order from "./sections/Order";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
      <Header />

      <main>
        <Banner />
        <About />
        <Coffees />
        <Features />
        <Order />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}

export default App;
