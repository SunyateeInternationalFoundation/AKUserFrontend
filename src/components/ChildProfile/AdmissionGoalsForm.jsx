import { useState } from "react";

export function AdmissionGoalsForm({ onNext, onPrev }) {
  const [formData, setFormData] = useState({
    reasonForAdmission: "",
    communicationGoal: "",
    behavioralManagementGoal: "",
    academicSupportGoal: "",
    socialSkillsGoal: "",
    sensoryIntegrationGoal: "",
    preferredTherapyModalities: [],
    parentGuardianGoals: "",
    emergencyContactName: "",
    emergencyContactRelationship: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = e.target.checked;
      setFormData((prev) => ({
        ...prev,
        preferredTherapyModalities: checked
          ? [...prev.preferredTherapyModalities, value]
          : prev.preferredTherapyModalities.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    sessionStorage.setItem("admissionGoal", JSON.stringify(formData));
    onNext();
  };
  const admissionInfo = JSON.parse(sessionStorage.getItem("admissionGoal"));
  console.log("admissionDetails", admissionInfo);
  return (
    <div className="w-full h-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Admission and Therapy Goals</h2>
      <form onSubmit={handleSubmit} className="space-y-1">
        <div className="space-y-1">
          <label
            htmlFor="reasonForAdmission"
            className="block text-sm font-medium text-gray-700"
          >
            Reason for Admission
          </label>
          <textarea
            id="reasonForAdmission"
            name="reasonForAdmission"
            value={
              formData?.reasonForAdmission || admissionInfo?.reasonForAdmission
            }
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={2}
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Key Areas to Focus On</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label
                htmlFor="communicationGoal"
                className="block text-sm font-medium text-gray-700"
              >
                Communication
              </label>
              <input
                type="text"
                id="communicationGoal"
                name="communicationGoal"
                value={
                  formData?.communicationGoal ||
                  admissionInfo?.communicationGoal
                }
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="behavioralManagementGoal"
                className="block text-sm font-medium text-gray-700"
              >
                Behavioral Management
              </label>
              <input
                type="text"
                id="behavioralManagementGoal"
                name="behavioralManagementGoal"
                value={
                  formData?.behavioralManagementGoal ||
                  admissionInfo?.behavioralManagementGoal
                }
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="academicSupportGoal"
                className="block text-sm font-medium text-gray-700"
              >
                Academic Support
              </label>
              <input
                type="text"
                id="academicSupportGoal"
                name="academicSupportGoal"
                value={
                  formData?.academicSupportGoal ||
                  admissionInfo?.academicSupportGoal
                }
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="socialSkillsGoal"
                className="block text-sm font-medium text-gray-700"
              >
                Social Skills Development
              </label>
              <input
                type="text"
                id="socialSkillsGoal"
                name="socialSkillsGoal"
                value={
                  formData?.socialSkillsGoal || admissionInfo?.socialSkillsGoal
                }
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="sensoryIntegrationGoal"
                className="block text-sm font-medium text-gray-700"
              >
                Sensory Integration
              </label>
              <input
                type="text"
                id="sensoryIntegrationGoal"
                name="sensoryIntegrationGoal"
                value={
                  formData?.sensoryIntegrationGoal ||
                  admissionInfo?.sensoryIntegrationGoal
                }
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            Preferred Therapy Modalities
          </h3>
          <div className="space-y-1">
            <div className="flex flex-wrap gap-4">
              {[
                "ABA",
                "Speech Therapy",
                "Occupational Therapy",
                "Play Therapy",
                "Other",
              ].map((therapy) => (
                <label key={therapy} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="preferredTherapyModalities"
                    value={therapy}
                    checked={
                      (formData.preferredTherapyModalities || []).includes(
                        therapy
                      ) ||
                      (
                        admissionInfo?.preferredTherapyModalities || []
                      ).includes(therapy)
                    }
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {therapy}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-6">
          <label
            htmlFor="parentGuardianGoals"
            className="block text-sm font-medium text-gray-700"
          >
            Parent/Guardian Goals for the Child
          </label>
          <textarea
            id="parentGuardianGoals"
            name="parentGuardianGoals"
            value={
              formData?.parentGuardianGoals ||
              admissionInfo?.parentGuardianGoals
            }
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={2}
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onPrev}
            className="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-md hover:bg-[#d1d5db]"
          >
            Previous
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-[#334155] focus:outline-none"
          >
            Save and Proceed
          </button>
        </div>
      </form>
    </div>
  );
}
