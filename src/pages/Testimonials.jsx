export default function Testimonials() {
  const clientQuotes1 = [
    "Honestly, I didn't think therapy could help me. I've been dealing with anxiety and depression for years and nothing seemed to work. But Deon totally changed my perspective , she’s super understanding and actually gives you tools that work in real life not just in the sessions. I've made more progress in a few months with her than I did in years of trying to figure it out on my own. I'm finally starting to feel like myself again",

    "Deon is a natural listener, but more than that. She is so good at offering positive ways forward that are achievable too",

    "Just being able to voice my concerns and worries has been really helpful. Feeling validated as a person. Deon is very patient and understanding",

    "My spouse and I reached out to Deon when we were struggling in our marriage. Years of unresolved, issues had left us distant, frustrated and unsure if we could find our way back to each other. Deon was instrumental in helping us rebuild our communication and trust. She created a neutral safe space where both of us felt heard and understood guiding us through difficult conversations with wisdom and empathy. We are in a much healthier happier place now",
  ];
  const clientQuotes2 = [
    "Deon really listened to me and seem to understand, I didn't feel judged by her. Her attitude towards me was warm and friendly. She helped me to explore my difficulties and to understand myself better. She was also very respectful towards me",

    "The whole experience was helpful. Deon was so patient and she listened. I thought she was so supportive. She was able to pick up on the main points at the end of each session. There is a definite positive change in me from before the counselling to now, I can now see myself how I was before the incident",

    "When I started working with Deon, I wasn't sure if anyone could help me heal from the trauma I had experienced. I had carried it for so long and it felt like part of me, but with Deon's gentle guidance I found the courage to confront my pass in a safe supportive space. It wasn't easy, but I now feel lighter freer and more in control of my own life. Deon helped me understand that healing is a journey and I am so grateful to have her by my side on this path",
    "If you’re looking for a counselor who is compassionate, insightful, and genuinely committed to helping you find clarity, I wholeheartedly recommend Deon. Their impact on my life has been truly transformative.",

    "Deon helped me come to terms with what happened. Having counselling has made me realise it was not my fault and start living my life again",
  ];
  const clientQuotes3 = [
    "I have worked hard and due to a good counsellor/client working relationship have achieved much in terms of my self-awareness and in being more comfortable with my life. Thank you for working with me",

    "After getting out of an abusive relationship I was really lost. I didn't trust anyone and I didn't know how to even begin to heal. Deon made me feel safe from the moment we started. She listened without judgement and slowly helped me piece together my sense of self. I felt broken when I started but now, I feel like I am finally becoming whole again. She really understood what I needed, and I can't thank her enough for helping me find my way back to myself",
    "I cannot thank Deon enough for the incredible support I received during my therapy sessions. Over the past few weeks, Deon has truly opened my mind and helped me gain a clearer perspective on my thoughts and emotions.",
    "Through our sessions, I’ve learned valuable tools and strategies that have significantly reduced my anxiety and allowed me to approach life with a much calmer and more positive mindset. I now feel ready to move forward and put everything I’ve learned into practice.",
  ];
  return (
    <>
      <div className="md:text-xl text-lg text-dark-green mx-auto mt-8 w-full text-pretty text-center">
        <h1 className="font-Cormorant font-black text-4xl ">
          Testimonials from my clients
        </h1>
        <p className="mt-8">
          If you are still unsure how therapy can make a difference, hear from
          those who have been there.
          <br /> My clients’ testimonials offer real insights into the healing
          and growth they have experienced, with the help of my services.
        </p>
      </div>
      <div className=" mt-8 text-dark-green text-md italic text-center w-full md:grid md:grid-cols-3 ">
        <div className=" p-8 pt-0">
          {clientQuotes1.map((quote, index) => (
            <p
              key={index}
              className=" border-2 p-4 mb-0 mt-4 text-lg rounded-lg h-fit bg-peach-brown bg-opacity-20 "
            >
              &quot;
              {quote}
              &quot;
            </p>
          ))}
        </div>
        <div className=" p-8 pt-0 ">
          {clientQuotes2.map((quote, index) => (
            <p
              key={index}
              className="border-2 p-4 text-lg mb-0 mt-4 rounded-lg bg-peach-brown bg-opacity-20 "
            >
              &quot;
              {quote}
              &quot;
            </p>
          ))}
        </div>{" "}
        <div className=" p-8 pt-0  ">
          {clientQuotes3.map((quote, index) => (
            <p
              key={index}
              className="border-2 p-4 mt-4 text-lg rounded-lg bg-peach-brown bg-opacity-20 "
            >
              &quot;
              {quote}
              &quot;
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
