import React from "react";
import { useNavigate } from "react-router-dom";
const ChildProfile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between mt-10">
        <h1>Child Profile</h1>
        <button
          onClick={() => {
            navigate("add-profile");
          }}
        >
          Add ChildProfile
        </button>
      </div>
    </div>
  );
};

export default ChildProfile;
