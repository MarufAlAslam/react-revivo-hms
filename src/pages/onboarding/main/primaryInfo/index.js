import React from "react";

import hotelIcon from "../../../../assets/icons/hotel.svg";
import emailIcon from "../../../../assets/icons/email.svg";
import phoneIcon from "../../../../assets/icons/phone.svg";
import cityIcon from "../../../../assets/icons/city.svg";
import addressIcon from "../../../../assets/icons/address.svg";
import gstinIocn from "../../../../assets/icons/gstin.svg";

import rect from "../../../../assets/images/svgs/rect.svg";

const PrimaryInfo = ({ currentID, setCurrentID, decrementId, incrementId }) => {
  const formData = [
    {
      id: 1,
      icon: hotelIcon,
      label: "Hotel Name",
    },
    {
      id: 2,
      icon: emailIcon,
      label: "Email Address",
    },
    {
      id: 3,
      icon: phoneIcon,
      label: "Contact Number",
    },
    {
      id: 4,
      icon: cityIcon,
      label: "City",
    },
    {
      id: 5,
      icon: addressIcon,
      label: "Address",
    },
    {
      id: 6,
      icon: gstinIocn,
      label: "GSTIN",
    },
  ];

  

//   get uploaded image and preview in viewer
    // const [image, setImage] = React.useState(null);
    const [preview, setPreview] = React.useState(rect);

    const handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
        // setImage(file);
        setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

  return (
    <div>
      

      <div className="grid md:grid-cols-3 grid-cols-1 mt-[40px] gap-40">
        <div className="col-span-2">
          <p className="text-2xl text-[#323F4B]">
            Enter Hotel details to start
          </p>

          <div className="mt-[56px]">
            {formData.map((item, index) => (
              <div
                className="item mb-[20px] flex justify-between items-start"
                key={index}
              >
                <div className="flex w-1/3 justify-start items-center">
                  <img src={item.icon} alt="icon" className="mr-[13px]" />
                  <p className="text-lg text-[#4F4F4F] mr-[56px]">
                    {item.label}
                  </p>
                </div>
                <input className="h-[55px] w-2/3 bg-[#EDEDED] border border-[34F4F4F] rounded-[4px]" />
              </div>
            ))}
          </div>

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
        <div className="col-span-1">
          <p className="text-lg uppercase text-black">Upload Company Logo</p>
          <p className="text-sm text-[#4f4f4f] mt-[13px]">
            Upto 500 Kb, jpeg, png only
          </p>

          <img src={preview} alt="rect" id="viewer" className="my-[20px] w-full h-220px object-cover" />

          <input
            type="file"
            id="logo-upload"
            onChange={handleImageChange}
            className="hidden"
            accept="image/png, image/jpeg"
            max-size={500}
          />
          <label
            htmlFor="logo-upload"
            onClick={decrementId}
            className="btn-white w-full block p-[24px] text-lg font-semibold text-center rounded-[10px] shadow-custom uppercase text-[#007FFF] cursor-pointer"
          >
            Upload
          </label>
        </div>
      </div>
    </div>
  );
};

export default PrimaryInfo;
