import Image from "next/image";
import Link from "next/link";
import React from "react";
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';*/


const PersonalTrainingPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Section */}
      <section className="hidden sm:block m-0 p-0 bg-white relative h-[70vh] w-full flex items-center justify-center overflow-hidden z-10 shadow-white">
        <Image
          src="/pic6.jpg"
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
            <p>PERSONAL TRAINING</p>
          </div>
        </div>

        {/* White Box with Space from Right Edge */}
        <div className="border-green-900 absolute bottom-0 right-0 sm:right-10 bg-white w-full sm:w-[40vw] h-[20vh] z-30 transform translate-y-[-10%] p-8 shadow-lg shadow-green-900">
          <p className="text-l font-bold text-green-900 text-center">
            Chris360, our experienced personal trainer at Vekann, will design the ultimate fitness plan specifically for you, ensuring that you reach the goals you've always dreamed about.
          </p>
        </div>
      </section>

 {/* Small Screen Section */}
<section className="sm:hidden ">
<div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/pic6.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 opacity-90 ">PERSONAL TRAINING</h1>
      </div>

  {/* White Box with Space from Right Edge */}
  <div className="border-green-900  bg-white  sm:w-[40vw] h-[20vh] z-30 transform p-8 shadow-lg shadow-green-900">
          <p className="text-l font-bold text-green-900 text-center">
            Chris360, our experienced personal trainer at Vekann, will design the ultimate fitness plan specifically for you, ensuring that you reach the goals you've always dreamed about.
          </p>
        </div>
</section>


      {/* New Section for Images and White Rectangle */}
      <section className="bg-white flex flex-col sm:flex-row p-8 shadow-white">
        {/* Left Half Images */}
        <div className="w-full sm:w-1/2 flex flex-col sm:flex-row mr-5">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-4">
            <Image
              className="shadow-lg shadow-yellow-600"
              src="/pic9.jpg"
              alt="Image 1"
              layout="responsive"
              width={1920}
              height={1080}
              objectFit="cover"
            />
          </div>

          <div className="w-full sm:w-1/2 flex flex-col">
            <div className="h-1/2 mb-4">
              <Image
                className="shadow-lg shadow-yellow-600"
                src="/pic8.jpg"
                alt="Image 2"
                layout="responsive"
                width={1920}
                height={1080}
                objectFit="cover"
              />
            </div>
            <div className="h-1/2">
              <Image
                className="shadow-lg shadow-yellow-600"
                src="/pic14.jpg"
                alt="Image 3"
                layout="responsive"
                width={1920}
                height={1080}
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Right Half White Rectangle */}
        <div className="w-full sm:w-1/2 bg-white pl-4 pr-4 sm:pl-10 sm:pr-15 mt-4 sm:mt-0 shadow-lg shadow-green-900 z-30">
          <h2 className="text-center text-4xl font-bold text-green-900 mb-6 mt-10">Train Like a Pro</h2>
          <ul className="mt-8 ml-10 space-y-4 text-lg text-gray-800">
            <li className="flex items-center">
              /*<FontAwesomeIcon icon={faCheckCircle} className="mr-4 text-green-900" size="lg" />*/
              You meet up with the trainer.
            </li>
            <li className="flex items-center">
              /*<FontAwesomeIcon icon={faCheckCircle} className="mr-4 text-green-900" size="lg" />*/
              We design your program.
            </li>
            <li className="flex items-center">
              /*<FontAwesomeIcon icon={faCheckCircle} className="mr-4 text-green-900" size="lg" />*/
              You unleash your potential.
            </li>
          </ul>
          <div className="mb-20 flex justify-center mt-20">
            <button
              type="submit"
              className="font-semibold p-3 bg-green-900 text-yellow-600 border-2 border-yellow-600 hover:bg-yellow-600 hover:text-green-900 hover:border-green-900 transition-all duration-300"
            >
              SCHEDULE NOW
            </button>
          </div>
        </div>
      </section>

      {/* New Section with White Background and Gradient Image */}
      <section
        className="relative py-8 px-4 shadow-white"
        style={{
          backgroundImage: "url('/pic3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-green-900 to-transparent"></div>

        <div className="relative z-20 text-center font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl">
          <p className="text-green-900">STRENGTH. MOBILITY. FLEXIBILITY. FAT LOSS. FUNCTIONAL MOVEMENT. KETTLEBELLS. BOXING.</p>
          <p className="text-yellow-600">CONDITIONING. OLYMPIC LEVEL WEIGHTLIFTING.</p>
        </div>

        <div className="relative z-20 text-center mt-8 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          <p className="text-yellow-600">
            Vekann Fitness Centre offers an experienced and motivated trainer with expertise covering all areas of fitness. Whether you're looking to gain strength, improve flexibility, or lose fat, our Instructor has the knowledge and passion to help you reach your goals.
          </p>
        </div>
      </section>

      {/* New Section for Images and White Rectangle */}
      <section className="bg-white flex flex-col sm:flex-row p-8">
        {/* Right Half White Rectangle */}
        <div className="mb-5 mr-5 w-full sm:w-1/2 bg-white pl-4 pr-4 sm:pl-10 sm:pr-15 mt-4 sm:mt-0 shadow-lg shadow-yellow-600 z-30">
          <div className="mt-20 relative z-20 text-center text-green-900 font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl">
            <p className="mb-5">GET A PLAN.</p>
            <p className="mb-5 text-yellow-600">GET A PUSH.</p>
            <p className="mb-5">GET RESULTS.</p>
          </div>

          <div className="flex justify-center mt-20 mb-5">
            <button
              type="submit"
              className="font-semibold p-3 bg-green-900 text-yellow-600 border-2 border-yellow-600 hover:bg-yellow-600 hover:text-green-900 hover:border-green-900 transition-all duration-300"
            >
              HANDE TIONE!
            </button>
          </div>
        </div>

        {/* Left Half Images */}
        <div className="w-full sm:w-1/2 flex flex-col sm:flex-row ">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-4">
            <Image
              className="shadow-lg shadow-green-900"
              src="/pic1.jpg"
              alt="Image 1"
              layout="responsive"
              width={1920}
              height={1080}
              objectFit="cover"
            />
          </div>

          <div className="w-full sm:w-1/2 flex flex-col">
            <div className="h-1/2 mb-4">
              <Image
                className="shadow-lg shadow-green-900"
                src="/pic10.jpg"
                alt="Image 2"
                layout="responsive"
                width={1920}
                height={1080}
                objectFit="cover"
              />
            </div>
            <div className="h-1/2">
              <Image
                className="shadow-lg shadow-green-900"
                src="/pic12.jpg"
                alt="Image 3"
                layout="responsive"
                width={1920}
                height={1080}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
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
            Have a Query? Eager to Start Your Ftnes Journey? Fill out the form below to schedule a visit and get started on your fitness journey!
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

export default PersonalTrainingPage;
