import React from "react";
import logo from "../../assets/images/pngs/onboarding-logo.png";
import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-blue-800">
      <img src={logo} alt="logo" />

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl font-bold mt-5">
          Hotel Added Successfully
        </h1>

        <Link to="/onBoarding" className="bg-white px-10 py-3 rounded text-blue-800 mt-10">Back to Home</Link>
      </div>
    </div>
  );
};

export default Confirm;
