import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/Contact";
import MyApproach from "./pages/About";
import HomePage from "./pages/Home";
import Navigation from "./Nav";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import ScrollTop from "./ScrollTop";
import Footer from "./Footer";
function App() {
  return (
    <>
      <ScrollTop />
      <div className=" mx-auto  min-h-screen flex-1 overflow-x-hidden">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/MyApproach" element={<MyApproach />} />
            <Route path="/FAQs" element={<FAQ />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Testimonials" element={<Testimonials />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
