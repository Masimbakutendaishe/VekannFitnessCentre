import Image from "next/image";
import Link from "next/link";
import React from "react";

const WeightlossPage = () => {

    const weightLossMethods = [
        { src: "/pic1.jpg", name: "Healthy Eating" },
        { src: "/pic2.jpg", name: "Cardio Workouts" },
        { src: "/pic3.jpg", name: "Calorie Control" },
        { src: "/pic4.jpg", name: "Strength Training" },
        { src: "/pic5.jpg", name: "Balanced Diet" },
        { src: "/pic6.jpg", name: "HIIT Training" },
    ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Header */}
      <div className="relative w-full overflow-hidden bg-[#052E16] text-white py-4">
        <div className="whitespace-nowrap text-4xl font-extrabold animate-marquee">
          <span className="inline-block animate-marquee-text">WEIGHT LOSS &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WEIGHT LOSS &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WEIGHT LOSS &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
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

      {/* Weight Loss Introduction */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">
          WEIGHT LOSS AT VEKANN FITNESS CENTRE
        </h2>
        <p className="text-lg text-[#052E16] max-w-2xl mx-auto">
          Vekann Fitness Centre provides expert weight loss programs tailored to your needs, including healthy eating plans, workouts, and coaching to help you achieve your desired weight loss goals.
        </p>
        <div className="relative w-full h-64 sm:h-96 mt-6">
          <Image
            src="/weightloss.JPG"
            alt="Weight Loss"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg shadow-[#052E16]"
          />
        </div>
      </section>

      {/* Definition */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">WHAT IS WEIGHT LOSS?</h2>
        <p className="text-lg text-[#052E16] max-w-2xl mx-auto">
          Weight loss involves the process of reducing body weight, typically through a combination of healthy eating, exercise, and lifestyle changes. It aims to burn more calories than consumed, leading to a healthier, leaner body.
        </p>
      </section>

      {/* Benefits of Weight Loss */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-4">BENEFITS OF WEIGHT LOSS</h2>
        <ul className="text-lg text-[#052E16] max-w-2xl mx-auto list-disc list-inside">
          <li>Improves cardiovascular health</li>
          <li>Reduces the risk of chronic diseases</li>
          <li>Boosts energy levels</li>
          <li>Improves mental clarity and focus</li>
          <li>Enhances overall well-being and confidence</li>
        </ul>
      </section>

      {/* Common Weight Loss Methods */}
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#052E16] mb-6">
          COMMON METHODS OF WEIGHT LOSS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {weightLossMethods.map((item, index) => (
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

export default WeightlossPage;
