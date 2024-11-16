import { Link } from "react-router-dom";
import HeroImage from "../assets/treeMain.jpg";
import profileImg from "../assets/Deon_Remzi_pfp.jpg";

export default function HomePage() {
  return (
    <>
      <div
        className="
       min-h-screen relative scroll-smooth"
      >
        <div className="relative w-full ">
          <img
            className=" w-full object-cover opacity-80 hue-rotate-50 md:max-h-[600px] max-h-1/3 xs:h-[500px]"
            src={HeroImage}
            alt="Image of light shining through trees in a forest"
          />
          <div className=" m-auto  absolute flex flex-col inset-0 text-center w-2/3 h-1/4  ">
            <h2 className="text-dark-green text-4xl xl:text-6xl lg:text-5xl md:text-5xl font-extrabold font-Cormorant">
              Deon Remzi Counselling
            </h2>
            <p className="font-Playfair font-bold text-3xl text-main">
              Humanistic Integrative Counsellor
            </p>
            <p className="font-Playfair font-semibold italic text-3xl text-main">
              Working Remotely
            </p>
          </div>
        </div>
        <div className="textContainer w-3/4 p-2  text-dark-green m-auto ">
          <h2 className="text-center text-balance font-Playfair italic text-4xl m-auto mt-12">
            “I do my best because I’m counting on you counting on me.” <br />-
            Maya Angelou{" "}
          </h2>
          <div className=" w-8/12 m-auto h-2/3 mt-24 text-dark-green ">
            <div className="aboutSection m-auto">
              <h2 className="text-4xl font-bold font-Playfair m-auto text-center mb-4">
                About me and my counselling practice
              </h2>
              <img
                src={profileImg}
                className="h-2/3 w-2/3 md:h-1/3 md:w-1/3 border-4 m-auto "
              />
              <p className="font-SourceSans mt-6">
                As a Humanistic integrative counsellor, I merge various
                humanistic and psychodynamic therapeutic modalities to offer
                comprehensive support. My practice is built on a foundation of
                compassion, believing in the inherent capacity for growth and
                healing within you. Cultural awareness is central to my
                practice. I deeply value and honour your diverse background,
                experiences and identities. By embracing your cultural
                differences, I ensure that my therapeutic approach is inclusive
                and responsive to your unique individual needs, creating a space
                where you feel respected, understood and heard.
              </p>
            </div>

            <br />
            <p>
              I am a member of the British Association for Counselling and
              Psychotherapy (BACP), as such I adhere to their Ethical Framework.
              I offer both long &amp; short-term therapy. <br />
              Specialising in:
              <ul className="list-circle ml-6">
                <li>Anxiety</li>
                <li>Depression</li>
                <li>Stress</li>
                <li>Low Self Esteem</li>
                <li>Couples Counselling</li>
                <li>Relationship Issues</li>
                <li>Family Conflict</li>
                <li>Early Years Parenting</li>
                <li>Bereavement</li>
              </ul>
              Find out more about my counselling approaches{" "}
              <Link
                to="/MyApproach"
                className="italic hover:underline hover:text-peach-brown font-semibold"
              >
                {" "}
                here
              </Link>
            </p>
          </div>
          <div className=" w-8/12 h-1/3 mt-2 m-auto ">
            <h3 className="text-3xl font-bold font-Playfair">
              Why Counselling?
            </h3>
            <p>
              Counselling can be a valuable tool for personal growth, offering
              clarity and insight as we navigate life’s challenges. Whether
              you&apos;re seeking support for anxiety, depression, relationship
              issues, life transitions, trauma, loss and more, therapy provides
              a safe space for self-exploration and healing. Together, we will
              work to unlock your potential, helping you gain a deeper
              understanding of yourself and move towards a more fulfilling life.
            </p>
            <p>
              {" "}
              <Link
                to="/FAQs"
                className="italic font-semibold hover:underline hover:text-peach-brown"
              >
                Read more
              </Link>
            </p>
          </div>
          <div className=" w-8/12 h-1/3 m-auto mb-4">
            <h3 className="text-3xl font-bold font-Playfair">
              {" "}
              Free Consultation
            </h3>
            <p>
              As part of this process, I offer a free 20-minute consultation to
              ensure that we are a good fit and to discuss your goals in a way
              that feels comfortable and supportive. This initial conversation
              allows us to explore how counselling can meet your needs and what
              you hope to gain from the experience.
            </p>
            <p>
              If you&apos;re interested in working with me, contact me{" "}
              <Link
                to="/Contact"
                className="italic hover:underline font-semibold hover:text-peach-brown"
              >
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
