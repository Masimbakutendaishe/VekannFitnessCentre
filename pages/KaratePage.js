import Image from "next/image";
import Link from "next/link";
import React from "react";

const KaratePage = () => {

    const karateTypes = [
        { src: "/pic1.jpg", name: "Kata" },
        { src: "/pic2.jpg", name: "Kumite" },
        { src: "/pic3.jpg", name: "Kihon" },
        { src: "/pic4.jpg", name: "Self-Defense" },
        { src: "/pic5.jpg", name: "Weapons Training" },
        { src: "/pic6.jpg", name: "Breaking Techniques" },
      ];

  return (
    <div className="relative overflow-hidden">
   {/* Animated Header */}
   <div className="relative w-full overflow-hidden bg-[#052E16] text-white py-4">
        <div className="whitespace-nowrap text-4xl font-extrabold animate-marquee">
          <span className="inline-block animate-marquee-text">KARATE &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; KARATE &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; KARATE &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee-text {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }
      `}</style>

      {/* Karate Introduction */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">
          KARATE AT VEKANN FITNESS CENTRE
        </h2>
        <p className="text-lg text-[#052E16] max-w-2xl mx-auto">
          Vekann Fitness Centre provides expert karate training, professional instructors, and a disciplined environment to help you master the art of self-defense and physical fitness.
        </p>
        <div className="relative w-full h-64 sm:h-96 mt-6">
          <Image
            src="/karate.JPG"
            alt="Karate Training"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg shadow-[#052E16]"
          />
        </div>
      </section>

      {/* Definition */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">WHAT IS KARATE?</h2>
        <p className="text-lg text-[#052E16] max-w-2xl mx-auto">
          Karate is a traditional martial art that focuses on striking techniques, self-defense, discipline, and mental strength. It includes various forms such as kata, kumite, and kihon.
        </p>
      </section>

      {/* Benefits of Karate */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">BENEFITS OF KARATE</h2>
        <ul className="text-lg text-[#052E16] max-w-2xl mx-auto list-disc list-inside">
          <li>Improves physical strength and flexibility</li>
          <li>Enhances self-defense skills</li>
          <li>Develops discipline and mental resilience</li>
          <li>Boosts confidence and focus</li>
          <li>Encourages overall physical fitness</li>
        </ul>
      </section>

   {/* Common Types of Karate */}
   <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-6">
          COMMON TYPES OF KARATE TRAINING
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {karateTypes.map((item, index) => (
            <div
              key={index}
              className="group relative shadow-lg shadow-[#052E16] rounded-lg overflow-hidden transition-all duration-500"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-full object-cover grayscale transition-all duration-500 transform group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-[#FFD700] font-bold text-lg">
                  Learn More
                </button>
              </div>
              <h3 className="absolute bottom-0 w-full bg-white text-[#052E16] text-lg font-bold p-3 text-center">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KaratePage;
