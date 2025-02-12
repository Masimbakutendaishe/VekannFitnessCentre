import Image from "next/image";
import Link from "next/link";
import React from "react";

const TurfAndTreadPage = () => {

    const exerciseTypes = [
        { src: "/pic1.jpg", name: "Turf Workouts" },
        { src: "/pic4.jpg", name: "Treadmill Training" },
        { src: "/pic3.jpg", name: "Agility Drills" },
        { src: "/pic2.jpg", name: "Interval Training" },
        { src: "/pic6.jpg", name: "Strength Training" },
        { src: "/pic3.jpg", name: "Endurance Running" },
    ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Header */}
      <div className="relative w-full overflow-hidden bg-[#052E16] text-white py-4">
        <div className="whitespace-nowrap text-4xl font-extrabold animate-marquee">
          <span className="inline-block animate-marquee-text">GYM EXERCISES &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; GYM EXERCISES &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; GYM EXERCISES &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
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

      {/* Gym Introduction */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">
          TURF AND TREAD AT VEKANN FITNESS CENTRE
        </h2>
        <p className="text-lg text-[#052E16] max-w-2xl mx-auto">
          Vekann Fitness Centre offers a range of fitness exercises, including turf and treadmill workouts, with expert guidance and a motivating environment to help you achieve your fitness goals.
        </p>
        <div className="relative w-full h-64 sm:h-96 mt-6">
          <Image
            src="/turftread.JPG"
            alt="Gym Training"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg shadow-[#052E16]"
          />
        </div>
      </section>

      {/* Definition */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">WHAT IS TURF AND TREAD?</h2>
        <p className="text-lg text-[#052E16] max-w-2xl mx-auto">
          Turf and Tread training involves various physical exercises aimed at improving strength, endurance, flexibility, and cardiovascular health. It includes workouts such as turf drills and treadmill training, designed to enhance overall fitness.
        </p>
      </section>

      {/* Benefits of Gym Training */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">BENEFITS OF TURF AND TREAD</h2>
        <ul className="text-lg text-[#052E16] max-w-2xl mx-auto list-disc list-inside">
          <li>Improves physical strength and endurance</li>
          <li>Enhances cardiovascular health</li>
          <li>Increases flexibility and mobility</li>
          <li>Promotes weight loss and muscle toning</li>
          <li>Boosts mental health and well-being</li>
        </ul>
      </section>

      {/* Common Types of Gym Exercises */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-6">
          COMMON TYPES OF GYM EXERCISES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exerciseTypes.map((item, index) => (
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

export default TurfAndTreadPage;
