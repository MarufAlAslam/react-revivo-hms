import React from "react";
import logo from "../../../assets/images/pngs/onboarding-logo.png";

const Sidebar = () => {
  const sidebarData = [
    {
      id: 1,
      title: "Primary Information",
      status: "active",
    },
    {
      id: 2,
      title: "Documents Verification",
      status: "inactive",
    },
    {
      id: 3,
      title: "Accomodation details",
      status: "inactive",
    },
    {
      id: 4,
      title: "Capacity",
      status: "inactive",
    },
    {
      id: 5,
      title: "Add on Services",
      status: "inactive",
    },
    {
      id: 6,
      title: "Amenities",
      status: "inactive",
    },
    {
      id: 7,
      title: "Images",
      status: "inactive",
    },
    {
      id: 8,
      title: "Guest Policies",
      status: "inactive",
    },
  ];
  return (
    <div className="sidebar">
      <div className="text-center">
        <img src={logo} alt="logo" className="mx-auto" />
      </div>

      <div className="options mt-[70px] relative">
      <div className="line w-[3px] h-[90%] absolute bg-white left-[8px] top-[50%] -translate-y-[50%]"></div>
        {sidebarData.map((item, index) => (
          <div className="item mb-[30px]" key={index}>
            <div className="flex justify-start items-center">
              <div className={`indicator w-[18px] h-[18px] rounded-full ${item.status === "active" ? "bg-[#71E65E]" : "bg-white"} relative z-10 mr-4`}></div>
              <span className={`text-white text-lg ${item.status === "active" ? "font-[600]" : "font-[400]"}`}>
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
