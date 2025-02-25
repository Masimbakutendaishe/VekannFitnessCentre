import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {jsPDF} from "jspdf";



const MembershipPage = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    physicalAddress: "",
    postalAddress: "",
    telephone: "",
    cell: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    occupation: "",
    companyName: "",
    doctorName: "",
    doctorTel: "",
    nextOfKin: "",
    nextOfKinTel: "",
    bloodPressure: "",
    heartRate: "",
    weight: "",
    height: "",
    doctorApproval: "",
    training: "",
    medicalHistory: {},
    initials: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const generateAndUploadPDF = async () => {
    const doc = new jsPDF();
    doc.text("Membership Application Form", 20, 20);
    doc.text(`First Name: ${formData.firstName}`, 20, 30);
    doc.text(`Surname: ${formData.surname}`, 20, 40);
    doc.text(`Physical Address: ${formData.physicalAddress}`, 20, 50);
    doc.text(`Postal Address: ${formData.postalAddress}`, 20, 60);
    doc.text(`Telephone: ${formData.telephone}`, 20, 70);
    doc.text(`Cell: ${formData.cell}`, 20, 80);
    doc.text(`Date of Birth: ${formData.dateOfBirth}`, 20, 90);
    doc.text(`Gender: ${formData.gender}`, 20, 100);
    doc.text(`Email: ${formData.email}`, 20, 110);
    doc.text(`Occupation: ${formData.occupation}`, 20, 120);
    doc.text(`Company Name: ${formData.companyName}`, 20, 130);
    doc.text(`Doctor's Name: ${formData.doctorName}`, 20, 140);
    doc.text(`Doctor's Tel: ${formData.doctorTel}`, 20, 150);
    doc.text(`Next of Kin: ${formData.nextOfKin}`, 20, 160);
    doc.text(`Next of Kin Tel: ${formData.nextOfKinTel}`, 20, 170);
    doc.text(`Blood Pressure: ${formData.bloodPressure}`, 20, 180);
    doc.text(`Heart Rate: ${formData.heartRate}`, 20, 190);
    doc.text(`Weight: ${formData.weight}`, 20, 200);
    doc.text(`Height: ${formData.height}`, 20, 210);
    doc.text(`Doctor Approval: ${formData.doctorApproval}`, 20, 220);
    doc.text(`Training Option: ${formData.training}`, 20, 230);

    let yOffset = 240;
    Object.keys(formData.medicalHistory).forEach((key, index) => {
      doc.text(`Medical History ${index + 1}: ${formData.medicalHistory[key]}`, 20, yOffset);
      yOffset += 10;
    });

    doc.text(`Initials: ${formData.initials}`, 20, yOffset + 10);
    doc.text(`Date: ${formData.date}`, 20, yOffset + 20);

    const pdfBlob = new Blob([doc.output("blob")], { type: "application/pdf" });

    // Upload PDF to Firebase Storage
    const storageRef = ref(storage, `New_Member_Forms/${formData.firstName}_${formData.surname}.pdf`);
    const uploadTask = uploadBytesResumable(storageRef, pdfBlob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Upload failed:", error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        //console.log("File available at", downloadURL);
        alert("Form Submitted!");
        window.location.reload();
      }
    );
  };
  

  


  return (
    <div className="relative overflow-hidden">

         {/* Small Screen Section */}
<section className="sm:hidden  ">
<div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/pic9.JPG')" }}>
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
      src="/pic9.JPG"
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
          <form  onSubmit={(e) => { e.preventDefault(); generateAndUploadPDF(); }} className="bg-white p-6 shadow-lg shadow-green-900 z-30  rounded-lg">
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
            <input type="text" name="firstName" placeholder="First Name" className="p-2 border rounded w-full" onChange={handleChange} />
            <input type="text" name="surname"placeholder="Surname" className="p-2 border rounded w-full" onChange={handleChange}/>
            <input type="text" name="physicalAddress" placeholder="Physical Address" className="p-2 border rounded w-full" onChange={handleChange}/>
            <input type="text" name="postalAddress" placeholder="Postal Address" className="p-2 border rounded w-full" onChange={handleChange}/>
            <input type="tel" name="telepone" placeholder="Telephone" className="p-2 border rounded w-full" onChange={handleChange} />
            <input type="tel" name="cell" placeholder="Cell" className="p-2 border rounded w-full" onChange={handleChange}/>
            <input type="date" name="dateOfBirth" placeholder="Date of Birth" className="p-2 border rounded w-full" onChange={handleChange}/>
            <select className="p-2 border rounded w-full">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="email" name="email" placeholder="Email" className="p-2 border rounded w-full" onChange={handleChange}/>
            <input type="text" name="occupation" placeholder="Occupation" className="p-2 border rounded w-full" onChange={handleChange}/>
            <input type="text" name="companyName" placeholder="Company Name" className="p-2 border rounded w-full" onChange={handleChange} />
            <input type="text" name="doctorName" placeholder="Doctor's Name" className="p-2 border rounded w-full" onChange={handleChange}/>
            <input type="tel" name="doctorTel" placeholder="Doctor's Tel No." className="p-2 border rounded w-full" onChange={handleChange} />
            <input type="text" name="nextOfKin" placeholder="Next of Kin" className="p-2 border rounded w-full" onChange={handleChange}/>
            <input type="tel" name="nextOfKinTel" placeholder="Next of Kin Tel No." className="p-2 border rounded w-full" onChange={handleChange}/>
          </div>

            {/* Personal Medical Details and Information */}
            <h3 className="text-lg font-semibold text-green-900 mb-4">Personal Medical Details:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="text" name="bloodPressure" placeholder="Blood Pressure" className="p-2 border rounded w-full" onChange={handleChange}/>
              <input type="text" name="heartRate" placeholder="Heart Rate" className="p-2 border rounded w-full"   onChange={handleChange}/>
              <input type="text" name="weight" placeholder="Weight" className="p-2 border rounded w-full"      onChange={handleChange}/>
              <input type="text" name="height" placeholder="Height" className="p-2 border rounded w-full"  onChange={handleChange}/>
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
        <li>PLEASE NOTE: Membership monies are NOT REFUNDABLE. Credits will be given in cases of illness and/or injuries where exercise is forbidden. A physician's letter is. Prior notification in writing is also, if going away for periods exceeding 2 weeks.</li>
        <li>All members entering the gym are to have their membership cards with them at all times.</li>
        <li>The right of Admission is Reserved.</li>
        <li>Membership to VEKANN FITNESS CENTRE is not transferrable.</li>
      </ul>

      {/* Waiver */}
      <h3 className="text-lg font-semibold text-green-900 mb-4">WAIVER:</h3>
      <p className="text-sm text-green-900 mb-4">I acknowledge that I am aware of the possible risks in my taking part in an exercise programme and do not hold the VEKANN FITNESS CENTRE responsible in the event of any loss or injury. I declare to be in good health and free from any physical condition, which might render dangerous my attendance at VEKANN FITNESS CENTRE, save for any condition, which I record in writing on the Medical History Questionnaire at the time of admission.</p>
      <p className="text-sm text-green-900 mb-4">VEKANN FITNESS CENTRE reserves the right to cancel the membership of any person who does not adhere to the safety precautions, medical advice, and instructions as given by the staff.</p>

      {/* Initials and Signature */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input type="text" name="initials" placeholder="Initials" className="p-2 border rounded w-full" />
        <input type="date" name="date" placeholder="Date" className="p-2 border rounded w-full" />
      </div>

      {/* Closing Message */}
      <h3 className="text-lg font-semibold text-green-900 mb-4">The VEKANN FITNESS CENTRE Team welcomes you:</h3>
      <p className="text-sm text-green-900 mb-4">Please feel free to approach any member of the team at any time to ask for advice, criticize, complain, praise, etc. We are here to ensure your exercising is done in a pleasant and safe atmosphere. Many thanks, VEKANN FITNESS CENTRE Management.</p>

            <button type="submit" className="mt-4 p-3 bg-green-900 text-yellow-600 border-2 border-yellow-600 hover:bg-yellow-600 hover:text-green-900 transition-all duration-300">
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
