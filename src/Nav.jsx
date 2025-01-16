import { Link } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-peach-brown bg-opacity-50 flex  flex-wrap w-full  text-dark-green font-Taviraj ">
      <p className=" inline mr-auto p-0 text-lg font-semibold">
        Deon Remzi Counselling <br />
        Humanistic Integrative Counsellor
      </p>
      <button
        onClick={toggleMenu}
        className="md:hidden text-dark-green  hover:text-peach-brown ml-auto "
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3.0}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3.0}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      <div
        className={` text-xl pb-2 flex justify-between items-end flex-col mt-2  md:flex-row md:flex md:items-end w-full md:w-auto  md:text-2xl ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="mr-8 px-1 rounded-xl hover:text-main hover:duration-75"
        >
          Home
        </Link>
        <Link
          to="/MyApproach"
          className="mr-8 px-1 rounded-xl hover:text-main hover:duration-75"
        >
          My Approach
        </Link>
        <Link
          to="/Testimonials"
          className="mr-8 px-1 rounded-xl hover:text-main hover:duration-75"
        >
          Testimonials
        </Link>
        <Link
          to="/FAQs"
          className="mr-8 px-1 rounded-xl hover:text-main hover:duration-75"
        >
          FAQs
        </Link>
        <Link
          to="Contact"
          className="mr-8  px-1 rounded-xl  hover:text-main hover:duration-75"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
