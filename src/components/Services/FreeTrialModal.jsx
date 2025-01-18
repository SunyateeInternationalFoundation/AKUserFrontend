import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const FreeTrialModal = ({ isOpen, onClose, service }) => {
  const parent = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selectedChild, setSelectedChild] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [children, setChildren] = useState([]);
  const [providers, setProviders] = useState([]);
  //   const children = [
  //     {
  //       id: 1,
  //       name: "John Doe",
  //       image:
  //         "https://media.istockphoto.com/id/1279844456/photo/young-indian-business-woman-entrepreneur-looking-at-camera-in-the-office.jpg?s=2048x2048&w=is&k=20&c=HFSZlaDFEoUKkGgTVduvYumtJoX2vev6FkGd-jscLUo=",
  //     },
  //     {
  //       id: 2,
  //       name: "Jane Doe",
  //       image:
  //         "https://media.istockphoto.com/id/1279844456/photo/young-indian-business-woman-entrepreneur-looking-at-camera-in-the-office.jpg?s=2048x2048&w=is&k=20&c=HFSZlaDFEoUKkGgTVduvYumtJoX2vev6FkGd-jscLUo=",
  //     },
  //   ];

  //   const providers = [
  //     {
  //       id: 1,
  //       name: "Dr. Smith",
  //       image:
  //         "https://media.istockphoto.com/id/1279844456/photo/young-indian-business-woman-entrepreneur-looking-at-camera-in-the-office.jpg?s=2048x2048&w=is&k=20&c=HFSZlaDFEoUKkGgTVduvYumtJoX2vev6FkGd-jscLUo=",
  //     },
  //     {
  //       id: 2,
  //       name: "Dr. Johnson",
  //       image:
  //         "https://media.istockphoto.com/id/1279844456/photo/young-indian-business-woman-entrepreneur-looking-at-camera-in-the-office.jpg?s=2048x2048&w=is&k=20&c=HFSZlaDFEoUKkGgTVduvYumtJoX2vev6FkGd-jscLUo=",
  //     },
  //   ];
  console.log("serivice", service);
  useEffect(() => {
    if (isOpen) {
      axios
        .get(`${import.meta.env.VITE_WEBSITE}/get-children/${parent.userId}`)
        .then((response) => {
          console.log("res>>><<<<<", response);
          setChildren(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching children:", error);
        });

      axios
        .get(`${import.meta.env.VITE_WEBSITE}/getProviders/${service._id}`)
        .then((response) => {
          console.log("res>>>", response);
          setProviders(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching providers:", error);
        });
    }
  }, [isOpen]);
  const dates = [
    "2025-01-17",
    "2025-01-18",
    "2025-01-19",
    "2025-01-20",
    "2025-01-21",
  ];

  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_WEBSITE}/payment`,
        {
          params: {
            childId: selectedChild._id,
            parentId: parent.userId,
            serviceAmount: service.price,
          },
        }
      );

      console.log(response);
      var options = {
        key: response.data.key_id,
        order_id: response.data.order.id,

        handler: async function (response) {
          console.log(response);
          const res = await axios.post(
            `${import.meta.env.VITE_WEBSITE}/payment`,

            {
              order_id: options.order_id,
              payment_id: response.razorpay_payment_id,
            },
            {
              params: {
                childId: selectedChild._id,
                parentId: parent.userId,
              },
            }
          );
          alert(
            "Payment Successful! Your transaction has been completed successfully."
          );
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      e.preventDefault();

      paymentObject.on("payment.failed", function (response) {
        console.log(response);
        alert("Something went wrong");
      });
    } catch (err) {
      console.log("Error In Payment Section:", err);
    }
    // try {

    //   const response = await axios.post(
    //     `${import.meta.env.VITE_WEBSITE}/booking-trail`,
    //     {
    //       serviceId: service._id,
    //       child: selectedChild,
    //       provider: selectedProvider,
    //       date: selectedDate,
    //       time: selectedTime,
    //       parentId: parent.userId,
    //     }
    //   );
    //   if (response.data.success) {
    //     navigate("/bookings");
    //   }
    //   console.log("Free Trial Booked", {
    //     service,
    //     child: selectedChild,
    //     provider: selectedProvider,
    //     date: selectedDate,
    //     time: selectedTime,
    //   });
    //   onClose();
    // } catch (err) {
    //   console.log("Error in submitting data", err);
    // }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h4 className="text-lg font-semibold mb-4">Select a Child</h4>
            <div className="space-y-4">
              {children.map((child) => (
                <div
                  key={child._id}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                    selectedChild?._id === child._id
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedChild(child)}
                >
                  <img
                    src={
                      child.image ||
                      "https://media.istockphoto.com/id/1279844456/photo/young-indian-business-woman-entrepreneur-looking-at-camera-in-the-office.jpg?s=2048x2048&w=is&k=20&c=HFSZlaDFEoUKkGgTVduvYumtJoX2vev6FkGd-jscLUo="
                    }
                    alt={child?.basicInfo?.childFullName}
                    width={50}
                    className="rounded-full mr-4"
                  />
                  <span>{child?.basicInfo?.childFullName}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Select a Service Provider
            </h4>
            <div className="space-y-4">
              {providers.map((provider) => (
                <div
                  key={provider._id}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                    selectedProvider?._id === provider._id
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedProvider(provider)}
                >
                  <img
                    src={
                      provider.image ||
                      "https://media.istockphoto.com/id/1279844456/photo/young-indian-business-woman-entrepreneur-looking-at-camera-in-the-office.jpg?s=2048x2048&w=is&k=20&c=HFSZlaDFEoUKkGgTVduvYumtJoX2vev6FkGd-jscLUo="
                    }
                    alt={provider.name}
                    width={50}
                    className="rounded-full mr-4"
                  />
                  <span>{provider.name}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h4 className="text-lg font-semibold mb-4">Select a Date</h4>
            <div className="grid grid-cols-3 gap-4">
              {dates.map((date) => (
                <button
                  key={date}
                  className={`p-2 border rounded ${
                    selectedDate === date ? "bg-black text-white" : "bg-white"
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  {new Date(date).toLocaleDateString()}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h4 className="text-lg font-semibold mb-4">Select a Time</h4>
            <div className="grid grid-cols-3 gap-4">
              {times.map((time) => (
                <button
                  key={time}
                  className={`p-2 border rounded ${
                    selectedTime === time ? "bg-black text-white" : "bg-white"
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h4 className="text-lg font-semibold mb-4">Confirm and Pay</h4>
            <p>Please review your booking details and proceed to payment.</p>
            <div className="mt-4">
              <p>
                <strong>Child:</strong> {selectedChild?.basicInfo.childFullName}
              </p>
              <p>
                <strong>Provider:</strong> {selectedProvider?.name}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(selectedDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {selectedTime}
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            Book Free Trial - {service?.name}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4">{renderStep()}</div>
        <div className="flex justify-between mt-16">
          {step > 0 && (
            <button
              onClick={handleBack}
              className="bg-gray-200 text-black px-4 py-2 rounded-md mr-4"
            >
              Back
            </button>
          )}
          <div className="flex-grow"></div>
          {step < 3 ? (
            <button
              onClick={handleNext}
              className={`bg-[#0891b2] text-white px-4 py-2 rounded-md`}
            >
              Next
            </button>
          ) : step === 3 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-[#0d9488] text-white rounded"
            >
              Review and Pay
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-[#0d9488] text-white rounded"
            >
              Pay Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
