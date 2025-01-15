import axios from "axios";
import { Circle, CircleDot } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdmissionGoalsForm } from "./AdmissionGoalsForm";
import { BasicInfoForm } from "./BasicInfoForm";
import { BehavioralInfoForm } from "./BehavioralInfoForm";
import { DocumentUploadForm } from "./DocumentUploadForm";
import { MedicalInfoForm } from "./MedicalInfoForm";
import { TherapyHistoryForm } from "./TherapyHistoryForm";
export default function StaffSelection() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
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

  return (
    <div className="flex p-6 bg-gray-100 h-[750px] mt-23 mx-44">
      <div className="w-1/4 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 rounded-xl">
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Children Details</h2>
          <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images8.alphacoders.com/398/thumb-1920-398553.jpg"
                alt=""
              />
            </div>

            <div>
              <p className="font-medium">Kayathri</p>
              <div className="flex items-center gap-1 text-sm text-yellow-400">
                {/* <span>★</span>
                <span className="text-gray-300">4.9 (255 reviews)</span> */}
              </div>
            </div>
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
