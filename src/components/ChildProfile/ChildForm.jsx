import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Circle, CircleDot, Upload, User } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storage } from "../../firebase";
import { AdmissionGoalsForm } from "./AdmissionGoalsForm";
import { BasicInfoForm } from "./BasicInfoForm";
import { BehavioralInfoForm } from "./BehavioralInfoForm";
import { DocumentUploadForm } from "./DocumentUploadForm";
import { MedicalInfoForm } from "./MedicalInfoForm";
import { TherapyHistoryForm } from "./TherapyHistoryForm";

export default function StaffSelection() {
  const parent = useSelector((state) => state.user);
  const [currentStep, setCurrentStep] = useState(1);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImagePreview(URL.createObjectURL(file));
    if (!file) return;
    const storageRef = ref(storage, `chidlProfiles/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error(error);
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        setImage(downloadUrl);
      }
    );
  };

  const handleSubmit = async () => {
    const basicInfo = JSON.parse(sessionStorage.getItem("basicInfo"));
    const medicalInfo = JSON.parse(sessionStorage.getItem("medicalInfo"));
    const behavioralInfo = JSON.parse(sessionStorage.getItem("behavioralInfo"));
    const therapyHistory = JSON.parse(sessionStorage.getItem("therapyHistory"));
    const admissionGoal = JSON.parse(sessionStorage.getItem("admissionGoal"));

    const formData = {
      basicInfo: { ...basicInfo },
      medicalInfo: { ...medicalInfo },
      behavioralInfo: { ...behavioralInfo },
      therapyHistory: { ...therapyHistory },
      admissionGoal: { ...admissionGoal },
      parentId: parent.userId,
      image: image,
    };
    console.log("alldetails,", formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_WEBSITE}/new-child`,
        formData
      );
      console.log("Form submitted successfully!", response.data);
      alert("Form submitted successfully!");
      navigate("/child-profile");
      sessionStorage.clear();
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const steps = [
    {
      id: 1,
      name: "Basic Info",
      isCompleted: currentStep > 1,
      isCurrent: currentStep === 1,
    },
    {
      id: 2,
      name: "Medical Info",
      isCompleted: currentStep > 2,
      isCurrent: currentStep === 2,
    },
    {
      id: 3,
      name: "Behavioral Info",
      isCompleted: currentStep > 3,
      isCurrent: currentStep === 3,
    },
    {
      id: 4,
      name: "Therapy History",
      isCompleted: currentStep > 4,
      isCurrent: currentStep === 4,
    },
    {
      id: 5,
      name: "Admission and Therapy Goals",
      isCompleted: currentStep > 5,
      isCurrent: currentStep === 5,
    },
    {
      id: 6,
      name: "Document Upload",
      isCompleted: currentStep > 6,
      isCurrent: currentStep === 6,
    },
  ];

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoForm onNext={handleNext} />;
      case 2:
        return <MedicalInfoForm onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <BehavioralInfoForm onNext={handleNext} onPrev={handlePrev} />;
      case 4:
        return <TherapyHistoryForm onNext={handleNext} onPrev={handlePrev} />;
      case 5:
        return <AdmissionGoalsForm onNext={handleNext} onPrev={handlePrev} />;
      case 6:
        return (
          <DocumentUploadForm onSubmit={handleSubmit} onPrev={handlePrev} />
        );
      default:
        return null;
    }
  };

  console.log("childImage", image);

  return (
    <div className="flex p-6 bg-gray-100 h-[750px] mt-23 mx-44">
      <div className="w-1/4 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 rounded-xl">
        <div className="mb-3">
          <h2 className="text-lg font-semibold mb-4">Children Details</h2>

          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg">
            <div className="relative mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-700 flex items-center justify-center">
                {imagePreview ? (
                  <img
                    src={imagePreview || "/placeholder.svg"}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-36 h-36 text-slate-400" />
                )}
              </div>
              <label
                htmlFor="profile-upload"
                className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer transition-colors duration-200"
              >
                <Upload className="w-4 h-4" />
              </label>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <h2 className="text-sm font-semibold text-white">
              Upload Child Picture
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          {/* Steps Section */}
          <div className="mb-10">
            <h3 className="text-sm font-semibold mb-4">Progress</h3>
            <div className="relative">
              <div className="absolute left-[11px] top-[24px] bottom-4 w-[2px] bg-gray-700" />
              <ul className="space-y-4 relative">
                {steps.map((step) => (
                  <li key={step.id} className="flex items-center gap-3">
                    {step.isCompleted || step.isCurrent ? (
                      <CircleDot className="w-6 h-6 text-green-400 bg-slate-900 rounded-full" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-600" />
                    )}
                    <span
                      className={`text-sm ${
                        step.isCurrent ? "text-green-400" : "text-gray-300"
                      }`}
                    >
                      {step.id}. {step.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Progress Section */}
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium">Progress</p>
              <p className="text-sm text-gray-400">
                {Math.round(((currentStep - 1) / steps.length) * 100)}% complete
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 ml-6">{renderForm()}</div>
    </div>
  );
}
