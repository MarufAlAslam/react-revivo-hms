import React from "react";

const AccomodationDetails = ({
  currentID,
  setCurrentID,
  decrementId,
  incrementId,
}) => {
  // select checkbox and change the label background
  const [selected1, setSelected1] = React.useState(false);
  const [selected2, setSelected2] = React.useState(false);
  const [selected3, setSelected3] = React.useState(false);

  const handleSelect1 = () => {
    setSelected1(!selected1);
  };

  const handleSelect2 = () => {
    setSelected2(!selected2);
  };

  const handleSelect3 = () => {
    setSelected3(!selected3);
  };
  const updateAccomodation = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const hotelId = localStorage.getItem("hotel_id");

    const type1 = document.getElementById("checkbox1").checked;
    const type2 = document.getElementById("checkbox2").checked;
    const type3 = document.getElementById("checkbox3").checked;

    const roomTypes = [
      {
        type: "Executive",
        available: type1,
      },
      {
        type: "Deluxe",
        available: type2,
      },
      {
        type: "Honeymoon Suite",
        available: type3,
      },
    ];

    fetch(`http://revivotech.in:8080/hotels/${hotelId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        roomTypes: roomTypes,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        incrementId();
      })
      .catch((error) => {
        console.error(error);
      });

    incrementId();
  };

  const addRoomType = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const hotelId = localStorage.getItem("hotel_id");
    const roomType = e.target.roomType.value;

    fetch(`http://revivotech.in:8080/hotels/${hotelId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        roomTypes: [
          {
            name: roomType,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        incrementId();
      })
      .catch((error) => {
        console.error(error);
      });

    incrementId();
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-semibold uppercase text-[#4f4f4f]">
          Select Accomodation
        </h2>
        <span
          onClick={incrementId}
          className="text-[#007FFF] text-2xl font-semibold uppercase cursor-pointer"
        >
          Skip
        </span>
      </div>

      <form
        onSubmit={addRoomType}
        className="flex justify-between items-center shadow-lg py-[45px] px-[24px] rounded-[10px]"
      >
        <input
          type="text"
          placeholder="Add new room type"
          name="roomType"
          className="w-[100%] border-[1px] border-[#E5E5E5] rounded-[10px] p-[20px] mr-5 outline-none"
        />
        <button
          type="submit"
          className="bg-[#007FFF] text-white text-lg font-semibold uppercase px-[50px] h-full py-[18px] rounded-[10px] cursor-pointer"
        >
          Add
        </button>
      </form>

      <form onSubmit={updateAccomodation} className="mt-[20px]">
        <p className="text-[24px] text-[#000000] my-[45px]">
          Tap to select Room types
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="checkbox-holder">
            <input
              type="checkbox"
              onChange={handleSelect1}
              className="hidden"
              name="checkbox1"
              id="checkbox1"
            />
            <label
              htmlFor="checkbox1"
              className={`text-2xl block w-full ${
                selected1 ? "text-[#ffffff]" : "text-[#4F4F4F]"
              } rounded-[8px] border ${
                selected1 ? "border-[#A3A8AE]" : "border-[#4f4f4f]"
              } ${
                selected1 ? "bg-[#A3A8AE]" : "bg-[#f4f4f4]"
              } p-[15px] pl-[20px]`}
            >
              Executive
            </label>
          </div>
          <div className="checkbox-holder">
            <input
              type="checkbox"
              onChange={handleSelect2}
              className="hidden"
              name="checkbox2"
              id="checkbox2"
            />
            <label
              htmlFor="checkbox2"
              className={`text-2xl block w-full ${
                selected2 ? "text-[#ffffff]" : "text-[#4F4F4F]"
              } rounded-[8px] border ${
                selected2 ? "border-[#A3A8AE]" : "border-[#4f4f4f]"
              } ${
                selected2 ? "bg-[#A3A8AE]" : "bg-[#f4f4f4]"
              } p-[15px] pl-[20px]`}
            >
              Deluxe
            </label>
          </div>
          <div className="checkbox-holder">
            <input
              type="checkbox"
              onChange={handleSelect3}
              className="hidden"
              name="checkbox3"
              id="checkbox3"
            />
            <label
              htmlFor="checkbox3"
              className={`text-2xl block w-full ${
                selected3 ? "text-[#ffffff]" : "text-[#4F4F4F]"
              } rounded-[8px] border ${
                selected3 ? "border-[#A3A8AE]" : "border-[#4f4f4f]"
              } ${
                selected3 ? "bg-[#A3A8AE]" : "bg-[#f4f4f4]"
              } p-[15px] pl-[20px]`}
            >
              Honeymoon Suite
            </label>
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
                <button
                  type="submit"
                  className="bg-[#007FFF] w-full block p-[24px] text-lg font-semibold text-center rounded-[10px] shadow-custom uppercase text-white cursor-pointer"
                >
                  continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccomodationDetails;
