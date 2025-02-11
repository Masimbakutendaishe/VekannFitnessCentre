import Image from "next/image";
import Link from "next/link";
import React from "react";

const WeightliftingPage = () => {

    const weightliftingTypes = [
        { src: "/pic1.jpg", name: "Olympic Weightlifting" },
        { src: "/pic2.jpg", name: "Powerlifting" },
        { src: "/pic3.jpg", name: "Bodybuilding" },
        { src: "/pic4.jpg", name: "Strongman Training" },
        { src: "/pic5.jpg", name: "CrossFit Weightlifting" },
        { src: "/pic6.jpg", name: "Kettlebell Training" },
      ];

  return (
    <div className="relative overflow-hidden">
   {/* Animated Header */}
   <div className="relative w-full overflow-hidden bg-[#052E16] text-white py-4">
        <div className="whitespace-nowrap text-4xl font-extrabold animate-marquee">
          <span className="inline-block animate-marquee-text">WEIGHTLIFTING &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WEIGHTLIFTING &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WEIGHTLIFTING &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
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

      {/* Weightlifting Introduction */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">
          WEIGHTLIFTING AT VEKANN FITNESS CENTRE
        </h2>
        <p className="text-lg text-[#052E16] max-w-2xl mx-auto">
          Vekann Fitness Centre offers state-of-the-art weightlifting equipment, expert trainers, and a supportive environment to help you achieve your strength and fitness goals.
        </p>
        <div className="relative w-full h-64 sm:h-96 mt-6">
          <Image
            src="/pic1.jpg"
            alt="Weightlifting"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg shadow-[#052E16]"
          />
        </div>
      </section>

      {/* Definition */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">WHAT IS WEIGHTLIFTING?</h2>
        <p className="text-lg text-[#052E16] max-w-2xl mx-auto">
          Weightlifting is a form of strength training that involves lifting heavy weights to build muscle, endurance, and overall body strength. It includes various exercises that target different muscle groups.
        </p>
      </section>

      {/* Benefits of Weightlifting */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">BENEFITS OF WEIGHTLIFTING</h2>
        <ul className="text-lg text-[#052E16] max-w-2xl mx-auto list-disc list-inside">
          <li>Increases muscle strength and endurance</li>
          <li>Boosts metabolism and fat loss</li>
          <li>Improves bone density and joint health</li>
          <li>Enhances athletic performance</li>
          <li>Promotes mental well-being and confidence</li>
        </ul>
      </section>

   {/* Common Types of Weightlifting */}
   <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-6">
          COMMON TYPES OF WEIGHTLIFTING
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {weightliftingTypes.map((item, index) => (
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

export default WeightliftingPage;
