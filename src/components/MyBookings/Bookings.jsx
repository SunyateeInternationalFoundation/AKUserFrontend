import axios from "axios";
import { Calendar, Filter, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Bookings() {
  const parent = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [rating, setRating] = useState({});
  const [hoveredRating, setHoveredRating] = useState({});
  const [reviews, setReviews] = useState({});
  const [filter , setFilter] = useState("All");
const [sortOrder, setSortOrder] = useState("Newest")
  useEffect(() => {
    async function fetchingBookingList() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_WEBSITE}/bookings/${parent.userId}`
        );

        if (response.data.success) {
          setBookings(response.data.data);
        }
      } catch (err) {
        console.log("Error in fetching booking list", err);
      }
    }
    fetchingBookingList();
  }, [parent.userId]);

  const handleFeedbackSubmit = async (
    serviceId,
    providerId,
    parentId,
    childId,
    bookingId
  ) => {
    try {
      await axios.post(`${import.meta.env.VITE_WEBSITE}/providers-feedback`, {
        rating: rating[bookingId],
        review: reviews[bookingId],
        serviceId,
        providerId,
        parentId,
        childId,
        bookingId,
      });
    } catch (err) {
      console.log("Error in sending feedback:", err);
    }
  };
  const handleReviewChange = (bookingId, value) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [bookingId]: value,
    }));
  };
  const handleRatingChange = (bookingId, value) => {
    setRating((prevRating) => ({
      ...prevRating,
      [bookingId]: value,
    }));
  };
  const handleHoverRating = (bookingId, value) => {
    setHoveredRating((prevRating) => ({
      ...prevRating,
      [bookingId]: value,
    }));
  };

  const fileredBooking =  filter === "All" ? bookings : bookings.filter((booking) => booking.status === filter)
  const sortedBooking = [...fileredBooking].sort((a,b)=>{
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
  })
  console.log("bookinlist", bookings);
  return (
    <div className="p-8 bg-gray-50 max-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Booking List</h1>
      </div>
      <div className="flex gap-4 mb-6">
        <div className="flex gap-4 flex-1">
        {["All", "On Going", "Completed", "Cancelled"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-full border ${
              filter === status
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {status}
          </button>
        ))}
        </div>

        <div className="flex items-center gap-4 justify-end">
          <div className="flex items-center gap-2 ">
            <span className="text-sm">Sort</span>
            <select className="px-3 py-2 border rounded-md bg-white text-sm"
            value={sortOrder}
            onChange={(e)=> setSortOrder(e.target.value)}
            >
              <option>Newest</option>
              <option>Oldest First</option>
            </select>
          </div>
          <button className="p-2 border rounded-md hover:bg-gray-50">
            <Calendar className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-6 h-[calc(100vh-200px)] overflow-y-auto" >
        {sortedBooking.map((booking) => (
          <div
            key={booking?._id}
            className="bg-white p-6 rounded-lg cursor-pointer "
            onClick={() => {
              navigate(`${booking?._id}`);
            }}
          >
            <div className="flex gap-6">
              <img
                src={
                  booking?.image ||
                  "https://www.indiaautismcenter.org/wp-content/uploads/woman-two-children-playing-with-wooden-toy-1.webp"
                }
                alt={booking?.service}
                className="w-48 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-semibold">
                        {booking?.service}
                      </h3>
                      <span
                        className={`px-3 py-1 bg-${
                          booking.status === "On Going"
                            ? "blue-100"
                            : booking.status === "Cancelled"
                            ? "red-100"
                            : "green-100"
                        } text-${
                          booking.status === "On Going"
                            ? "blue-600"
                            : booking.status === "Cancelled"
                            ? "red-600"
                            : "green-600"
                        } rounded-full text-sm`}
                      >
                        {booking?.status}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          booking?.accepted
                            ? "bg-purple-100 text-purple-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {booking?.accepted ? "Accepted" : "Pending"}
                      </span>
                    </div>
                    <dl className="grid gap-y-2">
                      <div className="flex gap-x-4">
                        <dt className="text-gray-500">Booking Date :</dt>
                        <dd>
                          {booking?.date}
                          {"  "} {booking?.time}
                        </dd>
                      </div>
                      <div className="flex gap-x-4">
                        <dt className="text-gray-500">Amount :</dt>
                        <dd>
                          ₹{booking?.serviceId?.price.toFixed(2)}
                          <span className="text-xs text-pink-500 ml-1">
                            {booking?.paymentMethod}
                          </span>
                        </dd>
                      </div>
                      <div className="flex gap-x-4">
                        <dt className="text-gray-500">Service :</dt>
                        <dd>{booking?.serviceId?.name}</dd>
                      </div>
                      <div className="flex gap-x-4">
                        <dt className="text-gray-500">Child:</dt>
                        <dd>{booking?.childId?.basicInfo?.childFullName}</dd>
                      </div>
                      <div className="flex gap-x-4">
                        <dt className="text-gray-500">Provider :</dt>
                        <dd className="flex items-center gap-2">
                          <img
                            src={
                              booking?.provider?.image ||
                              "https://images8.alphacoders.com/398/thumb-1920-398553.jpg"
                            }
                            alt={booking?.providerId?.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span>{booking?.providerId?.name}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-500">
                            {booking?.providerId?.email}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-500">
                            {booking?.providerId?.phone}
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="flex gap-2">
                    {booking?.status === "Cancelled" && (
                      <button className="px-4 py-2 border rounded-md hover:bg-gray-50 text-sm">
                        Reschedule
                      </button>
                    )}
                    {booking?.status === "Completed" && (
                      <>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                          Rebook
                        </button>
                        <button className="px-4 py-2 border rounded-md hover:bg-gray-50 text-sm">
                          Add Review
                        </button>
                      </>
                    )}
                    {booking?.status === "On Going" && (
                      <>
                        {booking.accepted && (
                          <div
                            className="flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="space-y-2 px-6">
                              <label className="text-sm font-medium">
                                Write your Review
                              </label>
                              <textarea
                                placeholder="Please write your review"
                                value={reviews[booking._id]}
                                onChange={(e) =>
                                  handleReviewChange(
                                    booking._id,
                                    e.target.value
                                  )
                                }
                                className="w-full min-h-[100px] p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                            <div className="space-y-2 px-6">
                              <label className="text-base text-gray-800 font-medium">
                                Rate The Service
                              </label>
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <button
                                    key={star}
                                    type="button"
                                    onClick={() =>
                                      handleRatingChange(booking._id, star)
                                    }
                                    onMouseEnter={() =>
                                      handleHoverRating(booking._id, star)
                                    }
                                    onMouseLeave={() => setHoveredRating(0)}
                                    className="focus:outline-none"
                                  >
                                    <Star
                                      className={`h-5 w-5 ${
                                        star <=
                                        (hoveredRating[booking._id] ||
                                          rating[booking._id])
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  </button>
                                ))}
                              </div>
                            </div>
                            <button
                              className="self-end px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                              onClick={() => {
                                handleFeedbackSubmit(
                                  booking.serviceId._id,
                                  booking.providerId._id,
                                  parent.userId,
                                  booking.childId._id,
                                  booking._id
                                );
                              }}
                            >
                              Submit Review
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
          {sortedBooking.length === 0 && 
          <div className="p-6 md:p-8">
            <div className="text-gray-600 text-center py-8">
              No bookings found.
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}
