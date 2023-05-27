import React from "react";
import CarouselSingle from "../../components/shared/carouselSingle";

import thumb from "../../assets/images/svgs/thumb.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page relative py-[90px] min-h-screen">
      <div className="bg-[#F5F5F5] absolute w-1/2 right-0 top-0 h-full"></div>
      <div className="custom-container relative z-10">
        <div className="flex md:flex-row flex-col justify-between items-center md:gap-14">
          <div className="md:w-1/2 w-full">
            <CarouselSingle />
          </div>
          <div className="md:w-1/2 w-full p-14">
            <div className="text-center">
              <img
                src={thumb}
                className="block mx-auto mb-[20px]"
                alt="thumb"
              />
              <h2 className="text-4xl font-[500] text-[#333333] mb-[60px]">
                Welcome to Revivo HMS
              </h2>
            </div>

            <p className="text-[22px] mb-[17px]">Enter your Mobile No.</p>
            <p className="font-bold text-lg mb-[20px]">
              You will recieve a 4 digit code to verify next
            </p>

            <form>
              <input
                type="text"
                className="input"
                placeholder="Mobile Number"
              />

              <div className="flex justify-start items-center mt-[46px]">
                <input type="checkbox" className="checkbox" id="agree" />
                <label htmlFor="agree" className="text-[#333333] ml-[10px]">
                    I agree to the{" "}
                    <Link
                        href="/"
                        className="text-[#007FFF]"
                    >
                        Terms & Conditions
                    </Link>
                </label>
              </div>

              <button className="btn-primary w-full mt-[80px] text-2xl font-semibold rounded-[8px]">LOGIN</button>
            </form>

            <p className="font-bold text-xl text-black mt-[90px]">
            Don’t have an account yet? <Link to="/signup" className="text-[#007FFF]">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;