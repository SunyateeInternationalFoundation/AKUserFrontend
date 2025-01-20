import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ParentDashboard from "../ParentDashboard/ParentDashboard";
import ParentSidebar from "../ParentSidebar/ParentSidebar";

import ChildDetailsPage from "../ChildProfile/ChildDetailsPage";
import StaffSelection from "../ChildProfile/ChildForm";
import ChildProfile from "../ChildProfile/ChildProfile";
import Feedback from "../Feedback/Feedback";
import Bookings from "../MyBookings/Bookings";
import Services from "../Services/Services";
import ParentProfile from "../Settings/ParentProfile";
const ParentHome = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {" "}
      <div className="flex">
        <ParentSidebar />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/dashboard" element={<ParentDashboard />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/services" element={<Services />} />
            <Route path="/child-profile" element={<ChildProfile />} />
            <Route
              path="/child-profile/add-profile"
              element={<StaffSelection />}
            />
            <Route path="/child-details/:id" element={<ChildDetailsPage />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route
              path="/settings/parent-profile"
              element={<ParentProfile />}
            />
          </Routes>
          <Outlet />
        </main>
      </div>
      {/* <footer className="bg-background py-12 border-t">
        <div className="container px-4 mx-auto">
          <div className="mb-8">
            <h2 className="text-xl font-bold">Ausum Kids</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
       
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms & conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Our Impact
                  </Link>
                </li>
              </ul>
            </div>


            <div className="space-y-4">
              <h3 className="font-semibold text-lg">For Clients</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/reviews"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Client Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">For Therapists</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/register-therapist"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Register as a therapist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/therapist-resources"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/therapist-support"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

      
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Connect with us</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="h-10 w-10 flex justify-center items-center text-center text-muted-foreground hover:text-foreground rounded-full border border-gray-200"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 flex justify-center items-center text-center text-muted-foreground hover:text-foreground rounded-full border border-gray-200"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 flex justify-center items-center text-center text-muted-foreground hover:text-foreground rounded-full border border-gray-200"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 flex justify-center items-center text-center text-muted-foreground hover:text-foreground rounded-full border border-gray-200"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <Link href="#" className="inline-block">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648463870745-38fece.png"
                    alt="Download on the App Store"
                    width={108}
                    height={36}
                  />
                </Link>
                <Link href="#" className="inline-block">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696419732772-28cd3d.jpeg"
                    alt="Get it on Google Play"
                    width={108}
                    height={36}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-sm text-muted-foreground">
            <p>
              © Copyright {new Date().getFullYear()} Ausum Kids. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default ParentHome;
