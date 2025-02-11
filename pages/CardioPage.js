import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardioPage = () => {

    const cardioTypes = [
        { src: "/pic1.jpg", name: "Running" },
        { src: "/pic2.jpg", name: "Cycling" },
        { src: "/pic3.jpg", name: "Jump Rope" },
        { src: "/pic4.jpg", name: "Rowing" },
        { src: "/pic5.jpg", name: "HIIT Workouts" },
        { src: "/pic6.jpg", name: "Swimming" },
      ];

  return (
    <div className="relative overflow-hidden">
   {/* Animated Header */}
   <div className="relative w-full overflow-hidden bg-[#052E16] text-white py-4">
        <div className="whitespace-nowrap text-4xl font-extrabold animate-marquee">
          <span className="inline-block animate-marquee-text">CARDIO &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CARDIO &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CARDIO &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
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

      {/* Cardio Introduction */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">
          CARDIO AT VEKANN FITNESS CENTRE
        </h2>
        <p className="text-lg text-[#052E16] max-w-2xl mx-auto">
          Vekann Fitness Centre provides top-tier cardio equipment, expert guidance, and an energetic environment to help you achieve your cardiovascular fitness and endurance goals.
        </p>
        <div className="relative w-full h-64 sm:h-96 mt-6">
          <Image
            src="/pic1.jpg"
            alt="Cardio Workout"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg shadow-[#052E16]"
          />
        </div>
      </section>

      {/* Definition */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">WHAT IS CARDIO?</h2>
        <p className="text-lg text-[#052E16] max-w-2xl mx-auto">
          Cardio, or cardiovascular exercise, is any activity that increases your heart rate, improving heart health, stamina, and overall fitness. It includes activities like running, cycling, and swimming.
        </p>
      </section>

      {/* Benefits of Cardio */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">BENEFITS OF CARDIO</h2>
        <ul className="text-lg text-[#052E16] max-w-2xl mx-auto list-disc list-inside">
          <li>Improves heart and lung health</li>
          <li>Boosts endurance and stamina</li>
          <li>Helps with weight management</li>
          <li>Reduces stress and enhances mood</li>
          <li>Strengthens the immune system</li>
        </ul>
      </section>

   {/* Common Types of Cardio */}
   <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-6">
          COMMON TYPES OF CARDIO
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardioTypes.map((item, index) => (
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

export default CardioPage;
