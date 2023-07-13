import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/contact/ContactUs";
import OurMenu from "./pages/ourMenu/OurMenu";
import AboutUs from "./pages/AboutUs/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import OurServices from "./pages/OurServices/OurServices";
import AllergyAdv from "./pages/allergyAdvice/AllergyAdv";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/menu' element={<OurMenu/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/service' element={<OurServices/>}/> 
          <Route path='/allergyadvice' element={<AllergyAdv/>}/>   
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
