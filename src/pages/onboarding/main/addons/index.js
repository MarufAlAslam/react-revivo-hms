import React from "react";

import icon1 from "../../../../assets/icons/kitchen.svg";
import icon2 from "../../../../assets/icons/housekeeping.svg";
import icon3 from "../../../../assets/icons/banquet.svg";
import icon4 from "../../../../assets/icons/laundry.svg";
import icon5 from "../../../../assets/icons/spa.svg";
import icon6 from "../../../../assets/icons/swimming.svg";
import icon7 from "../../../../assets/icons/gym.svg";
import icon8 from "../../../../assets/icons/salon.svg";

const Addons = ({ currentID, setCurrentID, decrementId, incrementId }) => {
  // select checkbox and change the label background
  const [selected, setSelected] = React.useState(false);
  setSelected(false)

  const handleSelect = (e) => {
  };

  const data = [
    {
      id: 1,
      icon: icon1,
      title: "Kitchen",
    },
    {
      id: 2,
      icon: icon2,
      title: "Housekeeping",
    },
    {
        id: 3,
        icon: icon3,
        title: "Banquet",
    },
    {
        id: 4,
        icon: icon4,
        title: "Laundry",
    },
    {
        id: 5,
        icon: icon5,
        title: "Spa",
    },
    {
        id: 6,
        icon: icon6,
        title: "Swimming Pool",
    },
    {
        id: 7,
        icon: icon7,
        title: "Gym",
    },
    {
        id: 8,
        icon: icon8,
        title: "Salon",
    }
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-semibold uppercase text-[#4f4f4f]">
          Let’s Get started
        </h2>
        <span
          onClick={incrementId}
          className="text-[#007FFF] text-2xl font-semibold uppercase cursor-pointer"
        >
          Skip
        </span>
      </div>

      <div className="mt-[40px]">
        <p className="text-2xl text-[#323F4B] mb-[45px]">
          Tap to select chargeable add-on services
        </p>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
          {data.map((item) => (
            <div className="checkbox-holder">
              <input
                type="checkbox"
                onChange={handleSelect}
                className="hidden"
                id="checkbox1"
              />
              <label
                htmlFor="checkbox1"
                className={`text-2xl block w-full ${
                  selected ? "text-[#ffffff]" : "text-[#4F4F4F]"
                } rounded-[8px] 
                 ${
                   selected ? "bg-[#7E8082]" : "bg-[#ECECEC]"
                 } p-[15px] pl-[20px]`}
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="inline-block mr-[20px]"
                />
                {item.title}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-[40px] gap-40">
        <div className="col-span-2">
          <div className="mt-[140px] grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="col-span-1">
              <span
                onClick={decrementId}
                className="btn-white w-full block p-[24px] text-lg font-semibold text-center rounded-[10px] shadow-custom uppercase text-[#007FFF] cursor-pointer"
              >
                baCK
              </span>
            </div>
            <div className="col-span-1">
              <span
                onClick={incrementId}
                className="bg-[#007FFF] w-full block p-[24px] text-lg font-semibold text-center rounded-[10px] shadow-custom uppercase text-white cursor-pointer"
              >
                continue
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addons;
