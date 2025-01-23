// import axios from "axios";
// import { ChevronDown, ChevronRight } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ViewBookTracking = () => {
//   const { id } = useParams();

//   const [selectedSession, setSelectedSession] = useState(null);
//   const [expandedSession, setExpandedSession] = useState(null);
//   const [selectedAssignment, setSelectedAssignment] = useState(null);
//   const [sessions, setSessions] = useState(null);

//   //   const sessionDetails = {
//   //     totalSessions: 5,
//   //     sessionDetails: [
//   //       {
//   //         session: 1,
//   //         status: "Completed",
//   //         assignment: "Give speech therapy morning and evening",
//   //       },
//   //       {
//   //         session: 2,
//   //         status: "On Going",
//   //       },
//   //       {
//   //         session: 3,
//   //         status: "UpComing",
//   //       },
//   //       {
//   //         session: 4,
//   //         status: "UpComing",
//   //       },
//   //       {
//   //         session: 5,
//   //         status: "UpComing",
//   //       },
//   //     ],
//   //   };

//   useEffect(() => {
//     async function fetchingSessions() {
//       try {
//         const res = await axios.get(
//           `${import.meta.env.VITE_WEBSITE}/get-sessions/${id}`
//         );
//         console.log(res.data.data);
//         if (res.data.success) {
//           const totalSessions = res.data.data.serviceId.sessions;

//           const sessionArray = [];
//           for (let i = 1; i <= totalSessions; i++) {
//             sessionArray.push({
//               session: i,
//               status: i === 1 ? "Completed" : i === 2 ? "On Going" : "Upcoming",
//             });
//           }

//           setSessions(sessionArray);
//         }
//       } catch (err) {
//         console.log("Error in getting sessions:", err);
//       }
//     }
//     fetchingSessions();
//   }, [id]);

//   const handleSessionClick = (session) => {
//     if (expandedSession === session?.session) {
//       setExpandedSession(null);
//     } else {
//       setExpandedSession(session?.session);
//     }
//     setSelectedSession(session);
//   };

//   const handleAssignmentClick = (session) => {
//     setSelectedAssignment(session?.assignment);
//   };

//   return (
//     <div className="flex min-h-screen bg-[#f8f9fa]">
//       <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
//         <div className="p-4 border-b border-gray-200">
//           <h2 className="text-xl font-semibold">Sessions</h2>
//         </div>
//         <div className="space-y-1">
//           {sessions.map((session) => (
//             <div key={session?.session}>
//               <button
//                 onClick={() => handleSessionClick(session)}
//                 className={`w-full text-left p-4 hover:bg-gray-50 flex items-center justify-between ${
//                   expandedSession === session?.session ? "bg-blue-50" : ""
//                 }`}
//               >
//                 <span className="font-medium">Session {session?.session}</span>
//                 {expandedSession === session?.session ? (
//                   <ChevronDown className="h-5 w-5 text-gray-500" />
//                 ) : (
//                   <ChevronRight className="h-5 w-5 text-gray-500" />
//                 )}
//               </button>

//               {expandedSession === session?.session && (
//                 <div className="bg-gray-50 px-4 py-4 space-y-2">
//                   <div className="flex items-center space-x-2">
//                     <span className="text-sm text-gray-600">Status:</span>
//                     <span
//                       className={`text-sm font-medium ${
//                         session?.status === "Completed"
//                           ? "text-green-600"
//                           : session?.status === "On Going"
//                           ? "text-blue-600"
//                           : "text-yellow-600"
//                       }`}
//                     >
//                       {session?.status}
//                     </span>
//                   </div>

//                   {session?.assignment && (
//                     <>
//                       <hr />
//                       <button
//                         onClick={() => handleAssignmentClick(session)}
//                         className="text-sm text-blue-600 hover:underline"
//                       >
//                         View Assignment
//                       </button>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex-1 p-8">
//         {selectedAssignment ? (
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h2 className="text-2xl font-semibold mb-4">Assignment Details</h2>
//             <div className="prose max-w-none">
//               <p>{selectedAssignment}</p>
//             </div>
//           </div>
//         ) : (
//           <div className="flex items-center justify-center h-full text-gray-500">
//             Select an assignment to view details
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewBookTracking;
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ViewBookTracking = () => {
  const { id } = useParams();
  const [therapy, setTherapy] = useState(null);
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchingSessions() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_WEBSITE}/get-sessions/${id}`
        );
        console.log(res.data.data);
        if (res.data.success) {
          console.log(res.data.data);
          setTherapy(res.data.data);
          const totalSessions = res.data.data.serviceId.sessions;

          const sessionArray = [];
          for (let i = 1; i <= totalSessions; i++) {
            sessionArray.push({
              session: i,
              status: i === 1 ? "Completed" : i === 2 ? "On Going" : "Upcoming",
            });
          }

          setSessions(sessionArray);
        }
      } catch (err) {
        console.log("Error in getting sessions:", err);
      }
    }
    fetchingSessions();
  }, [id]);

  const handleSessionClick = (session) => {
    console.log(`Session ${session.session} clicked!`);
  };

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-2 border-gray-200">
      <button
        onClick={() => navigate('/bookings')} 
        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </button>
    </div>
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">{`${therapy?.serviceId?.name}'s Sessions`}</h2>
        </div>
        <div className="space-y-1">
          {sessions.map((session) => (
            <button
              key={session.session}
              onClick={() => handleSessionClick(session)}
              className="w-full text-left p-4 hover:bg-gray-50 flex items-center justify-between"
            >
              <span className="font-medium">Session {session.session}</span>
              <span
                className={`text-sm font-medium py-1 px-3 rounded-full ${
                  session.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : session.status === "On Going"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {session.status}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-8">
        <div className="flex items-center justify-center h-full text-gray-500">
          Select a session to view details
        </div>
      </div>
    </div>
  );
};

export default ViewBookTracking;
