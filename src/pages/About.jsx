import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <div className=" m-auto">
        <h1 className="text-center text-2xl mt-2">About my therapy services</h1>
        <br />
        <div className="text-center p-6">
          <h3 className="text-xl bg-light-green bg-opacity-20 rounded-full m-auto max-w-fit mb-3">
            {" "}
            Humanistic Approach
          </h3>
          <p className=" m-auto border-solid bg-peach-brown bg-opacity-20 rounded-2xl text-center w-8/12">
            I emphasis the importance of our therapeutic relationship and your
            self-exploration. I believe in your innate drive for personal growth
            and self-actualization. My role is to provide a nurturing,
            non-judgmental environment where you feel safe to explore your
            thoughts and emotions. This approach empowers you to recognize your
            strengths, deepen self-understanding, and cultivate self-compassion.
            It enhances your sense of autonomy and personal responsibility,
            helping you make meaningful choices aligned with your values.
          </p>
          <br />

          <h3 className="text-xl bg-light-green bg-opacity-20 rounded-full m-auto max-w-fit mb-3">
            {" "}
            Psychodynamic Approach
          </h3>
          <p className=" m-auto border-solid bg-peach-brown bg-opacity-20 rounded-2xl text-center w-8/12">
            I explore both unconscious and conscious aspects of your childhood
            experiences, uncovering underlying patterns and core beliefs that
            may be contributing to your current struggles. By understanding how
            early experiences shape present-day behaviours and relationships,
            you can break free from maladaptive patterns and foster emotional
            resilience. This insight helps you make more intentional decisions,
            leading to greater emotional freedom and well-being.
          </p>
          <br />

          <h3 className="text-xl bg-light-green bg-opacity-20 rounded-full m-auto max-w-fit mb-3">
            {" "}
            CBT, Mindfulness, and Breathwork
          </h3>
          <p className=" m-auto border-solid bg-peach-brown bg-opacity-20 rounded-2xl text-center w-8/12">
            These techniques help you identify and challenge negative patterns
            of thought and behaviour, promoting healthier coping mechanisms.
            Mindfulness and breathwork enhance self-awareness, emotional
            regulation, and stress reduction, fostering calm and clarity during
            challenging moments. Together, these approaches provide holistic
            support as you navigate life’s challenges and pursue personal
            growth.
          </p>
        </div>
      </div>
      <span className="text-3xl bottom-0 mb-8 block ml-8">
        <Link to="/">⬅ </Link>
      </span>
    </>
  );
}
