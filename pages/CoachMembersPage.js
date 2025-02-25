import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";

const CoachMembersPage = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    const fetchPdfFiles = async () => {
      const storageRef = ref(storage, "New_Member_Forms");
      const result = await listAll(storageRef);
      const urls = await Promise.all(
        result.items.map(async (item) => {
          const downloadURL = await getDownloadURL(item);
          return { name: item.name, url: downloadURL };
        })
      );
      setPdfFiles(urls);
    };

    fetchPdfFiles();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-900 mb-4">
        Welcome, 
      </h1>
    <h1 className="text-4xl font-bold text-green-900 mb-4">
        Welcome, COACH CHRIS, to the Membership Forms Page
      </h1>
      <p className="text-lg text-green-900 mb-6">
        This is where you can view the list of submitted forms by members!
      </p>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-green-900 text-white">
              <th className="px-6 py-3 text-left">Form Name</th>
              <th className="px-6 py-3 text-left">Download</th>
            </tr>
          </thead>
          <tbody>
            {pdfFiles.length > 0 ? (
              pdfFiles.map((file, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-yellow-100">
                  <td className="px-6 py-4">{file.name}</td>
                  <td className="px-6 py-4">
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-900 font-semibold underline"
                    >
                      View PDF
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="px-6 py-4 text-center text-gray-500">
                  No submitted forms available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoachMembersPage;
