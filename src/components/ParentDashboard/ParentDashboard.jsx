import axios from "axios";
import { useSpring, animated } from "@react-spring/web";
import { Package2, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function StatsCard({ icon, label, value, change, prefix = "₹" }) {
  const isPositive = change > 0;
  const { number } = useSpring({
    from: { number: 0 },
    number: typeof value === "number" ? value : 0,
    delay: 100,
    config: { tension: 20, friction: 14, precision: 10 },
  });
  const { changeNumber } = useSpring({
    from: { changeNumber: 0 },
    changeNumber: change,
    delay: 100,
    config: { tension: 20, friction: 14 },
  });
  return (
    <div className="rounded-xl border bg-white p-4 flex items-start justify-between">
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm text-gray-500">{label}</span>
        </div>
        <p className="text-2xl font-semibold">
          {prefix}
          <animated.span>{number.to((n) => Math.floor(n))}</animated.span>
        </p>
      </div>
      <div
        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
          isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        <animated.span>
          {changeNumber.to((n) => `${isPositive ? "+" : ""}${Math.floor(n)}%`)}
        </animated.span>
      </div>
    </div>
  );
}
const ParentDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const parent = useSelector((state) => state.user);
  const navigate = useNavigate();
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
  // const recentTransactions = [
  //   {
  //     type: "Service Booking",
  //     date: "22 Sep 2023",
  //     time: "12:12 AM",
  //     amount: 280.0,
  //   },
  //   {
  //     type: "Service Refund",
  //     date: "15 Oct 2022",
  //     time: "10:36 PM",
  //     amount: 395.0,
  //   },
  //   {
  //     type: "Wallet Topup",
  //     date: "16 Oct 2022",
  //     time: "15:19 PM",
  //     amount: 1000.0,
  //   },
  // ];

  // const recentBookings = [
  //   {
  //     service: "Autism Therapy",
  //     date: "10 Nov 2022",
  //     provider: {
  //       name: "John Smith",
  //       email: "john@gmail.com",
  //       avatar:
  //         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kTstdaAJo1au7YPJ3WanZtLIdM6NFA.png",
  //     },
  //   },
  //   {
  //     service: "Special Education",
  //     date: "15 Oct 2022",
  //     provider: {
  //       name: "Timothy",
  //       email: "timothy@gmail.com",
  //       avatar:
  //         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kTstdaAJo1au7YPJ3WanZtLIdM6NFA.png",
  //     },
  //   },
  //   // Add more bookings as needed
  // ];
  console.log("bookings,", bookings);
  const ongoingBookings = bookings.filter(
    (booking) => booking.status === "On Going" && booking.accepted
  );
  const val = ongoingBookings
    .reduce((acc, transaction) => acc + (transaction?.serviceId?.price || 0), 0)
    .toFixed(2);
  console.log(val);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatsCard
          icon={<Package2 className="h-4 w-4 text-primary" />}
          label="Total Sessions"
          value={ongoingBookings.length}
          change={15}
          prefix=""
        />
        <StatsCard
          icon={<Package2 className="h-4 w-4 text-primary" />}
          label="Total Spend"
          value={+val}
          change={-5}
        />
        <StatsCard
          icon={<Wallet className="h-4 w-4 text-primary" />}
          label="Wallet"
          value={0}
          change={-5}
        />
        <StatsCard
          icon={<Package2 className="h-4 w-4 text-primary" />}
          label="Total Savings"
          value={0}
          change={16}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Transaction</h2>
          <div className="space-y-4">
            {ongoingBookings.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gray-100">
                    <Package2 className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.serviceId.name}</p>
                    <p className="text-sm text-gray-500">
                      {transaction.date} • {transaction.time}
                    </p>
                  </div>
                </div>
                <p className="font-semibold">
                  ₹{transaction?.serviceId?.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border p-6">
          <div className="flex items-start justify-between text-center">
            <h2 className="text-lg font-semibold mb-4">Recent Booking</h2>
            <span className="text-blue-500 text-sm font-medium cursor-pointer hover:underline"
            onClick={()=>{
             navigate('/bookings')
            }}
            >
              View All
            </span>
          </div>

          <div className="space-y-4">
            {ongoingBookings.map((booking, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kTstdaAJo1au7YPJ3WanZtLIdM6NFA.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{booking.serviceId.name}</p>
                    <p className="text-sm text-gray-500">{booking.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="font-medium">{booking.providerId.name}</p>
                    <p className="text-sm text-gray-500">
                      {booking.providerId.email}
                    </p>
                  </div>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kTstdaAJo1au7YPJ3WanZtLIdM6NFA.png"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;


