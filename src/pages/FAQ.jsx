import { Link } from "react-router-dom";
export default function FAQ() {
  return (
    <>
      <div className="min-h-screen text-center overflow-auto p-6 text-dark-green m-8 md:m-auto xl:text-lg md:w-2/3">
        <div className="bg-peach-brown bg-opacity-20 p-2 mb-4 rounded-md">
          <h1 className="font-Taviraj font-medium text-3xl xl:text-4xl md:mt-8 ">
            Who do I work with?
          </h1>
          <p className="mb-5">
            I offer counselling to young adults and older adults.
          </p>
        </div>
        <div className="bg-peach-brown bg-opacity-20 p-2 mb-4 rounded-md">
          <h1 className="font-Taviraj font-medium  text-3xl xl:text-4xl">
            What therapies do I offer?
          </h1>
          <p className="mb-5">
            I can provide you with:
            <ul className="list-none ">
              <li>One To One Counselling</li>
              <li>Couples Counselling</li>
              <li>Solution Focused Counselling</li>
              <li>Time Limited Counselling</li>
              <li>Long Term Counselling</li>
              <li>Multiculturalism & Inclusion</li>
            </ul>
          </p>
        </div>
        <div className="bg-peach-brown bg-opacity-20 p-2 mb-4 rounded-md">
          <h1 className="font-Taviraj font-medium  text-3xl xl:text-4xl">
            What issues do I work with?
          </h1>
          <p className="mb-5">
            <ul className="list-none">
              <li>Abuse</li>
              <li>Anger Issues</li>
              <li>Anxiety</li>
              <li>Bereavement</li>
              <li>Depression</li>
              <li>Family Breakdown</li>
              <li>Family Issues</li>
              <li>General Anxiety Disorder</li>
              <li>Loss</li>
              <li>Relationship Issues</li>
              <li>Sexual Abuse</li>
              <li>Stress</li>
              <li>Domestic Abuse</li>
              <li>Trauma</li>
            </ul>
          </p>
        </div>
        <div className="bg-peach-brown bg-opacity-20 p-2 mb-4 rounded-md">
          <h1 className="font-Taviraj font-medium  text-3xl xl:text-4xl">
            Fee Structure
          </h1>
          <p className="mb-5">
            <ul className="list-none ">
              <li>Individual one-to-one 50-minute sessions: £65.00</li>
              <li>Couples Counselling 60-minute sessions £95.00</li>
            </ul>
          </p>
        </div>
        <div className="bg-peach-brown bg-opacity-20 p-2 mb-4 rounded-md">
          <h1 className="font-Taviraj font-medium m-auto md:w-2/3 text-3xl xl:text-4xl">
            What can you expect in your first session?
          </h1>
          <p className="m-auto md:w-2/3">
            Your first session will involve getting to know you, your
            background, and your current concerns. We will discuss your goals
            for therapy and begin to build a trusting therapeutic relationship.
            You will have the opportunity to talk freely, and I will be there to
            listen, providing a safe and compassionate space. We will explore my
            integrative approach so that you have an understanding of how it can
            support your growth and well-being. By the end of the session, you
            will have a clearer understanding of how we can work together to
            achieve your personal goals and improve your overall well-being.
            <p>
              Read testimonials of my clients{" "}
              <Link
                to="/Testimonials"
                className="italic underline font-semibold hover:text-peach-brown"
              >
                here
              </Link>
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
