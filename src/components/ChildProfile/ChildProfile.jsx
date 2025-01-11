import { PlusCircle } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ChildProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br min-h-screen p-4 sm:p-6 md:p-8">
      <div className="mx-auto">
        <div className="rounded-xl  overflow-hidden">
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <h1 className="text-3xl font-bold text-gray-800">Child Profile</h1>
            <button
              onClick={() => navigate("add-profile")}
              className="group flex items-center px-4 py-2 bg-black text-white font-medium text-sm rounded-lg hover:bg-[#334155] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
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
};

export default ChildProfile;
