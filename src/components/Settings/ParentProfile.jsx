import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const ParentProfile = () => {
  const parent = useSelector((state) => state.user);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });
  useEffect(() => {
    const fetchParentDetails = async () => {
      try {
        const parentDetails = await axios.get(
          `${import.meta.env.VITE_WEBSITE}/${parent.userId}`
        );
        if (parentDetails.data.success) {
          setUserData(parentDetails.data.data);
        }
      } catch (err) {
        console.log("Error in fetching parent Details", err);
      }
    };

    fetchParentDetails();
  }, []);

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_WEBSITE}/${parent.userId}`,
        userData
      );
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  console.log("parentDatails,", userData);
  return (
    <div className="max-w-screen max-w-screen mx-36 mt-36 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-1">Parent Profile</h2>
      <p className="text-gray-500 text-sm mb-6">
        Manage your account settings and profile information.
      </p>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Profile Picture
        </label>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <img
              src={
                userData.profilePicture ||
                "https://www.alansonsample.com/images/Alanson_Headshot.jpg"
              }
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex flex-row gap-2 ml-5">
              <label
                htmlFor="file-upload"
                className="flex cursor-pointer bg-[#3f3f46] text-sm text-white px-2 py-1 rounded text-center"
              >
                <IoCloudUploadOutline className="mr-1 mt-1" />{" "}
                <span>Upload </span>
              </label>
              <input
                id="file-upload"
                type="file"
                // onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => setUserData({ ...userData, profilePicture: "" })}
                className="bg-gray-100 text-black text-sm px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        {/* <p className="text-sm text-gray-500 mt-2">
            *Image size should be at least 320px big, and less than 500kb.
            Allowed files: .png and .jpg.
          </p> */}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            type="text"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            type="email"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            type="text"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address
          </label>
          <input
            name="address"
            value={userData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            type="text"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            City
          </label>
          <input
            name="city"
            value={userData.city}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            type="text"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Pincode
          </label>
          <input
            name="pincode"
            value={userData.pincode}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            type="text"
            disabled={!isEditing}
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        {isEditing ? (
          <>
            <button
              onClick={toggleEditMode}
              className="bg-gray-200 text-black px-4 py-2 rounded-md mr-4"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Save Changes
            </button>
          </>
        ) : (
          <button
            onClick={toggleEditMode}
            className="bg-black text-white px-6 py-2 rounded-md"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ParentProfile;
