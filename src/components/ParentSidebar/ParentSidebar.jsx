import axios from "axios";
import {
  Calendar,
  ChevronDown,
  Heart,
  LayoutDashboard,
  LogOut,
  Settings,
  Star,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setUserLogout } from "../../store/UserSlice";
const ParentSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const parent = useSelector((state) => state.user);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [userData, setUserData] = useState(null);
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
  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard",
    },
    { icon: User, label: "Child Profile", path: "/child-profile" },
    { icon: Calendar, label: "On Going Therapies", path: "/bookings" },

    { icon: Heart, label: "Book Therapies", path: "/therapies" },

    { icon: Star, label: "Feedback", path: "/feedback" },
  ];

  const settingsSubItems = [
    { label: "Parent Profile", path: "/settings/parent-profile" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleLogout = () => {
    dispatch(setUserLogout());
    window.location.href = "/";
  };
  return (
    <div className="container w-72 border-r bg-white flex flex-col h-screen">
      <div className="p-6 border-b">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kTstdaAJo1au7YPJ3WanZtLIdM6NFA.png"
              alt="Profile"
              className="rounded-full w-full h-full object-cover border-2 border-gray-100"
            />
          </div>
          <h2 className="text-lg font-semibold">{userData?.name}</h2>
          {/* <p className="text-sm text-gray-500">Customer Since Sep 2024</p> */}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                className={`w-full flex items-center gap-3 px-5 py-3 rounded-lg text-lg hover:text-blue-600 ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary font-medium text-blue-600 bg-gray-100"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                <item.icon className="w-6 h-6" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}

          <li>
            <button
              className="w-full flex items-center gap-3 px-5 py-3 rounded-lg text-gray-600 text-lg hover:text-blue-600"
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            >
              <Settings className="w-6 h-6" />
              <span>Settings</span>
              <ChevronDown
                className={`ml-auto h-4 w-4 transition-transform duration-200 ${
                  isSettingsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isSettingsOpen && (
              <ul className="mt-1 ml-4 space-y-1">
                {settingsSubItems.map((item) => (
                  <li key={item.label}>
                    <button
                      className={`w-full flex items-center gap-3 px-5 py-3 rounded-lg text-lg hover:text-blue-600 ${
                        location.pathname === item.path
                          ? "bg-primary/10 text-primary font-medium text-blue-600 bg-gray-100"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                      onClick={() => handleNavigation(item.path)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="border-t p-4">
        <button
          className="w-full flex items-center gap-3 px-5 py-3 rounded-lg text-lg text-red-500 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="w-6 h-6" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ParentSidebar;
