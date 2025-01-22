import axios from "axios";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewBookTracking = () => {
  const { id } = useParams();

  const [expandedSession, setExpandedSession] = useState(null);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function fetchingSessions() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_WEBSITE}/get-sessions/${id}`
        );
        console.log(res.data.data);
        if (res.data.success) {
          const totalSessions = res.data.data.serviceId.sessions; 

          const sessionArray = [];
          for (let i = 1; i <= totalSessions; i++) {
            sessionArray.push({
              session: i,
              status: i === 1 ? "Completed" : i === 2 ? "On Going" : "Upcoming", status
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
    // Toggle the expanded session state on click
    setExpandedSession((prevSession) =>
      prevSession === session.session ? null : session.session
    );
  };

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Sessions</h2>
        </div>
        <div className="space-y-1">
          {sessions.map((session) => (
            <div key={session.session}>
              <button
                onClick={() => handleSessionClick(session)}
                className={`w-full text-left p-4 hover:bg-gray-50 flex items-center justify-between ${
                  expandedSession === session.session ? "bg-blue-50" : ""
                }`}
              >
                <span className="font-medium">Session {session.session}</span>
                {expandedSession === session.session ? (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {expandedSession === session.session && (
                <div className="bg-gray-50 px-4 py-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Status:</span>
                    <span
                      className={`text-sm font-medium ${
                        session.status === "Completed"
                          ? "text-green-600"
                          : session.status === "On Going"
                          ? "text-blue-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {session.status}
                    </span>
                  </div>
                </div>
              )}
            </div>
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
