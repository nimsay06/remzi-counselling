import logo from "./assets/LogoDR.png";
export default function Footer() {
  return (
    <footer className="bg-dark-green font-Abel text-peach-brown bottom-0 w-full h-16 grid grid-cols-2 md:grid-cols-3 grid-flow-row border-3 border-main md:pr-4 ">
      <h2 className="hidden md:block text-2xl m-auto ">
        Deon Remzi Counselling
      </h2>
      <img src={logo} className="rounded-full w-16 m-auto" />
      <div className="  md:grid md:text-end p-0">
        <div className=" emailSect ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 inline "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <h2 className=" md:ml-2 inline text-lg">deonremzi@gmail.com</h2>
        </div>

        <br />
        <div className="phoneNumberSect -mt-4 md:-mt-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>{" "}
          <h2 className=" md:ml-2 inline text-lg">07470 356 685</h2>
        </div>
      </div>
    </footer>
  );
}
