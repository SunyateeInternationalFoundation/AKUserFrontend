import { useState } from "react";

export function BasicInfoForm({ onNext }) {
  const [formData, setFormData] = useState({
    childFullName: "",
    dateOfBirth: "",
    gender: "",
    parentGuardianName: "",
    phoneNumber: "",
    email: "",
    address: "",
    preferredLanguage: "",
    primaryContactName: "",
    primaryRelationship: "",
    primaryPhone: "",
    secondaryContactName: "",
    secondaryRelationship: "",
    secondaryPhone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    sessionStorage.setItem("basicInfo", JSON.stringify(formData));
    onNext();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const basicInfo = JSON.parse(sessionStorage.getItem("basicInfo"));
  // setFormData(basicInfo);
  // console.log("basicInfo", basicInfo);
  return (
    <div className="w-full h-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Basic Information</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label
              htmlFor="childFullName"
              className="block text-sm font-medium text-gray-700"
            >
              Child's Full Name
            </label>
            <input
              type="text"
              id="childFullName"
              name="childFullName"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData?.childFullName || basicInfo?.childFullName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData?.dateOfBirth || basicInfo?.dateOfBirth}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData?.gender || basicInfo?.gender}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="parentGuardianName"
              className="block text-sm font-medium text-gray-700"
            >
              Parent/Guardian Name(s)
            </label>
            <input
              type="text"
              id="parentGuardianName"
              name="parentGuardianName"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={
                formData?.parentGuardianName || basicInfo?.parentGuardianName
              }
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.phoneNumber || basicInfo?.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.email || basicInfo?.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Home Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.address || basicInfo?.address}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="preferredLanguage"
                className="block text-sm font-medium text-gray-700"
              >
                Preferred Language(s) at Home
              </label>
              <input
                type="text"
                id="preferredLanguage"
                name="preferredLanguage"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={
                  formData?.preferredLanguage || basicInfo?.preferredLanguage
                }
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Emergency Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label
                htmlFor="primaryContactName"
                className="block text-sm font-medium text-gray-700"
              >
                Primary Contact Name
              </label>
              <input
                type="text"
                id="primaryContactName"
                name="primaryContactName"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={
                  formData?.primaryContactName || basicInfo?.primaryContactName
                }
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="primaryRelationship"
                className="block text-sm font-medium text-gray-700"
              >
                Relationship to Child
              </label>
              <input
                type="text"
                id="primaryRelationship"
                name="primaryRelationship"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={
                  formData?.primaryRelationship ||
                  basicInfo?.primaryRelationship
                }
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="primaryPhone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="primaryPhone"
                name="primaryPhone"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.primaryPhone || basicInfo?.primaryPhone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label
                htmlFor="secondaryContactName"
                className="block text-sm font-medium text-gray-700"
              >
                Secondary Contact Name (Optional)
              </label>
              <input
                type="text"
                id="secondaryContactName"
                name="secondaryContactName"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={
                  formData?.secondaryContactName ||
                  basicInfo?.secondaryContactName
                }
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="secondaryRelationship"
                className="block text-sm font-medium text-gray-700"
              >
                Relationship to Child
              </label>
              <input
                type="text"
                id="secondaryRelationship"
                name="secondaryRelationship"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={
                  formData?.secondaryRelationship ||
                  basicInfo?.secondaryRelationship
                }
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="secondaryPhone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="secondaryPhone"
                name="secondaryPhone"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.secondaryPhone || basicInfo?.secondaryPhone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
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
