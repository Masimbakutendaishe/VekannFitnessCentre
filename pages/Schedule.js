import Image from "next/image";
import Link from "next/link";
import React from "react";



const SchedulePage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Section */}
      <section className="hidden sm:block m-0 p-0 bg-white relative h-[70vh] w-full flex items-center justify-center overflow-hidden z-10 shadow-white">
        <Image
          src="/pic11.JPG"
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
            <p>OUR WEEKLY SCHEDULE</p>
          </div>
        </div>

        {/* White Box with Space from Right Edge */}
        <div className="border-green-900 absolute bottom-0 right-0 sm:right-10 bg-white w-full sm:w-[40vw] h-[20vh] z-30 transform translate-y-[-10%] p-8 shadow-lg shadow-green-900">
          <p className="text-l font-bold text-green-900 text-center">
            We strive to make sure we are open over a range of hours, ensuring the flexibility to meet your own typical day to day schedules.
          </p>
        </div>
      </section>

 {/* Small Screen Section */}
<section className="sm:hidden  ">
<div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/pic11.JPG')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 opacity-90 ">OUR WEEKLY SCHEDULE</h1>
      </div>

  {/* White Box with Space from Right Edge */}
  <div className="border-green-900  bg-white  sm:w-[40vw] h-[20vh] z-30 transform p-8 shadow-lg shadow-green-900">
          <p className="text-l font-bold text-green-900 text-center">
          We strive to make sure we are open over a range of hours, ensuring the flexibility to meet your own typical day to day schedules.</p>
        </div>
</section>


      {/* Schedule Table Section */}
      <section className="relative py-8 px-4 shadow-lg shadow-white" style={{ backgroundImage: "url('/pic3.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-green-900 mb-6">OUR WEEKLY SCHEDULE</h2>
          <p className="text-sm sm:text-lg font-extralight mb-6">The table below provides an overview of our opening times and instructor availability.</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-green-900">
              <thead>
                <tr className="bg-green-900 text-white">
                  <th className="border border-green-900 px-6 py-4">Day</th>
                  <th className="border border-green-900 px-6 py-4">Gym Hours</th>
                  <th className="border border-green-900 px-6 py-4">Instructor Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border border-green-900 px-6 py-4">Monday</td>
                  <td className="border border-green-900 px-6 py-4">4:00 AM - 8:00 PM</td>
                  <td className="border border-green-900 px-6 py-4">5:00 AM - 10:00 AM, 4:00 PM - 7:00 PM</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-green-900 px-6 py-4">Tuesday</td>
                  <td className="border border-green-900 px-6 py-4">4:00 AM - 8:00 PM</td>
                  <td className="border border-green-900 px-6 py-4">5:00 AM - 10:00 AM, 4:00 PM - 7:00 PM</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-green-900 px-6 py-4">Wednesday</td>
                  <td className="border border-green-900 px-6 py-4">4:00 AM - 8:00 PM</td>
                  <td className="border border-green-900 px-6 py-4">5:00 AM - 10:00 AM, 4:00 PM - 7:00 PM</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-green-900 px-6 py-4">Thursday</td>
                  <td className="border border-green-900 px-6 py-4">4:00 AM - 8:00 PM</td>
                  <td className="border border-green-900 px-6 py-4">5:00 AM - 10:00 AM, 4:00 PM - 7:00 PM</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-green-900 px-6 py-4">Friday</td>
                  <td className="border border-green-900 px-6 py-4">4:00 AM - 8:00 PM</td>
                  <td className="border border-green-900 px-6 py-4">5:00 AM - 10:00 AM, 4:00 PM - 7:00 PM</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-green-900 px-6 py-4">Saturday</td>
                  <td className="border border-green-900 px-6 py-4">4:00 AM - 10:00 AM</td>
                  <td className="border border-green-900 px-6 py-4">4:00 AM - 10:00 AM</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-green-900 px-6 py-4">Sunday</td>
                  <td className="border border-green-900 px-6 py-4" colSpan="2">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Schedule a Visit Section */}
      <section
        className="relative py-8 px-4 shadow-lg shadow-white bg-white"

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

export default SchedulePage;
