import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ParentDashboard from "../ParentDashboard/ParentDashboard";
import ParentSidebar from "../ParentSidebar/ParentSidebar";
const ParentHome = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {" "}
      <ParentSidebar />
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/dashboard" element={<ParentDashboard />} />
        </Routes>
        <Outlet />
      </main>
    </div>
  );
};

export default ParentHome;
