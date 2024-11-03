import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <>
      <div
        className="p-2 border-4 border-black
       text-dark-green min-h-screen relative"
      >
        <div className=" bg-cover h-52 w-full bg-hero-image bg-opacity-20 ">
          <h1 className="text-3xl text-peach-brown text-center font-bold ">
            Deon Remzi Counselling
          </h1>
        </div>

        <div className=" w-7/12 m-auto ">
          <h3 className="text-2xl font-bold">
            About me and my therapy practice
          </h3>
          <p>
            As a humanistic integrative counsellor, I merge various therapeutic
            modalities to offer you comprehensive and tailored support. My
            practice is built on a foundation of compassion and empathy,
            believing in your inherent capacity for growth and healing. I
            provide a safe, nurturing, and non-judgmental environment where you
            can freely explore your thoughts, feelings, and emotions.
          </p>
          <span className="bg-light-green rounded-lg p-0.5 w-20">
            <Link to="/About">Read more</Link>
          </span>
        </div>
        <div className="mt-8 w-7/12 m-auto ">
          <h3 className="text-2xl font-bold">How I can Help</h3>
          <p>
            Counselling can be a valuable tool for personal growth, offering
            clarity and insight as we navigate life’s challenges. Whether
            you&apos;re seeking support for anxiety, depression, relationship
            issues, life transitions, trauma, loss and more, therapy provides a
            safe space for self-exploration and healing. Together, we will work
            to unlock your potential, helping you gain a deeper understanding of
            yourself and move towards a more fulfilling life.
          </p>
          <span className="bg-light-green rounded-lg p-0.5 min-w-fit">
            <Link to="/Contact">Reach out</Link>
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
}
