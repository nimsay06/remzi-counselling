import Footer from "../Footer";

export default function FAQ() {
  return (
    <>
      <div className="h-screen p-3 overflow-scroll m-5 lg:w-2/3">
        <div className=" text-dark-green mb-2">
          <h1 className="font-Cormorant font-extrabold text-3xl">
            {" "}
            How can counselling help?
          </h1>
          <p>
            Counselling can be a valuable tool for personal growth, offering
            clarity and insight as we navigate life’s challenges. Whether
            you&apos;re seeking support for anxiety, depression, relationship
            issues, life transitions, trauma, loss and more, therapy provides a
            safe space for self-exploration and healing. Together, we will work
            to unlock your potential, helping you gain a deeper understanding of
            yourself and move towards a more fulfilling life.
          </p>
        </div>
        <div className=" text-dark-green mb-2">
          <h1 className="font-Cormorant font-extrabold text-3xl">
            {" "}
            What can I expect in my first session?
          </h1>
          <p>
            Your first session will involve getting to know you, your
            background, and your current concerns. We will discuss your goals
            for therapy and begin to build a trusting therapeutic relationship.
            You will have the opportunity to talk freely, and I will be there to
            listen, providing a safe and compassionate space. I will also
            explain the different therapeutic approaches we might use and how
            they can help you. By the end of the session, you will have a
            clearer understanding of how we can work together to achieve your
            personal goals and improve your overall well-being.
          </p>
        </div>
        <div className=" text-dark-green mb-2">
          <h1 className="font-Cormorant font-extrabold text-3xl">
            {" "}
            What are my specialities?
          </h1>
          <p>
            My specialist therapy topics include anxiety, depression and family
            conflict.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
