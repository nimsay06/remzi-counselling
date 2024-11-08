import logo from "./assets/DR_Logo.png";

export default function Footer() {
  return (
    <footer className="bg-dark-green m-auto  text-peach-brown bottom-0 w-full  grid grid-cols-3 grid-flow-row text-wrap  ">
      <p className="font-Cormorant font-extrabold text-xl ml-2">
        Deon Remzi Counselling{" "}
      </p>
      <img src={logo} className="m-auto p-0 h-10 w-12 inline" />
      <p className="font-Cormorant font-extrabold h-fit ">
        DeonRemzi@hotmail.com <span className="m-3" />
        +447-854-222-888
      </p>
    </footer>
  );
}

// <div className="m-0 bg-dark-green absolute  bottom-0 w-full h-fit ">
//   <p className="text-peach-brown font-bold text-2xl">
//   </p>
//   <img src={reg} alt="bacp registration" className="w-13 h-10" />
//   <p className=" m-0  border-8  border-solid border-white-200 text-end text-peach-brown ">
//     Contact me: <br />
//     sampleemail@email.com
//   </p>
// </div>;
//  <div className="p-3 grid grid-cols-4 grid-rows-4 bg-slate bg-opacity-80 absolute shadow-inner shadow-white bottom-0 w-full max-h-3/12">
//       <p className="col-start-1 col-end-3 row-start-1 row-end-2 text-peach-brown font-bold text-xl">
//         Deon Remzi Counselling
//       </p>
//       <img
//         src={reg}
//         alt="bacp registration"
//         className="col-start-1 col-end-2 row-start-3 row-end-3"
//       />
//       <p className=" m-0  col-start-3 col-end-5 row-start-4 row-end-3 text-end text-peach-brown ">
//         Contact me: <br />
//         sampleemail@email.com
//       </p>
//     </div>
