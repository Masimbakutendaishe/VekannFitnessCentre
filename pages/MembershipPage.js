import Image from "next/image";
import Link from "next/link";
import React from "react";



const MembershipPage = () => {
  return (
    <div className="relative overflow-hidden">

         {/* Small Screen Section */}
<section className="sm:hidden  ">
<div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/pic9.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>

      </div>

  {/* Left Half - White Rectangle */}
  <div className=" bg-white flex flex-col justify-center items-center p-2 shadow-lg shadow-green-900 relative">
    <h2 className="text-center text-5xl font-bold text-green-900 mb-6">MEMBERSHIP</h2>
    <ul className="mt-2 text-left space-y-4 text-lg text-green-900">
      <li className="flex items-center"><span className="text-green-900 mr-2">✔</span> Cardio, weights, machines</li>
      <li className="flex items-center"><span className="text-green-900 mr-2">✔</span> Group fitness classes</li>
      <li className="flex items-center"><span className="text-green-900 mr-2">✔</span> Complimentary personal training assessment</li>
    </ul>
   </div>
   <div className=" bg-yellow-600 flex flex-col justify-center items-center p-2 shadow-lg shadow-green-900 relative">
   <h3 className="text-2xl font-bold text-green-900"> $40 / MONTH *</h3>
      <p className="text-green-900 font-bold text-2xl">NO COMMITMENT</p>
      <button
        type="submit"
        className="mt-4 font-semibold p-3 bg-green-900 text-yellow-600 border-2 border-yellow-600 hover:bg-yellow-600 hover:text-green-900 hover:border-green-900 transition-all duration-300"
      >
        JOIN NOW
      </button>
   </div>
    {/* Bottom Half - Orange Background (Pricing and Join Button) */}
    <div className="absolute bottom-0 left-0 w-full h-1/4 bg-yellow-600 flex flex-col justify-center items-center p-6">
      <h3 className="text-2xl font-bold text-green-900"> $40 / MONTH *</h3>
      <p className="text-green-900 font-bold text-2xl">NO COMMITMENT</p>
      <button
        type="submit"
        className="mt-4 font-semibold p-3 bg-green-900 text-yellow-600 border-2 border-yellow-600 hover:bg-yellow-600 hover:text-green-900 hover:border-green-900 transition-all duration-300"
      >
        JOIN NOW
      </button>
    </div>
  
</section>
<section className="hidden lg:flex h-screen">


  {/* Left Half - White Rectangle */}
  <div className="w-1/2 bg-white flex flex-col justify-center items-center p-2 shadow-lg shadow-green-900 relative">
    <h2 className="text-center text-7xl font-bold text-green-900 mb-6">MEMBERSHIP</h2>
    <ul className="mt-2 text-center space-y-4 text-lg text-green-900">
      <li className="flex items-center"><span className="text-green-900 mr-2">✔</span> Cardio, weights, machines</li>
      <li className="flex items-center"><span className="text-green-900 mr-2">✔</span> Group fitness classes</li>
      <li className="flex items-center"><span className="text-green-900 mr-2">✔</span> Complimentary personal training assessment</li>
    </ul>

    {/* Bottom Half - Orange Background (Pricing and Join Button) */}
    <div className="absolute bottom-0 left-0 w-full h-1/4 bg-yellow-600 flex flex-col justify-center items-center p-6">
      <h3 className="text-2xl font-bold text-green-900"> $40 / MONTH *</h3>
      <p className="text-green-900 font-bold text-2xl">NO COMMITMENT</p>
      <button
        type="submit"
        className="mt-4 font-semibold p-3 bg-green-900 text-yellow-600 border-2 border-yellow-600 hover:bg-yellow-600 hover:text-green-900 hover:border-green-900 transition-all duration-300"
      >
        JOIN NOW
      </button>
    </div>
  </div>

  {/* Right Half - Full Height Image */}
  <div className="w-1/2 h-full relative">
    <Image
      className="object-cover"
      src="/pic9.jpg"
      alt="Gym Image"
      layout="intrinsic"
      width={960} // Half of 1920px screen width
      height={1080}
    />
  </div>
</section>
    {/* Membership Application Form */}
    <section className="relative py-8 px-4 bg-white">
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-green-900 mb-6">MEMBERSHIP APPLICATION FORM</h2>
          <form className="bg-white p-6 shadow-lg shadow-green-900 z-30  rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-4">Select Training Options:</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              {["Sauna", "Spinning", "Aerobics Classes", "Circuit", "Free Weight Training"].map(option => (
                <label key={option} className="flex items-center space-x-2">
                  <input type="radio" name="training" value={option} className="form-radio text-yellow-600" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-green-900 mb-4">Personal Details:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="First Name" className="p-2 border rounded w-full" required />
            <input type="text" placeholder="Surname" className="p-2 border rounded w-full" required />
            <input type="text" placeholder="Physical Address" className="p-2 border rounded w-full" required />
            <input type="text" placeholder="Postal Address" className="p-2 border rounded w-full" required />
            <input type="tel" placeholder="Telephone" className="p-2 border rounded w-full" required />
            <input type="tel" placeholder="Cell" className="p-2 border rounded w-full" required />
            <input type="date" placeholder="Date of Birth" className="p-2 border rounded w-full" required />
            <select className="p-2 border rounded w-full" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="email" placeholder="Email" className="p-2 border rounded w-full" required />
            <input type="text" placeholder="Occupation" className="p-2 border rounded w-full" required />
            <input type="text" placeholder="Company Name" className="p-2 border rounded w-full" />
            <input type="text" placeholder="Doctor's Name" className="p-2 border rounded w-full" />
            <input type="tel" placeholder="Doctor's Tel No." className="p-2 border rounded w-full" />
            <input type="text" placeholder="Next of Kin" className="p-2 border rounded w-full" required />
            <input type="tel" placeholder="Next of Kin Tel No." className="p-2 border rounded w-full" required />
          </div>

            {/* Personal Medical Details and Information */}
            <h3 className="text-lg font-semibold text-green-900 mb-4">Personal Medical Details:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Blood Pressure" className="p-2 border rounded w-full" required />
              <input type="text" placeholder="Heart Rate" className="p-2 border rounded w-full" required />
              <input type="text" placeholder="Weight" className="p-2 border rounded w-full" required />
              <input type="text" placeholder="Height" className="p-2 border rounded w-full" required />
            </div>
            <p className="text-sm text-green-900">Does your doctor know you are participating in an exercise program?</p>
            <div className="flex space-x-4 mb-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="doctorApproval" value="Yes" className="form-radio text-yellow-600" />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="doctorApproval" value="No" className="form-radio text-yellow-600" />
                <span>No</span>
              </label>
            </div>

            {/* Medical History */}
            <h3 className="text-lg font-semibold text-green-900 mb-4">Medical History:</h3>
            {[
              "A history of heart problems, chest pains or stroke",
              "A family history of heart problems, chest pain, or stroke",
              "Increased blood pressure",
              "Any chronic illness or condition",
              "Orders from your doctor NOT to exercise",
              "Any surgery in the last twelve (12) months",
              "History of breathing or lung problems, e.g. asthma/emphysema",
              "Any injury of/ or muscle joint or back disorders still affecting you",
              "Arthritis, rheumatism, gout",
              "Diabetes or Thyroid problems",
              "Do you smoke?",
              "Increased cholesterol",
              "Obesity (more than 20% over ideal body weight)",
              "Hernia or any other condition that may be aggravated by lifting weights",
              "Are you on medication? If so what?",
              "Are you allergic to any medication?"
            ].map((question, index) => (
              <div key={index} className="mb-2">
                <p className="text-left text-sm text-green-900">{question}</p>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name={`medical-${index}`} value="Yes" className="form-radio text-yellow-600" />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name={`medical-${index}`} value="No" className="form-radio text-yellow-600" />
                    <span>No</span>
                  </label>
                </div>
              </div>
            ))}
            {/* Terms and Conditions */}
      <h3 className="text-lg font-semibold text-green-900 mb-4">Terms and Conditions:</h3>
      <ul className="text-left text-sm text-green-900 mb-4 list-disc pl-6">
        <li>All members pay a nominal joining fee.</li>
        <li>Corporate clients are members who join as an entity and will have a minimum of 3 members.</li>
        <li>Fees must be paid on or before due date.</li>
        <li>All students are to produce a valid and current student card.</li>
        <li>PLEASE NOTE: Membership monies are NOT REFUNDABLE. Credits will be given in cases of illness and/or injuries where exercise is forbidden. A physician's letter is required. Prior notification in writing is also required, if going away for periods exceeding 2 weeks.</li>
        <li>All members entering the gym are required to have their membership cards with them at all times.</li>
        <li>The right of Admission is Reserved.</li>
        <li>Membership to VEKANN FITNESS CENTRE is not transferrable.</li>
      </ul>

      {/* Waiver */}
      <h3 className="text-lg font-semibold text-green-900 mb-4">WAIVER:</h3>
      <p className="text-sm text-green-900 mb-4">I acknowledge that I am aware of the possible risks in my taking part in an exercise programme and do not hold the VEKANN FITNESS CENTRE responsible in the event of any loss or injury. I declare to be in good health and free from any physical condition, which might render dangerous my attendance at VEKANN FITNESS CENTRE, save for any condition, which I record in writing on the Medical History Questionnaire at the time of admission.</p>
      <p className="text-sm text-green-900 mb-4">VEKANN FITNESS CENTRE reserves the right to cancel the membership of any person who does not adhere to the safety precautions, medical advice, and instructions as given by the staff.</p>

      {/* Initials and Signature */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="Initials" className="p-2 border rounded w-full" required />
        <input type="date" placeholder="Date" className="p-2 border rounded w-full" required />
      </div>

      {/* Closing Message */}
      <h3 className="text-lg font-semibold text-green-900 mb-4">The VEKANN FITNESS CENTRE Team welcomes you:</h3>
      <p className="text-sm text-green-900 mb-4">Please feel free to approach any member of the team at any time to ask for advice, criticize, complain, praise, etc. We are here to ensure your exercising is done in a pleasant and safe atmosphere. Many thanks, VEKANN FITNESS CENTRE Management.</p>

            <button className="mt-4 p-3 bg-green-900 text-yellow-600 border-2 border-yellow-600 hover:bg-yellow-600 hover:text-green-900 transition-all duration-300">
              Submit Application
            </button>
          </form>
        </div>
      </section>


      {/* Schedule a Visit Section */}
      <section
        className="relative py-8 px-4  bg-yellow-600"

      >
        <div className="absolute inset-0 bg-yellow-600 bg-opacity-90"></div>
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-green-900 mb-6">CONTACT US</h2>
          <p className="text-green-900 text-sm sm:text-lg font-extralight mb-6">
          To see more details of when you will be charged the full annual fee, see the Terms & Conditions for the gym or inquire at the front desk.
          </p>

 
            <div>
              <button
                type="submit"
                className="font-semibold p-3 bg-green-900 text-yellow-600 border-2 border-yellow-600 hover:bg-yellow-600 hover:text-green-900 hover:border-green-900 transition-all duration-300"
              >
               CONTACT US
              </button>
            </div>
        
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
