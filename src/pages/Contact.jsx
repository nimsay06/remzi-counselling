import React from "react";
import { Link } from "react-router-dom";

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
      <div className="m-auto mt-3 grid grid-cols-2 grid-rows-3  min-h-screen items-center md:grid-cols-1 md:grid-rows-2 text-balance text-dark-green">
        <div className="col-span-1 row-span-2 lg:w-1/2 lg:mb-0 w-8/12 md:row-start-1 md:row-end-1 m-auto">
          <h1 className="text-4xl font-extrabold mb-4 font-Playfair">
            Contact Me
          </h1>
          <p className="text-lg font-SourceSans">
            As part of this process, I offer a free 20-minute consultation to
            ensure that we are a good fit and to discuss your goals in a way
            that feels comfortable and supportive. This initial conversation
            allows us to explore how counselling can meet your needs and what
            you hope to gain from the experience.
          </p>
        </div>

        <div className=" mr-10 col-start-2 col-end-4 row-start-1 row-end-3 lg:w-1/2  rounded-3xl  p-12 shadow-2xl shadow-peach-brown/40  bg-sage md:row-start-2 md:row-end-3 md:col-span-1 m-auto">
          <form
            onSubmit={onSubmit}
            className="bg-sage w-fit flex flex-col space-y-4 m-auto"
          >
            <label className="font-semibold text-3xl font-Playfair">
              Full Name
            </label>
            <input
              placeholder="Enter your full name"
              type="text"
              name="name"
              required
              className=" border-3 border-solid border-peach-brown bg-white rounded-2xl w-full p-2  focus:outline-none focus:ring-2 focus:ring-peach-brown h-fit"
            />
            <br />
            <label className="font-semibold text-3xl font-Playfair">
              Email
            </label>
            <input
              placeholder="Enter your email address"
              type="email"
              name="email"
              required
              className="border-3 border-solid border-peach-brown bg-white rounded-2xl w-full p-2  focus:outline-none focus:ring-2 focus:ring-peach-brown h-fit"
            />
            <br />
            <label className="font-semibold text-3xl font-Playfair">
              What brings you to counselling?
            </label>
            <textarea
              name="subject"
              required
              className="border-3 border-solid border-peach-brown bg-white rounded-2xl w-full p-2  focus:outline-none focus:ring-2 focus:ring-peach-brown h-36"
              placeholder="Write response here..."
            ></textarea>
            <br />
            <label className="font-semibold text-3xl font-Playfair">
              What are you hoping to achieve?
            </label>
            <textarea
              name="message"
              placeholder="Write response here..."
              required
              className="border-3 border-solid border-peach-brown bg-white rounded-2xl w-full p-2  focus:outline-none focus:ring-2 focus:ring-peach-brown h-36
            "
            ></textarea>
            <br />

            <button
              type="submit"
              className="rounded-2xl text-xl bg-light-green bg-opacity-90 focus:bg-peach-brown hover:bg-peach-brown hover:bg-opacity-25 hover:underline font-bold"
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
    </>
  );
}
