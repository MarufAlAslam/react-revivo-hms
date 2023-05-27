import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

import otpImg from "../../assets/images/svgs/otpImg.svg";

const OtpModal = ({setDisplayModal}) => {

    const closeModal = () => {
        setDisplayModal(false);
    }
  // focus on first input
  useEffect(() => {
    document.querySelector(".otp-input").focus();
  }, []);

  // focus on next input
  const focusNextInput = (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, 1);
    }
    if (e.target.value.length === 1) {
      // check if next input exists
      const nextInput = e.target.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const resendOtp = () => {
    // clear all inputs
    const inputs = document.querySelectorAll(".otp-input");
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div className="otp-modal h-screen w-full fixed top-0 left-0 flex justify-center items-center z-20">
      <div className="otp-bg fixed top-0 left-0 bg-black opacity-50 h-screen w-full z-20"></div>
      <div className="otp-modal-content py-[45px] px-[60px] bg-white shadow-md relative z-50 rounded-[30px] w-[1000px] max-w-[95%]">
        <div className="text-right">
          <button onClick={closeModal} className="text-[#333333] text-3xl font-bold">
            <IoCloseOutline />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-[500]">Enter Verification Code</h2>
            <p className="mt-[40px] text-lg">
              We have sent a verification code to 894783854
            </p>

            <form className="mt-[45px]">
              <div className="flex justify-between items-center md:w-[80%]">
                <input
                  type="number"
                  className="otp-input"
                  onChange={focusNextInput}
                />
                <input
                  type="number"
                  className="otp-input"
                  onChange={focusNextInput}
                />
                <input
                  type="number"
                  className="otp-input"
                  onChange={focusNextInput}
                />
                <input
                  type="number"
                  className="otp-input"
                  onChange={focusNextInput}
                />
              </div>

              <p className="mt-[35px] mb-[40px]">
                Didn’t Recieve the code?{" "}
                <span
                  onClick={resendOtp}
                  className="text-[#007FFF] cursor-pointer"
                >
                  Resend
                </span>
              </p>

              <button className="btn-primary w-full text-2xl font-semibold rounded-[8px] uppercase">
                VERIFY
              </button>
            </form>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={otpImg} alt="otp" className="block mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpModal;
