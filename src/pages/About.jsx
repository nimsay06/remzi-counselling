import couchImg from "../assets/Couch.jpg";
import mindfulImg from "../assets/skyline.jpg";
import brainImg from "../assets/brain_unsplash.jpg";
import { useState } from "react";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      src: couchImg,
      alt: "Description 1",
      header: "Humanistic Therapy",
      text: "I emphasise the importance of our therapeutic relationship and your self-exploration. I believe in your innate drive for personal growth and self-actualization. My role is to provide a nurturing, non-judgmental environment where you feel safe to explore your thoughts and emotions. This approach empowers you to recognize your strengths, deepen self-understanding, and cultivate self-compassion. It enhances your sense of autonomy and personal responsibility, helping you make meaningful choices aligned with your values.",
      quote:
        "“The curious paradox is that when I accept myself just as I am, then I can change”-Carl Rogers",
    },
    {
      src: brainImg,
      alt: "Description 2",
      header: "Psychodynamic Therapy",
      text: "I explore both unconscious and conscious aspects of your childhood experiences, uncovering underlying patterns and core beliefs that may be contributing to your current struggles. By understanding how early experiences shape present-day behaviours and relationships, you can break free from maladaptive patterns and foster emotional resilience. This insight helps you make more intentional decisions, leading to greater emotional freedom and well-being.",
      quote:
        "“Who looks outside, dreams; who looks inside, awakes.” – Carl Jung",
    },
    {
      src: mindfulImg,
      alt: "Description 3",
      header: "CBT techniques, mindfulness, and breathwork practices",

      text: "Enables you to identify and challenge negative patterns of thoughts, feelings, and behaviours. This can prove empowering and help you to cultivate healthier coping mechanisms and achieve your goals. This can also promote self-awareness, emotional regulation, and living in the present moment, enriching your overall well-being. Controlled breathing exercises can reduce stress, increase emotional clarity, and promote relaxation, helping you manage emotions and find calm during challenging moments.",
      quote:
        "“One of the greatest discoveries a person makes, one of their great surprises, is to find they can do what they were afraid they couldn't do” - Dr. Aaron T. Beck",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mt-16 mx-auto mb-4 min-h-screen">
      <div className="overflow-auto bg-peach-brown bg-opacity-15 md:shadow-2xl">
        <div
          className="flex transition-transform duration-1000 "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full text-dark-green p-4 "
            >
              <div className="imageContainer">
                {" "}
                <p className="text-main absolute m-20 md:m-28 text-center w-3/4 text-pretty font-semibold md:text-xl italic ">
                  {slide.quote}
                </p>
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-72 object-cover "
                />{" "}
              </div>

              <div className="m-auto text-balance">
                <h1 className="text-center font-Cormorant font-black text-3xl mt-8">
                  {slide.header}
                </h1>
                <p className="text-center md:pb-5 md:text-lg font-SourceSans mt-4 mx-auto w-3/4">
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <button
        onClick={handlePrev}
        className="h-full absolute top-1/2 left-2 transform -translate-y-1/2 p-2 text-dark-green hover:text-peach-brown"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="h-full absolute top-1/2 right-2 transform -translate-y-1/2  p-2  text-dark-green bg-main bg-opacity-0 hover:bg-opacity-20 hover:text-peach-brown hover:bg-opacity-40"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};
export default About;
