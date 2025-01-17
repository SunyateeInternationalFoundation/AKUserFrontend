import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChildDetailsPage = () => {
  const { id } = useParams();
  const [child, setChild] = useState(null);
  const [activeTab, setActiveTab] = useState("basic");
  useEffect(() => {
    const fetchChildDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_WEBSITE}/child-details/${id}`
        );
        setChild(response.data.data);
      } catch (err) {
        console.log("Error in fetch Child Details:", err);
      }
    };

    fetchChildDetails();
  }, [id]);
  console.log("child>>>>", child);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const TabButton = ({ id, label, icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeTab === id
          ? "bg-indigo-600 text-white shadow-lg"
          : "bg-white text-gray-600 hover:bg-indigo-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
  return (
    <div className="flex justify-center">
      <div className="w-screen mx-12 my-10 max-h-screen mb-20 bg-white rounded-xl shadow-sm overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-indigo-800">
              Child Details
            </h1>
            <div className="space-x-4">
              <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors duration-300">
                Print
              </button>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300">
                Update Details
              </button>
            </div>
          </div>

          <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
            <TabButton
              id="basic"
              label="Basic Info"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
            <TabButton
              id="contact"
              label="Contact"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              }
            />
            <TabButton
              id="medical"
              label="Medical"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
            <TabButton
              id="behavioral"
              label="Behavioral"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              }
            />
            <TabButton
              id="therapy"
              label="Therapy"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
          </div>

          <div className="bg-white rounded-xl p-6 shadow-inner">
            {activeTab === "basic" && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
                  Basic Information
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="text-lg font-medium">
                      {child?.basicInfo?.childFullName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="text-lg font-medium">
                      {formatDate(child?.basicInfo?.dateOfBirth)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="text-lg font-medium capitalize">
                      {child?.basicInfo?.gender}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Parent/Guardian</p>
                    <p className="text-lg font-medium">
                      {child?.basicInfo?.parentGuardianName}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
                  Contact Information
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-lg font-medium">
                      {child?.basicInfo?.address}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-medium">
                      {child?.basicInfo?.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <p className="text-lg font-medium">
                      {child?.basicInfo?.phoneNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Preferred Language</p>
                    <p className="text-lg font-medium capitalize">
                      {child?.basicInfo?.preferredLanguage}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "medical" && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
                  Medical Information
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Date of Diagnosis</p>
                    <p className="text-lg font-medium">
                      {formatDate(child?.medicalInfo?.dateOfDiagnosis)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Diagnosing Specialist
                    </p>
                    <p className="text-lg font-medium">
                      {child?.medicalInfo?.diagnosingSpecialist}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Allergies</p>
                    <p className="text-lg font-medium">
                      {child?.medicalInfo?.allergies}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Co-occurring Conditions
                    </p>
                    <p className="text-lg font-medium">
                      {child?.medicalInfo?.coOccurringConditions}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "behavioral" && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
                  Behavioral Information
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">
                      Communication Skills
                    </p>
                    <p className="text-lg font-medium">
                      {child?.behavioralInfo?.communicationSkills}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Social Interaction</p>
                    <p className="text-lg font-medium">
                      {child?.behavioralInfo?.socialInteraction}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Sensory Preferences</p>
                    <p className="text-lg font-medium">
                      {child?.behavioralInfo?.sensoryPreferences}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "therapy" && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
                  Therapy History & Goals
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Current Therapies</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {child?.therapyHistory?.aba && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          ABA Therapy
                        </span>
                      )}
                      {child?.therapyHistory?.speechTherapy && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          Speech Therapy
                        </span>
                      )}
                      {child?.therapyHistory?.occupationalTherapy && (
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                          Occupational Therapy
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">School Information</p>
                    <p className="text-lg font-medium">
                      {child?.therapyHistory?.schoolName} - Grade{" "}
                      {child?.therapyHistory?.gradeLevel}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Preferred Therapy Modalities
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {child?.extraDetails?.preferredTherapyModalities.map(
                        (therapy) => (
                          <span
                            key={therapy}
                            className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                          >
                            {therapy}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildDetailsPage;
