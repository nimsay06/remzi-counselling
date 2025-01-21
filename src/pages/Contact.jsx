import React from "react";

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
      <div className="m-0 md:m-auto p-4 text-balance text-dark-green min-h-screen ">
        <div className=" md:w-8/12 m-auto mt-8">
          <h1 className="text-4xl  mb-4 font-Taviraj ">Contact Me</h1>
          <p className="text-lg font-SourceSans ">
            As part of this process, I offer a{" "}
            <b>free 20-minute consultation</b> to ensure that we are a good fit
            and to discuss your goals in a way that feels <b>comfortable</b> and
            <b> supportive</b>. This initial conversation allows us to{" "}
            <b>explore how counselling can meet your needs</b> and what you hope
            to gain from the experience.
          </p>
        </div>

        <div className=" mt-12 md:w-9/12 p-4 h-fit lg:w-3/4  shadow-inner rounded-3xl bg-sage bg-opacity-20 m-auto">
          <form
            onSubmit={onSubmit}
            className=" lg:w-2/3 xl:w-2/3 flex flex-col space-y-4 m-auto"
          >
            <label className="font-bold text-3xl font-Cormorant">
              Full Name
            </label>
            <p className=" italic text-sm text-red">(required)</p>
            <input
              placeholder="Enter your full name"
              type="text"
              name="name"
              required
              className=" border-2 border-solid border-sage bg-white rounded-2xl w-full p-2 bg-main    focus:outline-none focus:ring-4 focus:ring-sage h-fit"
            />
            <br />
            <label className="font-bold text-3xl font-Cormorant">Email</label>
            <p className=" italic text-sm text-red">(required)</p>
            <input
              placeholder="Enter your email address"
              type="email"
              name="email"
              required
              className="border-2 border-solid border-sage  bg-white rounded-2xl w-full p-2  bg-main  focus:outline-none focus:ring-4 focus:ring-sage h-fit"
            />
            <br />
            <label className="font-bold text-3xl font-Cormorant">
              What brings you to counselling?
            </label>
            <p className=" text-sm italic text-red">(required)</p>
            <textarea
              name="subject"
              required
              className="border-2 border-solid border-sage  bg-white rounded-2xl w-full p-2 bg-main  focus:outline-none focus:ring-4 focus:ring-sage h-36"
              placeholder="Write response here..."
            ></textarea>
            <br />
            <label className="font-bold text-3xl font-Cormorant">
              What are you hoping to achieve?
            </label>
            <p className="text-sm italic text-red">(required)</p>

            <textarea
              name="message"
              placeholder="Write response here..."
              required
              className="border-2 border-solid border-sage  bg-white rounded-2xl w-full p-2 bg-main   focus:outline-none focus:ring-4 focus:ring-sage h-36
            "
            ></textarea>
            <br />
            <button
              type="submit"
              className="rounded-xl text-2xl w-fit p-2 m-auto bg-light-green bg-opacity-60  hover:text-main "
            >
              Send
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}
