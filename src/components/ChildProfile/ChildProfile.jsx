import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChildProfile = () => {
  const [children, setChildren] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchChildren();
  }, []);

  const fetchChildren = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_WEBSITE}/getChildren`);
      setChildren(res.data);
    } catch (error) {
      console.error("Error fetching children data:", error);
    }
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-xl shadow-lg bg-white overflow-hidden">
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold">Child Profiles</h1>
            <button
              onClick={() => navigate("add-profile")}
              className="group flex items-center px-5 py-3 bg-indigo-600 text-white font-medium text-sm rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <PlusCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Add Child Profile
            </button>
          </div>
          <div className="border-t border-gray-300"></div>
          <div className="p-6 sm:p-8">
            {children.length > 0 ? (
              <ul className="space-y-6">
                {children.map((child) => (
                  <li
                    key={child._id}
                    className="p-4 sm:p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 flex justify-between items-center"
                  >
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {child.basicInfo.childFullName || "Name Unavailable"}
                      </h2>
                      <p className="text-gray-600">
                        Age: {calculateAge(child.basicInfo.dateOfBirth)}
                      </p>
                      <p className="text-gray-600">
                        DOB: {child.basicInfo.dateOfBirth || "N/A"}
                      </p>
                      <p className="text-gray-600">
                        Gender: {child.basicInfo.gender || "N/A"}
                      </p>
                      <p className="text-gray-600">
                        Parent/Guardian:{" "}
                        {child.basicInfo.parentGuardianName || "N/A"}
                      </p>
                    </div>
                    <button
                      onClick={() => navigate("add-profile")}
                      className="ml-4 flex items-center px-4 py-2 bg-indigo-500 text-white font-medium text-sm rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                      <PlusCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Add Child
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-gray-600 text-center py-8">
                No child profiles yet. Click the button above to add one!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildProfile;
