import { useState } from "react";
import { BookingSteps } from "./BookingSteps";
// import { StaffGrid } from "./components/staff-grid";

const STEPS = [
  { id: 1, title: "Location", completed: true },
  { id: 2, title: "Staffs", completed: false },
  { id: 3, title: "Additional Services", completed: false },
  { id: 4, title: "Date & Time", completed: false },
  { id: 5, title: "Personal Information", completed: false },
  { id: 6, title: "Cart", completed: false },
  { id: 7, title: "Payment", completed: false },
  { id: 8, title: "Confirmation", completed: false },
];

const SAMPLE_STAFFS = [
  {
    id: "1",
    name: "Jeff Fitch",
    email: "fitchh487@example.com",
    image: "/placeholder.svg",
    services: 8,
    rating: 4.9,
  },
  {
    id: "1",
    name: "Jeff Fitch",
    email: "fitchh487@example.com",
    image: "/placeholder.svg",
    services: 8,
    rating: 4.9,
  },
  {
    id: "1",
    name: "Jeff Fitch",
    email: "fitchh487@example.com",
    image: "/placeholder.svg",
    services: 8,
    rating: 4.9,
  },
];
const Booking = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [selectedStaff, setSelectedStaff] = useState(undefined);
  const [anyStaff, setAnyStaff] = useState(false);

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
      const updatedSteps = [...STEPS];
      updatedSteps[currentStep - 1].completed = true;
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="container mx-auto grid gap-8 p-6 lg:grid-cols-[300px,1fr]">
      <div className="space-y-6">
        <BookingSteps currentStep={currentStep} steps={STEPS} />
        <div className="space-y-4 rounded-lg bg-muted p-4">
          <h3 className="font-semibold">Bookings</h3>
          <div className="text-sm text-muted-foreground">0% complete</div>
          {/* <div className="text-sm">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Login
            </a>
          </div> */}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Select Staff{" "}
            <span className="text-sm text-muted-foreground">• Total: 09</span>
          </h2>
          <button className="px-4 py-2 border rounded">All Ratings</button>
        </div>

        {/* <StaffGrid
          staffs={SAMPLE_STAFFS}
          onSelect={setSelectedStaff}
          selectedStaff={selectedStaff}
        /> */}

        {/* <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="anyStaff"
            checked={anyStaff}
            onChange={(e) => setAnyStaff(e.target.checked)}
          />
          <label
            htmlFor="anyStaff"
            className="text-sm font-medium leading-none"
          >
            Select Anyone for this Booking
          </label>
        </div> */}

        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 border rounded"
            onClick={handlePrev}
            disabled={currentStep === 1}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 border rounded"
            onClick={handleNext}
            disabled={!selectedStaff && !anyStaff}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
