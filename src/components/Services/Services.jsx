import axios from "axios";
import React, { useEffect, useState } from "react";
import { FreeTrialModal } from "./FreeTrialModal";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_WEBSITE}/services`);
        if (res.data.success) {
          setServices(res.data.data);
        }
      } catch (err) {
        console.log("Error in Fetching services", err);
      }
    }
    fetchServices();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  // const services = [
  //   {
  //     _id: "6776797ae8df989a5ac2a371",
  //     name: "Speech Therapy",
  //     about: "Improves speech and communication skills.",
  //     price: 1500,
  //     sessions: 5,
  //   },
  //   {
  //     _id: "6776797ae8df989a5ac2a372",
  //     name: "Occupational Therapy",
  //     about: "Helps with daily living skills.",
  //     price: 1800,
  //     sessions: 5,
  //   },
  //   {
  //     _id: "6776797ae8df989a5ac2a373",
  //     name: "Behavior Therapy",
  //     about: "Addresses challenging behaviors.",
  //     price: 2200,
  //     sessions: 5,
  //   },
  //   {
  //     _id: "6776797ae8df989a5ac2a374",
  //     name: "Special Education",
  //     about: "Personalized education for special needs.",
  //     price: 2500,
  //     sessions: 5,
  //   },
  //   {
  //     _id: "6776797ae8df989a5ac2a370",
  //     name: "Autism Therapy",
  //     about: "Specialized therapy for children with autism.",
  //     price: 1000,
  //     sessions: 5,
  //   },
  // ];

  const handleFreeTrialClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">My Services</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Sort</span>
          <select className="border rounded p-1 text-sm">
            <option>Newly Added</option>
          </select>
          <button className="p-2 border rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                  Therapy
                </span>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="ml-1 text-sm">4.9</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.about}</p>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">₹ {service.price}</span>
                  <span className="text-sm text-gray-600 ml-2">
                    / {service.sessions} sessions
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50"
                  onClick={() => handleFreeTrialClick(service)}
                >
                  Free Trail
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50">
                  Book Session
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FreeTrialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </div>
  );
};

export default Services;
