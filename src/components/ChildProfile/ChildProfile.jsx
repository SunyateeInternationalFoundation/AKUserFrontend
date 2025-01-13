import { Calendar, Phone, PlusCircle, User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const childProfiles = [
  {
    image:
      "https://img.freepik.com/free-psd/young-child-isolated_23-2151196479.jpg?t=st=1736760894~exp=1736764494~hmac=e09b665f6cb39139b252d7500cd4ce9f933536e84f3bdd4e0981bf31291bae18&w=826",
    name: "Sarah Johnson",
    service: "Autism Therapy",
    age: 8,
    gender: "Female",
    phoneNumber: "1234567890",
    dateOfBirth: "2015-05-15",
    parentName: "Michael Johnson",
  },
  {
    image:
      "https://img.freepik.com/free-psd/young-child-isolated_23-2151196479.jpg?t=st=1736760894~exp=1736764494~hmac=e09b665f6cb39139b252d7500cd4ce9f933536e84f3bdd4e0981bf31291bae18&w=826",
    name: "James Wilson",
    service: "Speech Therapy",
    age: 10,
    gender: "Male",
    phoneNumber: "9876543210",
    dateOfBirth: "2013-08-22",
    parentName: "Emma Wilson",
  },
];

export default function ChildProfile() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 md:p-8">
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
              onClick={() => navigate("add-profile")}
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
          {childProfiles.map((profile, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 flex flex-col sm:flex-row gap-6">
                <div className="relative w-full sm:w-48 h-48">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row justify-between mb-4">
                    <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left space-x-5">
                      <h2 className="text-xl font-semibold mb-2">
                        {profile.name}
                      </h2>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm text-center">
                        {profile.service}
                      </span>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <button className="w-16 px-2 py-1 text-sm bg-[#fee2e2] text-[#9d174d] rounded-md mr-5">
                        Update
                      </button>
                      <button className="px-2 py-1 text-sm bg-pink-100 text-pink-700 rounded-md">
                        View Details
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-600">
                      <User2 className="w-5 h-5 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Gender</p>
                        <p>{profile.gender}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Date of Birth</p>
                        <p>{profile.dateOfBirth}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Phone Number</p>
                        <p>{profile.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <User2 className="w-5 h-5 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Parent Name</p>
                        <p>{profile.parentName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {childProfiles.length === 0 && (
            <div className="p-6 sm:p-8">
              {" "}
              {/* Placeholder for child profiles list */}{" "}
              <div className="text-gray-600 text-center py-8">
                {" "}
                No child profiles yet. Click the button above to add one!{" "}
              </div>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
