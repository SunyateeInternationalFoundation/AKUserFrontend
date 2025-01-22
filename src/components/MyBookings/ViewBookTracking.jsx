import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const ViewBookTracking = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [expandedSession, setExpandedSession] = useState(null);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const sessions = [
    {
      session: 1,
      status: "Completed",
      assignment: "Give speech therapy morning and evening",
    },
    {
      session: 2,
      status: "On Going",
    },
    {
      session: 3,
      status: "UpComing",
    },
    {
      session: 4,
      status: "UpComing",
    },
    {
      session: 5,
      status: "UpComing",
    },
  ];

  const handleSessionClick = (session) => {
    if (expandedSession === session.session) {
      setExpandedSession(null);
    } else {
      setExpandedSession(session.session);
    }
    setSelectedSession(session);
  };

  const handleAssignmentClick = (session) => {
    setSelectedAssignment(session.assignment);
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

                  {session.assignment && (
                    <>
                      <hr />
                      <button
                        onClick={() => handleAssignmentClick(session)}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        View Assignment
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 p-8">
        {selectedAssignment ? (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">Assignment Details</h2>
            <div className="prose max-w-none">
              <p>{selectedAssignment}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select an assignment to view details
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewBookTracking;
