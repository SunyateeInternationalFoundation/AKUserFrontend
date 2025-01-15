import { PlusCircle } from "lucide-react";
import React from "react";
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
          <div className="border-t border-gray-200"></div>
          <div className="p-6 sm:p-8">
            {/* Placeholder for child profiles list */}
            <div className="text-gray-600 text-center py-8">
              No child profiles yet. Click the button above to add one!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
