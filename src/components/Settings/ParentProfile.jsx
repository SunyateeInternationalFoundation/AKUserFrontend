import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader, User } from "lucide-react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

const ParentProfile = () => {
  const parent = useSelector((state) => state.user);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    image: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

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
        console.log("Error in fetching parent details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchParentDetails();
  }, [parent.userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileRef = ref(storage, `profilePicParents/${parent.userId}/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    setUploading(true);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is", progress, "% done");
      },
      (error) => {
        console.error("Upload error:", error);
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setUserData((prevState) => ({
          ...prevState,
          image: downloadURL,
        }));
        setUploading(false);
      }
    );
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

  if (loading) {
    return <div className="spinner">Loading...</div>; // Replace with a styled spinner/loader
  }

  return (
    <div className="max-w-screen mx-36 mt-36 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-1">Parent Profile</h2>
      <p className="text-gray-500 text-sm mb-6">
        Manage your account settings and profile information.
      </p>

      <div className="relative mb-4">
  <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-700 flex items-center justify-center">
    {uploading ? (
      <Loader className="w-8 h-8 text-blue-500 animate-spin" /> 
    ) : userData.image ? (
      <img
        src={userData.image}
        alt="Profile Preview"
        className="w-full h-full object-cover"
      />
    ) : (
      <User className="w-8 h-8 text-slate-400" /> 
    )}
  </div>
  {isEditing && (
    <div className="flex flex-row gap-2 mt-2">
      <label
        htmlFor="file-upload"
        className="flex cursor-pointer bg-[#3f3f46] text-sm text-white px-2 py-1 rounded"
      >
        <IoCloudUploadOutline className="mr-1 mt-1" /> <span>Upload</span>
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileUpload}
        className="hidden"
      />
      <button
        onClick={() => setUserData({ ...userData, image: "" })}
        className="bg-gray-100 text-black text-sm px-2 py-1 rounded"
      >
        Remove
      </button>
    </div>
  )}
</div>


      <div className="grid grid-cols-2 gap-6">
        {/* Render form fields */}
        {["name", "email", "phone", "address", "city", "pincode"].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              name={field}
              value={userData[field]}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              type={field === "email" ? "email" : "text"}
              disabled={!isEditing}
            />
          </div>
        ))}
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
