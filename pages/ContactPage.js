import Image from "next/image";
import Link from "next/link";
import React from "react";

const sendWhatsAppMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    const message = event.target.message.value;
    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(`Hello, my name is ${name}. ${message}`)}`;
    window.open(whatsappUrl, "_blank");
  };


const ContactPage = () => {

    const gymLocation = "https://www.google.com/maps/place/Your+Gym+Location/@-37.8141079,144.9630578,15z/";
  return (
    <div className="relative overflow-hidden">
      {/* Background Section */}
      <section className="hidden sm:block m-0 p-0 bg-white relative h-[70vh] w-full flex items-center justify-center overflow-hidden z-10 shadow-white">
        <Image
          src="/pic10.JPG"
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
            <p>CONTACT US</p>
          </div>
        </div>

        {/* White Box with Space from Right Edge */}
        <div className="border-green-900 absolute bottom-0 right-0 sm:right-10 bg-white w-full sm:w-[40vw] h-[20vh] z-30 transform translate-y-[-10%] p-8 shadow-lg shadow-green-900">
          <p className="text-l font-bold text-green-900 text-center">
            Feel free to contact us using any method suitable for you from the options below. 
          </p>
        </div>
      </section>

 {/* Small Screen Section */}
<section className="sm:hidden  ">
<div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/pic10.JPG')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 opacity-90 ">CONTACT US</h1>
      </div>

  {/* White Box with Space from Right Edge */}
  <div className="border-green-900  bg-white  sm:w-[40vw] h-[20vh] z-30 transform p-8 shadow-lg shadow-green-900">
          <p className="text-l font-bold text-green-900 text-center">
          Feel free to contact us using any method suitable for you from the options below.
          </p>
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
        
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-green-900 mb-6">PAY US A VISIT</h2>
          <p className="text-sm sm:text-lg text-green-900 mb-6">
          Looking for us? Here’s our gym location. Drop by and start your fitness journey today!
          
          </p>

          {/* Location Icon */}
      <div className="flex justify-center">
      <a href={gymLocation} target="_blank" rel="noopener noreferrer" className="text-green-900 text-4xl">
          📍
        </a>
      </div>

            {/* Google Map Embed */}
      <div className=" w-full h-64 md:h-96 mb-6 rounded-lg">
        <iframe
          className="w-full h-full border-0 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.96305781531742!3d-37.81410797975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777f3e9b15b!2sYour%20Gym%20Location!5e0!3m2!1sen!2sus!4v1626779456389!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      
        </div>

        <div className="max-w-xl mx-auto text-center relative z-10 mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6">SEND A WHATSAPP TEXT</h2>
          <p className="text-sm sm:text-lg text-white font-extralight mb-6">
            Have a Query? Eager to Start Your Fitness Journey? Fill out the form below to schedule a visit and get started on your fitness journey!
          </p>

          <form className="space-y-4 text-center" onSubmit={sendWhatsAppMessage}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border-2 border-green-900 focus:outline-none focus:border-yellow-600"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="number"
            placeholder="Your WhatsApp Number"
            className="w-full p-3 border-2 border-green-900 focus:outline-none focus:border-yellow-600"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 h-32 border-2 border-green-900 focus:outline-none focus:border-yellow-600"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
  <button
    type="submit"
    className="font-semibold p-3 bg-green-900 text-white border-2 border-white hover:bg-white hover:text-green-900 hover:border-green-900 transition-all duration-300 flex items-center justify-center gap-2"
  >
            <span>Send to WhatsApp</span>
            <span className="text-xl">📩</span>
          </button>
        </div>
      </form>
        </div>

        <div className="max-w-xl mx-auto text-center relative z-10">
  <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6">CONTACT US</h2>
  <p className="text-sm sm:text-lg font-extralight mb-6 text-white">
    Have a query? Get in touch with us through any of the following contact details.
  </p>

  <div className="space-y-6">
    {/* Email */}
    <div className="flex flex-col items-center">
      <img src="/gmail2.png" alt="Email Icon" className="w-12 h-12 mb-2" />
      <p className="text-lg font-semibold text-white">Email</p>
      <p className="text-sm text-white">contact@gym.com</p>
    </div>

    {/* WhatsApp */}
    <div className="flex flex-col items-center">
      <img src="/whatsapp.png" alt="WhatsApp Icon" className="w-14 h-11 mb-2" />
      <p className="text-lg font-semibold text-white">WhatsApp</p>
      <p className="text-sm text-white">+263772716084 or +263775138485</p>
    </div>

    {/* Call */}
    <div className="flex flex-col items-center">
      <img src="/phone21.png" alt="Call Icon" className="w-12 h-12 mb-2" />
      <p className="text-lg font-semibold text-white">Call</p>
      <p className="text-sm text-white">+263772716084 or +263775138485</p>
    </div>
  </div>
</div>
      </section>

      


      
    </div>
  );
};

export default ContactPage;
