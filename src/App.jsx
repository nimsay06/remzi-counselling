import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/Contact";
import MyServices from "./pages/About";
import HomePage from "./pages/Home";
import Navigation from "./Nav";
import FAQ from "./pages/FAQ";
import Footer from "./Footer";

function App() {
  return (
    <div className=" mx-auto  min-h-full flex-1 overflow-x-hidden">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Services" element={<MyServices />} />
          <Route path="/FAQs" element={<FAQ />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
