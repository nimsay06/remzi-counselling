import { Link } from "react-router-dom";
import logo from "./assets/DR_Logo.png";

function Navigation() {
  return (
    <nav className="shadow-inner border border-peach-brown bg-peach-brown bg-opacity-10 flex justify-evenly items-end flex-wrap w-full p-4 text-dark-green font-bold font-Cormorant text-xl ">
      <Link to="/">
        <img
          src={logo}
          className="w-8 h-8 border rounded-full m-0 inline hover:text-peach-brown"
        />
      </Link>

      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/Services" className="hover:underline">
        My Services
      </Link>
      <Link to="/FAQs" className="hover:underline">
        FAQs
      </Link>
      <Link to="/Contact" className="hover:underline">
        Contact Me
      </Link>
    </nav>
  );
}

export default Navigation;
