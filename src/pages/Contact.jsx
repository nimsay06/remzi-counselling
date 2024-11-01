import React from "react";
// import { Link } from "react-router-dom";
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
      <div className=" mt-20 m-auto  shadow-lg">
        <p className=" ml-5 m-auto">
          <span className="text-xl">Contact Me</span>
          <br />
          As part of this process, I offer a free 20-minute consultation to
          ensure that we are a good fit and to discuss your goals in a way that
          feels comfortable and supportive. This initial conversation allows us
          to explore how counselling can meet your needs and what you hope to
          gain from the experience.
        </p>

        <div className=" rounded-3xl max-w-fit p-12 grid md:grid-cols-2 gap-2  m-auto mt-14  bg-light-green ">
          <form onSubmit={onSubmit} className="bg-light-green max-w-fit">
            <h3 className="border-3 border-solid border-peach-brown">
              Full Name
            </h3>
            <input
              type="text"
              name="name"
              required
              className=" border-3 border-solid border-peach-brown bg-white rounded-2xl"
            />
            <br />
            <h3>Email</h3>
            <input
              type="email"
              name="email"
              required
              className="bg-white rounded-2xl"
            />
            <br />
            <h3>Subject</h3>
            <textarea
              name="subject"
              required
              className="bg-white rounded-2xl"
            ></textarea>
            <br />
            <h3>Message</h3>
            <textarea
              name="message"
              required
              className="bg-white rounded-2xl
            "
            ></textarea>
            <br />

            <button type="submit">Submit Form</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}
