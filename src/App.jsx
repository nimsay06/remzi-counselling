import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/Contact";
import About from "./pages/About";
import HomePage from "./pages/Home";
import Navigation from "./Nav";
// import Footer from "./Footer";

function App() {
  return (
    <div className=" mx-auto font-Onest overflow-y-auto relative">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
