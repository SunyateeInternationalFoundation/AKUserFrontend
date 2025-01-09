import { Outlet, Route, Routes } from "react-router-dom";
import Login from "../User/Login";
import Register from "../User/RegisterPage";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="p-4">
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/my-services" element={<MyServices />} />
              <Route path="/job-execution" element={<JobExecution />} />
              <Route path="/job-requests" element={<JobRequests />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route
                path="/settings/verification"
                element={<ProfileVerification />}
              />
              <Route path="/settings/account" element={<Account />} />
              <Route path="/settings/appointments" element={<Appointments />} /> */}
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
