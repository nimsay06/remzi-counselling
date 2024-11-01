import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      <nav className="bg-light-green sticky w-screen  p-1">
        <ul className="flex justify-end space-x-3">
          <li className=" gap-x-0 hover:underline ">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
