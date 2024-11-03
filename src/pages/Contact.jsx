import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
export default function ContactPage() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ddcf80dd-d6b7-4be4-8a0d-6c20d538d013");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className=" grid grid-cols-2 grid-rows-3 gap-5 min-h-screen items-center  p-2 ">
        <p className="col-span-1 row-span-2 lg:w-1/2 lg:mb-0">
          <span className="text-2xl font-bold mb-4">Contact Me</span>
          <br />
          As part of this process, I offer a free 20-minute consultation to
          ensure that we are a good fit and to discuss your goals in a way that
          feels comfortable and supportive. This initial conversation allows us
          to explore how counselling can meet your needs and what you hope to
          gain from the experience.
        </p>

        <div className=" col-start-2 col-end-4 row-start-1 row-end-3 lg:w-1/2 w-full rounded-3xl  p-12 shadow-2xl shadow-peach-brown/40 m-auto  bg-light-green ">
          <form
            onSubmit={onSubmit}
            className="bg-light-green max-w-fit flex flex-col space-y-4"
          >
            <label className="font-semibold ">Full Name</label>
            <input
              placeholder="Enter your full name"
              type="text"
              name="name"
              required
              className="  border-3 border-solid border-peach-brown bg-white rounded-2xl w-full p-2  focus:outline-none focus:ring-2 focus:ring-peach-brown"
            />
            <br />
            <label className="font-semibold ">Email</label>
            <input
              placeholder="Enter your email address"
              type="email"
              name="email"
              required
              className="border-3 border-solid border-peach-brown bg-white rounded-2xl w-full p-2  focus:outline-none focus:ring-2 focus:ring-peach-brown"
            />
            <br />
            <label className="font-semibold ">
              What brings you to counselling?
            </label>
            <textarea
              name="subject"
              required
              className="border-3 border-solid border-peach-brown bg-white rounded-2xl w-full p-2  focus:outline-none focus:ring-2 focus:ring-peach-brown"
              placeholder="Write response here..."
            ></textarea>
            <br />
            <label className="font-semibold ">
              What are you hoping to achieve?
            </label>
            <textarea
              name="message"
              placeholder="Write response here..."
              required
              className="border-3 border-solid border-peach-brown bg-white rounded-2xl w-full p-2  focus:outline-none focus:ring-2 focus:ring-peach-brown
            "
            ></textarea>
            <br />

            <button
              type="submit"
              className="rounded-2xl bg-dark-green bg-opacity-20  font-bold"
            >
              Submit Form
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <span className="text-3xl   ml-8">
        <Link to="/">⬅ </Link>
      </span>
      <Footer />
    </>
  );
}
