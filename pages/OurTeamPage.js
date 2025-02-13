import Image from "next/image";
import Link from "next/link";
import React from "react";



const OurTeamPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Section */}
      <section className="hidden sm:block m-0 p-0 bg-white relative h-[70vh] w-full flex items-center justify-center overflow-hidden z-10 shadow-white">
        <Image
          src="/pic72.jpg"
          alt="Personal Training"
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
          objectPosition="top"
          priority
          className=" absolute inset-0 w-full h-full"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 opacity-50 h-full w-full"></div>

        {/* Text Content */}
        <div className="absolute left-6 top-1/4 z-20 text-white space-y-8">
          <div className="text-3xl sm:text-8xl font-extrabold tracking-wide opacity-90">
            <p>MEET CHRIS360</p>
          </div>
        </div>

        {/* White Box with Space from Right Edge */}
        <div className="border-green-900 absolute bottom-0 right-0 sm:right-10 bg-white w-full sm:w-[40vw] h-[20vh] z-30 transform translate-y-[-15%] p-8 shadow-lg shadow-green-900">
          <p className="text-l font-bold text-green-900 text-center">
            Chris360, our experienced personal trainer at Vekann, will design the ultimate fitness plan specifically for you, ensuring that you reach the goals you've always dreamed about.
          </p>
        </div>
      </section>

 {/* Small Screen Section */}
<section className="sm:hidden  ">
<div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/pic72.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 opacity-90 ">MEET CHRIS360</h1>
      </div>

  {/* White Box with Space from Right Edge */}
  <div className="border-green-900  bg-white  sm:w-[40vw] h-[20vh] z-30 transform p-8 shadow-lg shadow-green-900">
          <p className="text-l font-bold text-green-900 text-center">
            Chris360, our experienced personal trainer at Vekann, will design the ultimate fitness plan specifically for you, ensuring that you reach the goals you've always dreamed about.
          </p>
        </div>
</section>


{/* Instructor Section */}
<section className="flex flex-col items-center text-center my-20 ">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6">ABOUT OUR INSTRUCTOR</h2>

        {/* Image Container with Effects */}
        <div className="relative group w-64 sm:w-80 h-64 sm:h-80 shadow-lg shadow-green-900 group-hover:shadow-yellow-600 rounded-lg overflow-hidden transition-all duration-500">
          <Image
            src="/chris360.jpg" // Replace with actual image path
            alt="Instructor Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full grayscale transition-all duration-500 transform group-hover:scale-110 group-hover:grayscale-0"
          />
        </div>

        {/* Instructor Details */}
        <h3 className="text-2xl font-semibold text-green-900 mt-4">Kudzi / Chris360</h3>
        <p className="text-green-900 text-sm sm:text-lg max-w-md mt-2">
          With years of experience in personal training and fitness coaching, Chris360 is dedicated to helping individuals achieve their goals through tailored training programs.
        </p>
      </section>

      {/* Schedule a Visit Section */}
      <section
        className="relative py-8 px-4 shadow-lg shadow-white"
        style={{
          backgroundImage: "url('/pic3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-green-900 mb-6">SEND US A MESSAGE</h2>
          <p className="text-sm sm:text-lg font-extralight mb-6">
            Have a Query? Eager to Start Your Fitness Journey? Fill out the form below to schedule a visit and get started on your fitness journey!
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border-2 border-green-900 focus:outline-none focus:border-yellow-600"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full p-3 border-2 border-green-900 focus:outline-none focus:border-yellow-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border-2 border-green-900 focus:outline-none focus:border-yellow-600"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border-2 border-green-900 focus:outline-none focus:border-yellow-600"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="font-semibold p-3 bg-green-900 text-yellow-600 border-2 border-yellow-600 hover:bg-yellow-600 hover:text-green-900 hover:border-green-900 transition-all duration-300"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;
