import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTrail, animated } from "@react-spring/web";
import { FreeTrialModal } from "./FreeTrialModal";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

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

  const trail = useTrail(services.length, {
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 200, 
  });

  const handleFreeTrialClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Therapies</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trail.map((style, index) => (
          <animated.div
            key={services[index]._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            style={style} 
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                  Therapy
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {services[index].name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {services[index].about}
              </p>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">
                    ₹ {services[index].price}
                  </span>
                  <span className="text-sm text-gray-600 ml-2">
                    / {services[index].sessions} sessions
                  </span>
                </div>
              </div>

              <button
                className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50"
                onClick={() => handleFreeTrialClick(services[index])}
              >
                Book Therapy
              </button>
            </div>
          </animated.div>
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
