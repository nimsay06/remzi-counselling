import { Link } from "react-router-dom";
import HeroImage from "../assets/treeMain.jpg";
import Footer from "../Footer";
export default function HomePage() {
  return (
    <>
      <div
        className="
       min-h-screen relative scroll-smooth"
      >
        <div className="relative min-w-full ">
          <img
            className="h-2/3 xl:1/3 w-full object-cover rounded-md opacity-60 hue-rotate-50"
            src={HeroImage}
            alt="Random image"
          />
          <div className=" m-auto absolute inset-0 flex items-center justify-center ">
            <h2 className="text-dark-green text-8xl xl:text-8xl sm:text-3xl font-extrabold font-Cormorant  rounded-3xl">
              Deon Remzi Counselling
            </h2>
          </div>
        </div>
        <div className="textContainer text-dark-green mb-5 mt-2">
          <div className=" w-8/12 m-auto h-1/3  text-dark-green ">
            <h3 className="text-3xl font-bold font-Playfair ">
              About me and my therapy practice
            </h3>
            <p className="font-SourceSans">
              As an integrative counsellor, I merge various humanistic and
              psychodynamic therapeutic modalities to offer comprehensive
              support. Offering long & short term therapy specialising in,
              Anxiety, Depression, Abuse, Family issues, Early years parenting,
              Suicide, Bereavement & Relationship issues. My practice is built
              on a foundation of compassion, believing in the inherent capacity
              for growth and healing within you. Cultural awareness is
              paramount, as I deeply value and honour your diverse background,
              experiences, and identities. By embracing your unique cultural
              differences, I ensure that my therapeutic approach is inclusive.
            </p>
            <span className=" readMoreButton text-dark-green  p-1 w-fit hover:underline hover:font-semibold bg-peach-brown bg-opacity-40 rounded-full ">
              <Link to="/About">Read more</Link>
            </span>
          </div>
          <div className=" w-8/12 h-1/3 mt-2 m-auto ">
            <h3 className="text-3xl font-bold font-Playfair">How I can Help</h3>
            <p>
              Counselling can be a valuable tool for personal growth, offering
              clarity and insight as we navigate life’s challenges. Whether
              you&apos;re seeking support for anxiety, depression, relationship
              issues, life transitions, trauma, loss and more, therapy provides
              a safe space for self-exploration and healing. Together, we will
              work to unlock your potential, helping you gain a deeper
              understanding of yourself and move towards a more fulfilling life.
            </p>
            <span className=" readMoreButton text-dark-green  p-1 w-fit hover:underline hover:font-semibold bg-peach-brown bg-opacity-40 rounded-full">
              <Link to="/Services">Read more</Link>
            </span>
            <div className=" w-8/12 h-1/3 ">
              <h3>I currently have availability for new clients</h3>
              <p>
                If you&apos;re interested in working with me, you can contact me{" "}
                <Link
                  to="/Contact"
                  className="readMoreButton text-dark-green  p-1 w-fit hover:underline hover:font-semibold bg-peach-brown bg-opacity-40 rounded-full "
                >
                  here.{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
