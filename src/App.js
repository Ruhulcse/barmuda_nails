import "./App.sass";
import "./media-screen.sass";
import NavBar from "./components/Navbar";
import Home from "./page/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./page/AboutUs";
import Service from "./page/Service";
import Reviews from "./page/Reviews";
import Packages from "./page/Packages";
import Contact from "./page/Contact";
import Footer from "./page/Footer";
import CopyRight from "./page/CopyRight";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="App">
        <Home />
        <AboutUs />
        <Service />
        <Reviews />
        <Packages />
        <Contact />
        <Footer />
        <CopyRight />
      </div>
    </div>
  );
}

export default App;
