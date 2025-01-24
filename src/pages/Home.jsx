import { Link } from "react-router-dom";
import HeroImage from "../assets/treeMain.jpg";
import bacpReg from "../assets/BACP_Logo.png";
import BAANTReg from "../assets/BAANT-Member-logo.png";
import MHFAReg from "../assets/Mental_Health_First_Aider_badge_colour.png";
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
            className=" w-full object-cover opacity-80 hue-rotate-50 h-80"
            src={HeroImage}
            alt="Image of light shining through trees in a forest"
          />
          <div className=" md:m-auto  absolute flex flex-col inset-0 text-center w-2/3 h-1/4 mx-auto  my-48 ">
            <h2 className="text-center font-medium text-dark-green md:text-main font-Playfair  italic text-4xl md:text-5xl md:m-auto">
              “I do my best because I’m counting on you counting on me.” <br />-
              Maya Angelou{" "}
            </h2>
          </div>
        </div>
        <div className="mainTextContainer  w-full mt-4 p-4  text-dark-green md:m-auto ">
          <div className=" w-full  h-2/3 mt-20 text-dark-green ">
            <div className="aboutSection bg-sage bg-opacity-30 rounded-md  md:w-2/3 m-auto pb-6">
              <h2 className="text-4xl  font-Taviraj m-auto pt-4 text-center mb-4">
                About me and my counselling practice
              </h2>
              <div className="md:grid md:grid-cols-2">
                {" "}
                <img
                  src={profileImg}
                  className=" md:col-span-1 m-auto md:w-10/12 w-3/4"
                />
                <p className="font-SourceSans md:col-start-2 p-4  mt-6">
                  As a <b>fully qualified Humanistic integrative counsellor</b>,
                  I merge various
                  <b> Humanistic</b> and <b>Psychodynamic</b> therapeutic
                  modalities to offer comprehensive support. My practice is
                  built on a foundation of
                  <b> compassion</b>, believing in the inherent capacity for
                  <b> growth </b>and <b>healing</b> within you.{" "}
                  <b>Cultural awareness</b> is central to my practice. I deeply
                  <b> value</b> and <b>honour</b> your <b>diverse background</b>
                  ,<b> experiences</b> and <b>identities</b>. By embracing your
                  cultural differences, I ensure that my therapeutic approach is{" "}
                  <b>inclusive and responsive</b> to your
                  <b> unique individual needs</b>, creating a space where you
                  feel <b>respected, understood</b> and <b>heard</b>.
                  <br /> I am a member of the{" "}
                  <b>
                    British Association for Counselling and Psychotherapy (BACP)
                  </b>
                  , as such I adhere to their Ethical Framework. I offer both{" "}
                  <b>long </b>
                  &amp; <b>short-term</b> therapy. As I <b>work remotely</b> I
                  can provide counselling <b>globally</b>.
                </p>
              </div>
            </div>
            <div className="textSection md:w-2/3 m-auto ">
              <div className="approachSection p-2 mt-6 bg-sage bg-opacity-30 rounded-md ">
                <h3 className="text-3xl mt-6  font-Taviraj">
                  I specialise in:
                </h3>
                <ul className="list-none font-normal">
                  <li>Anxiety</li>
                  <li>Depression</li>
                  <li>Stress</li>
                  <li>Trauma</li>
                  <li>Low Self Esteem</li>
                  <li>Couples Counselling</li>
                  <li>Relationship Issues</li>
                  <li>Family Conflict</li>
                  <li>Early Years Parenting</li>
                  <li>Bereavement</li>
                </ul>
                <p className="italic font-semibold mt-2 text-center">
                  Find out more about my counselling approaches{" "}
                  <Link
                    to="/MyApproach"
                    className="italic underline hover:text-peach-brown font-semibold"
                  >
                    here
                  </Link>
                </p>
              </div>

              <div className="faqSection  mt-6 p-2 bg-sage bg-opacity-30 rounded-md ">
                <h3 className="text-3xl mt-6  font-Taviraj ">
                  Why Counselling?
                </h3>
                <p>
                  Counselling can be a valuable tool for <b>personal growth</b>,
                  offering <b>clarity</b> and <b>insight</b> as we navigate
                  life’s challenges. Whether you are seeking support for{" "}
                  <b>
                    anxiety, depression, relationship issues, life transitions,
                    trauma, loss
                  </b>{" "}
                  and more, therapy provides a <b>safe space</b> for{" "}
                  <b>self-exploration</b> and <b>healing</b>. Together, we will
                  work to <b>unlock your potential</b>, helping you gain a{" "}
                  <b>deeper understanding</b> of yourself and move towards a
                  more <b>fulfilling life</b>.
                </p>
                <p className="italic text-center mt-2 font-semibold">
                  Have any other questions about my counselling services? Find
                  answers{" "}
                  <Link to="/FAQs" className="  hover:text-peach-brown ">
                    <span className="underline">here</span>
                  </Link>
                </p>
              </div>

              <div className="contactSection m-auto  p-2 mt-6 bg-sage bg-opacity-30 rounded-md ">
                <h3 className="text-3xl mt-6 font-Taviraj md:mt-4">
                  {" "}
                  Free Consultation
                </h3>
                <p>
                  As part of this process, I offer a{" "}
                  <b>free 20-minute consultation</b> to ensure that we are a
                  good fit and to discuss your <b>goals</b> in a way that feels{" "}
                  <b>comfortable and supportive</b>. This initial conversation
                  allows us to explore how counselling can meet your needs and
                  what you hope to gain from the experience.
                </p>
                <p className="font-semibold mt-2 text-center italic">
                  If you are interested in a free consultation, contact me{" "}
                  <Link
                    to="/Contact"
                    className="italic underline font-semibold hover:text-peach-brown"
                  >
                    here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="logoSection p-2 grid grid-cols-3 gap-4">
          <img src={bacpReg} className=" md:w-1/3 m-auto " />
          <img src={MHFAReg} className=" h-14 md:h-auto md:w-1/6 m-auto " />
          <img src={BAANTReg} className=" md:w-1/3 m-auto " />
        </div>
      </div>
    </>
  );
}
