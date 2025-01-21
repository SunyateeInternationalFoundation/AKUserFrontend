import axios from "axios";
import { Star } from "lucide-react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
export default function FeedbackModal({ isOpen, onClose, serviceDetails }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_WEBSITE}/parent-feedback`, {
        rating,
        review,
      });
    } catch (err) {
      console.log("Error in sending feedback:", err);
    }
    // console.log({ rating, review });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-[600px]">
        <div className="space-y-6">
          <div className="flex justify-between items-center px-6 pt-6">
            <h2 className="text-xl font-semibold">Write a Feedback</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoMdClose />
            </button>
          </div>
          <hr />
          <div className="flex items-center gap-5 px-6">
            <div className="h-12 w-12 rounded overflow-hidden">
              <img
                src={
                  serviceDetails?.serviceId?.image ||
                  "https://kidscarehomehealth.com/wp-content/uploads/2024/05/KCHH-Occupational-Therapist.jpg"
                }
                alt={serviceDetails?.serviceId?.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">
                {serviceDetails?.serviceId?.name}
              </h3>
              <p className="text-sm text-gray-500">
                {serviceDetails?.providerId?.name}
              </p>
            </div>
          </div>

          <div className="flex justify-between px-6">
            <label className="text-base text-gray-800 font-medium">
              Rate The Service
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`h-5 w-5 ${
                      star <= (hoveredRating || rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 px-6">
            <label className="text-sm font-medium">Write your Review</label>
            <textarea
              placeholder="Please write your review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full min-h-[100px] p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <hr className="" />
          <div className="flex justify-end gap-3 px-6 pb-6">
            <button
              onClick={onClose}
              className="px-4 py-1 border rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
