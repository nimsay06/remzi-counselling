import reg from "./assets/reg.png";
export default function Footer() {
  return (
    <div className="p-3 grid grid-cols-4 grid-rows-4 gap-0 bg-dark-green absolute  bottom-0 w-full h-28">
      <p className="col-start-1 col-end-3 row-start-1 row-end-2 text-peach-brown font-bold text-xl">
        Deon Remzi Counselling
      </p>
      <img
        src={reg}
        alt="bacp registration"
        className="col-start-1 col-end-2 row-start-3 row-end-3"
      />
      <p className=" m-0  col-start-3 col-end-5 row-start-4 row-end-3 text-end text-peach-brown ">
        Contact me: <br />
        sampleemail@email.com
      </p>
    </div>
  );
}

// <div className="m-0 bg-dark-green absolute  bottom-0 w-full h-fit ">
//   <p className="text-peach-brown font-bold text-2xl">
//     Deon Remzi Counselling
//   </p>
//   <img src={reg} alt="bacp registration" className="w-13 h-10" />
//   <p className=" m-0  border-8  border-solid border-white-200 text-end text-peach-brown ">
//     Contact me: <br />
//     sampleemail@email.com
//   </p>
// </div>;
