import axios from "axios";
import { Calendar, Filter } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// const bookings = [
//   {
//     id: 1,
//     service: "Autism Therapy",
//     status: "Cancelled",
//     statusColor: "red",
//     date: "27 Sep, 17:00-18:00",
//     amount: 100.0,
//     paymentMethod: "Gpay",
//     location: "Hyderabad",
//     provider: {
//       name: "kayu",
//       email: "kayu@gmail.com",
//       phone: "+1 888 888 8888",
//       image: "https://images8.alphacoders.com/398/thumb-1920-398553.jpg",
//     },
//     image:
//       "https://media.istockphoto.com/id/1400106238/photo/child-psychotherapy.jpg?s=1024x1024&w=is&k=20&c=JWw50v1D1cyWwpS6XetnXEVFyRzs-JK8KvZF-QiVSvg=",
//   },
//   {
//     id: 2,
//     service: "Autism Therapy",
//     status: "Completed",
//     statusColor: "green",
//     date: "23 Sep 2022, 10:00-11:00",
//     amount: 50.0,
//     paymentMethod: "Gpay",
//     location: "Hyderabad",
//     provider: {
//       name: "kayu",
//       email: "kayu@gmail.com",
//       phone: "+1 888 888 8888",
//       image: "https://images8.alphacoders.com/398/thumb-1920-398553.jpg",
//     },
//     image:
//       "https://media.istockphoto.com/id/1400106238/photo/child-psychotherapy.jpg?s=1024x1024&w=is&k=20&c=JWw50v1D1cyWwpS6XetnXEVFyRzs-JK8KvZF-QiVSvg=",
//   },
//   {
//     id: 3,
//     service: "Autism Therapy",
//     status: "On Going",
//     statusColor: "blue",
//     date: "22 Sep 2022, 11:00-12:00",
//     amount: 50.0,
//     paymentMethod: "Gpay",
//     location: "Hyderabad",
//     provider: {
//       name: "kayu",
//       email: "kayu@gmail.com",
//       phone: "+1 888 888 8888",
//       image: "https://images8.alphacoders.com/398/thumb-1920-398553.jpg",
//     },
//     image:
//       "https://media.istockphoto.com/id/1400106238/photo/child-psychotherapy.jpg?s=1024x1024&w=is&k=20&c=JWw50v1D1cyWwpS6XetnXEVFyRzs-JK8KvZF-QiVSvg=",
//   },
// ];

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const parent = useSelector((state) => state.user);

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
  console.log("bookinlist", bookings);
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Booking List</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort</span>
            <select className="px-3 py-2 border rounded-md bg-white text-sm">
              <option>Newly Added</option>
              <option>Oldest First</option>
            </select>
          </div>
          <button className="p-2 border rounded-md hover:bg-gray-50">
            <Calendar className="w-4 h-4" />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-50">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-6  h-[700px] overflow-y-auto">
        {bookings.map((booking) => (
          <div key={booking?.id} className="bg-white p-6 rounded-lg ">
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
                            alt={booking?.provider?.name}
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
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center gap-2">
                            <span className="w-4 h-4">💬</span>
                            Feedback
                          </button>
                        )}

                        <button className="px-4 py-2 border rounded-md hover:bg-gray-50 text-sm">
                          Cancel
                        </button>
                      </>
                    )}
                    {/* <button className="p-2 border rounded-md hover:bg-gray-50">
                      <Heart className="w-5 h-5" />
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
