import { animated, useTrail } from "@react-spring/web";
import axios from "axios";
import { Calendar, Phone, PlusCircle, User2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChildProfile = () => {
  const navigate = useNavigate();
  const parent = useSelector((state) => state.user);
  const [childProfiles, setChildProfiles] = useState([]);

  useEffect(() => {
    async function fetchingChildren() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_WEBSITE}/get-children/${parent.userId}`
        );
        console.log("res>>><<<<<", response);
        setChildProfiles(response.data.data);
      } catch (err) {
        console.error("Error in fetching children", err);
      }
    }
    fetchingChildren();
  }, [parent.userId]);

  const trail = useTrail(childProfiles.length, {
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 200,
  });

  return (
    <div className="bg-gray-50 max-h-screen p-4 sm:p-6 md:p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Child Profile</h1>
        <div className="flex items-center gap-4">
          <select className="px-4 py-2 border rounded-md bg-white">
            <option>Newly Added</option>
            <option>Alphabetical</option>
            <option>Age</option>
          </select>
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <button
              onClick={() => {
                sessionStorage.clear();
                navigate("add-profile");
              }}
              className="group flex items-center px-4 py-2 bg-black text-white font-medium text-sm rounded-lg hover:bg-[#334155] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
            >
              <PlusCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Add Child Profile
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="max-w-7xl mx-auto mt-10">
        <div className="space-y-4">
          {trail.map((style, index) => (
            <animated.div key={childProfiles[index]._id} style={style}>
              <div
                className="bg-white rounded-lg shadow-sm border cursor-pointer"
                onClick={() => {
                  navigate(`/child-details/${childProfiles[index]._id}`);
                }}
              >
                <div className="p-6 flex flex-col sm:flex-row gap-6">
                  <div className="relative w-full sm:w-48 h-48">
                    <img
                      src={
                        childProfiles[index].image ||
                        "https://cdn.create.vista.com/api/media/medium/674346484/stock-photo-pretty-cute-indian-girl-child-smiling-looking-camera-green-nature?token=" ||
                        "/placeholder.svg"
                      }
                      alt={childProfiles[index].basicInfo.childFullName}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between mb-4">
                      <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left space-x-5">
                        <h2 className="text-xl font-semibold mb-2">
                          {childProfiles[index].basicInfo.childFullName}
                        </h2>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <button
                          className="w-16 px-2 py-1 text-sm bg-[#fee2e2] text-[#9d174d] rounded-md mr-5"
                          onClick={(e) => {
                            e.stopPropagation();
                            sessionStorage.clear();
                            navigate(
                              `/update-child/${childProfiles[index]._id}`
                            );
                          }}
                        >
                          Update
                        </button>
                        {/* <button
                          className="px-2 py-1 text-sm bg-pink-100 text-pink-700 rounded-md"
                          onClick={() => {
                            navigate(
                              `/child-details/${childProfiles[index]._id}`
                            );
                          }}
                        >
                          View Details
                        </button> */}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center text-gray-600">
                        <User2 className="w-5 h-5 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Gender</p>
                          <p>{childProfiles[index].basicInfo.gender}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Date of Birth</p>
                          <p>{childProfiles[index].basicInfo.dateOfBirth}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-5 h-5 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Phone Number</p>
                          <p>{childProfiles[index].basicInfo.phoneNumber}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <User2 className="w-5 h-5 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Parent Name</p>
                          <p>
                            {childProfiles[index].basicInfo.parentGuardianName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </animated.div>
          ))}

          {childProfiles.length === 0 && (
            <div className="p-6 sm:p-8">
              <div className="text-gray-600 text-center py-8">
                No child profiles yet. Click the button above to add one!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChildProfile;
