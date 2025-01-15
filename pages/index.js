import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

export default function Home() {
  // Scroll animation for the middle image
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bounceAnimation = useSpring({
    transform: `translateY(${scrollY * 0.1}px)`, // Bounce effect
    config: { tension: 200, friction: 10 },
  });

  return (
    <div className="relative overflow-hidden">
      {/* Video Background Section */}
      <section className="bg-green-900 relative h-screen w-full flex items-center justify-center overflow-hidden z-10">
        <video
          className="absolute inset-0 object-cover w-full h-[90vh]"
          src="/videos/vidddd.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text Content */}
        <div className="absolute left-4 top-1/3 z-20 text-white space-y-8">
          <div className="text-8xl font-extrabold tracking-wide animate-pulse">
            <p className="block">VEKANN | FITNESS | CENTRE</p>
          </div>

          <div className="text-3xl font-semibold relative">
            <p className="animate-fade-in-out-first absolute">"No Pain No Gain" - Coach Chris</p>
            <p className="animate-fade-in-out-second absolute">"Ukasadikitira Hauseve" - Simba Monya</p>
          </div>
        </div>

        {/* White Box with Space from Right Edge */}
        <div className="absolute bottom-0 right-10 bg-white w-[40vw] h-[95vh] z-30 transform translate-y-1/2 p-8">
          <h2 className="text-3xl font-extrabold text-green-900 text-center mb-6">WHAT WE OFFER</h2>
          <div className="grid grid-cols-2 gap-x-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/boxing-glove.png"
                  alt="Boxing"
                  width={30}
                  height={30}
                />
                <Link
                  href="/ProgramPage"
                  className="text-lg text-green-900 font-semibold hover:text-yellow-600 transition-colors duration-300"
                >
                  Boxing
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/weightlifting.png"
                  alt="Weightlifting"
                  width={30}
                  height={30}
                />
                <Link
                  href="/ProgramPage"
                  className="text-lg text-green-900 font-semibold hover:text-yellow-600 transition-colors duration-300"
                >
                  Weightlifting
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/battle-rope.png"
                  alt="Turf and Tread"
                  width={30}
                  height={30}
                />
                <Link
                  href="/ProgramPage"
                  className="text-lg text-green-900 font-semibold hover:text-yellow-600 transition-colors duration-300"
                >
                  Turf and Tread
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/cardio.png"
                  alt="Cardio"
                  width={30}
                  height={30}
                />
                <Link
                  href="/ProgramPage"
                  className="text-lg text-green-900 font-semibold hover:text-yellow-600 transition-colors duration-300"
                >
                  Cardio
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/judo.png"
                  alt="Karate"
                  width={30}
                  height={30}
                />
                <Link
                  href="/ProgramPage"
                  className="text-lg text-green-900 font-semibold hover:text-yellow-600 transition-colors duration-300"
                >
                  Karate
                </Link>
              </div>
            </div>
          </div>

          <Link href="/ProgramPage">
            <button className="mt-8 px-6 py-3 bg-green-900 text-yellow-600 font-semibold text-sm border-2 border-yellow-600 rounded-sm hover:bg-yellow-600 hover:text-green-900 hover:border-green-900 transition-all duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* New Heading Below Section */}
      <section className="bg-green-950">
        <div className="text-white text-center py-8">
          <h3 className="text-4xl font-extrabold">JOIN OUR GYM</h3>
          <p className="text-lg font-extralight mt-4 px-8">
            Vekann Fitness Centre – located in the heart of Mabvazuva Estate, Ruwa – is quickly becoming the go-to fitness destination in the area. A dynamic space for everyone, from beginners to seasoned athletes. It's a place where you don't just work out – you push your limits, and you grow. At Vekann Fitness Centre, we’re not just a gym, we’re a community committed to helping each other reach new heights.
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-green-950 py-8 px-4">
        <div className="grid grid-cols-12 gap-4">
          {/* First Image */}
          <div className="col-span-4">
            <Image
              src="/pic1.jpg"
              alt="Fitness Image 1"
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-all transform hover:scale-105 hover:brightness-90"
            />
          </div>

          {/* Middle Image with Bounce Animation */}
          <div className="col-span-4 relative">
            <animated.div
              style={bounceAnimation}
              className="w-full h-full"
            >
              <Image
                src="/pic2.jpg"
                alt="Fitness Image 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-all transform hover:scale-105 hover:brightness-90"
              />
            </animated.div>
          </div>

          {/* Last Two Images */}
          <div className="col-span-4 flex flex-col gap-4">
            <Image
              src="/pic3.jpg"
              alt="Fitness Image 3"
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-all transform hover:scale-105 hover:brightness-90"
            />
            <Image
              src="/pic4.jpg"
              alt="Fitness Image 4"
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-all transform hover:scale-105 hover:brightness-90"
            />
          </div>
        </div>
      </section>

   {/* Schedule a Visit Section */}
      <section
        className="relative py-8 px-4"
        style={{
          backgroundImage: "url('/pic3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h2 className=" text-4xl font-extrabold text-green-900 mb-6">SCHEDULE A VISIT</h2>
          <p className="text-lg font-extralight mb-6">
            Interested in joining Vekann Fitness Centre? Fill out the form below to schedule a visit and get started on your fitness journey!
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
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
