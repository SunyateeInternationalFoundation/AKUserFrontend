import { useState } from "react";

export function BehavioralInfoForm({ onNext, onPrev }) {
  const [formData, setFormData] = useState({
    communicationSkills: "",
    communicationDetails: "",
    socialInteraction: "",
    socialInteractionDetails: "",
    sensoryPreferences: "",
    sensoryDetails: "",
    repetitiveBehaviors: "",
    meltdownTriggers: "",
    calmingStrategies: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    sessionStorage.setItem("behavioralInfo", JSON.stringify(formData));
    onNext();
  };
  const behavioralInfo = JSON.parse(sessionStorage.getItem("behavioralInfo"));
  console.log("behavioralInfo", behavioralInfo);
  return (
    <div className="w-full h-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">
        Developmental and Behavioral Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Communication Skills</h3>
          <div className="space-y-2">
            <select
              name="communicationSkills"
              value={
                formData?.communicationSkills ||
                behavioralInfo?.communicationSkills
              }
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select communication type</option>
              <option value="Verbal">Verbal</option>
              <option value="Non-verbal">Non-verbal</option>
              <option value="Limited speech">Limited speech</option>
              <option value="Augmentative communication device">
                Augmentative communication device
              </option>
            </select>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="communicationDetails"
              className="block text-sm font-medium text-gray-700"
            >
              Communication Details
            </label>
            <textarea
              id="communicationDetails"
              name="communicationDetails"
              value={
                formData?.communicationDetails ||
                behavioralInfo?.communicationDetails
              }
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Social Interaction</h3>
          <div className="space-y-2">
            <select
              name="socialInteraction"
              value={
                formData?.socialInteraction || behavioralInfo?.socialInteraction
              }
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select social interaction type</option>
              <option value="Prefers solitary play">
                Prefers solitary play
              </option>
              <option value="Seeks interaction">Seeks interaction</option>
              <option value="Difficulty understanding social cues">
                Difficulty understanding social cues
              </option>
            </select>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="socialInteractionDetails"
              className="block text-sm font-medium text-gray-700"
            >
              Social Interaction Details
            </label>
            <textarea
              id="socialInteractionDetails"
              name="socialInteractionDetails"
              value={
                formData?.socialInteractionDetails ||
                behavioralInfo?.socialInteraction
              }
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            Sensory Preferences/Sensitivities
          </h3>
          <div className="space-y-2">
            <label
              htmlFor="sensoryPreferences"
              className="block text-sm font-medium text-gray-700"
            >
              Sensory Preferences
            </label>
            <input
              type="text"
              id="sensoryPreferences"
              name="sensoryPreferences"
              value={
                formData?.sensoryPreferences ||
                behavioralInfo?.sensoryPreferences
              }
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Sensitivity to sound, light, textures"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="sensoryDetails"
              className="block text-sm font-medium text-gray-700"
            >
              Sensory Details
            </label>
            <textarea
              id="sensoryDetails"
              name="sensoryDetails"
              value={formData?.sensoryDetails || behavioralInfo?.sensoryDetails}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Behavioral Traits</h3>
          <div className="space-y-2">
            <label
              htmlFor="repetitiveBehaviors"
              className="block text-sm font-medium text-gray-700"
            >
              Repetitive Behaviors
            </label>
            <input
              type="text"
              id="repetitiveBehaviors"
              name="repetitiveBehaviors"
              value={
                formData?.repetitiveBehaviors ||
                behavioralInfo?.repetitiveBehaviors
              }
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., hand-flapping, rocking"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="meltdownTriggers"
              className="block text-sm font-medium text-gray-700"
            >
              Triggers for Meltdowns
            </label>
            <input
              type="text"
              id="meltdownTriggers"
              name="meltdownTriggers"
              value={
                formData?.meltdownTriggers || behavioralInfo?.meltdownTriggers
              }
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="calmingStrategies"
              className="block text-sm font-medium text-gray-700"
            >
              Strategies that Help Calm
            </label>
            <input
              type="text"
              id="calmingStrategies"
              name="calmingStrategies"
              value={
                formData?.calmingStrategies || behavioralInfo?.calmingStrategies
              }
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
