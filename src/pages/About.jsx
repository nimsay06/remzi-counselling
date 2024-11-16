import couchImg from "../assets/Couch.jpg";
import mindfulImg from "../assets/skyline.jpg";
import brainImg from "../assets/brain_unsplash.jpg";

const images = [
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
    quote: "“Who looks outside, dreams; who looks inside, awakes.” – Carl Jung",
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
export default function MyServices() {
  return (
    <>
      <div className="m-5 overflow-auto min-h-screen">
        <div className=" flex flex-col md:flex-row gap-16 text-dark-green ">
          {images.map((image, index) => (
            <div key={index} className="relative w-full md:w-2/3 h-96">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover  "
              />
              <div className="absolute inset-0 text-center  text-main xl:w-1/3">
                <h1 className="text-3xl font-Cormorant font-extrabold mt-2 lg:mt-8">
                  {" "}
                  {image.header}
                </h1>
                <br />
                <p className=" text-lg font-SourceSans">{image.text}</p>
                <p className="italic text-dark-green">{image.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// import React from "react";

{
  /* // const Card = ({ title, description, imageUrl }) => { */
}
//   return (
//     <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 -z-10 bg-cover bg-center opacity-30 transform scale-125 translate-x-4 translate-y-4"
//         style={{ backgroundImage: `url(${imageUrl})` }}
//       ></div>

//       {/* Content */}
//       <div className="relative p-6">
//         <h2 className="text-lg font-bold">{title}</h2>
//         <p className="text-sm text-gray-700 mt-2">{description}</p>
//       </div>
//     </div>
//   );
// };

// const About = () => {
//   const cards = [
//     {
//       title: "Humanist Approach",
//       description: "This is the description for Card 1.",
//       imageUrl:
//         "https://via.placeholder.com/150",
//     },
//     {
//       title: "Psychodyanmic",
//       description: "This is the description for Card 2.",
//       imageUrl: "https://via.placeholder.com/150",
//     },
//     {
//       title: "CBTS",
//       description: "This is the description for Card 3.",
//       imageUrl: "https://via.placeholder.com/150",
//     },
//   ];

//   return (
//     <div className="flex flex-wrap gap-6 justify-center p-4">
//       {cards.map((card, index) => (
//         <Card
//           key={index}
//           title={card.title}
//           description={card.description}
//           imageUrl={card.imageUrl}
//         />
//       ))}
//     </div>
//   );
// };

//  <div className="container mx-auto grid grid-cols-1 grid-rows-3 gap-5 p-10 h-fit ">
//       <div className="section relative border-4 grid-rows-1 h-56 mt-10 grid-row-span-1 ">
//         <img src={img} className="left-20 border-5"></img>
//         <div className="textDiv absolute top-40 left-36 bg-parchment bg-opacity-70 p-4 rounded-lg shadow-lg ">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
//           laborum corporis libero a ab cupiditate similique?
//         </div>
//       </div>
//       <div className="section relative border-4 grid-row-span-2 h-80 mt-10">
//         <div className=" bg-cover bg-center bg-slate-700 inline-block"></div>
//         <div className="textDiv absolute top-40 left-36 bg-parchment bg-opacity-70 p-4 rounded-lg shadow-lg ">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
//           laborum corporis libero a ab cupiditate similique?
//         </div>
//       </div>
//       <div className="section relative border-4 grid-rows-3 h-80 mt-10 grid-row-span-3">
//         <img src={img} className="block m-auto   "></img>
//         <div className="textDiv absolute bottom-40 right-36 bg-parchment bg-opacity-70 p-4 rounded-lg shadow-lg ">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
//           laborum corporis libero a ab cupiditate similique?
//         </div>
//       </div>
//     </div>
//   );
