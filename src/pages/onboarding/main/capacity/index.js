import React from "react";
import room from "../../../../assets/icons/room.svg";

import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

const Capacity = ({ currentID, setCurrentID, decrementId, incrementId }) => {
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);

  const expand1 = () => {
    setExpanded1(!expanded1);
  };

  const expand2 = () => {
    setExpanded2(!expanded2);
  }

  const expand3 = () => {
    setExpanded3(!expanded3);
    }


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
        <p className="text-2xl text-[#323F4B]">Capacity</p>
        <div
          className="mt-[20px] shadow-lg py-[45px] px-[24px] rounded-[10px]"
          onClick={expand1}
        >
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold text-[#4F4F4F]">
              Executive (08)
            </p>
            <span className="text-lg font-semibold text-[#fff] bg-[#007FFF] py-[12px] px-[60px] rounded-[8px]">
              Save
            </span>
          </div>
          <div className="mt-[20px] flex justify-between items-center">
            <div>
              <p className="text-lg text-[#1d1d1d] mb-[14px]">
                Enter room no. separated by comma
              </p>
              <div className="flex justify-start items-center bg-[#F4F4F4] p-[10px] rounded-[10px]">
                <img src={room} alt="room" className="mr-[13px]" />
                <input
                  placeholder="104, 105, 106, 107"
                  className="w-full h-[35px] bg-transparent focus:border-0 focus:outline-0 rounded-[4px]"
                />
              </div>
            </div>
            <div>
              <p className="text-lg text-[#1d1d1d] mb-[14px]">No. of Guests</p>
              <div className="flex justify-start items-center">
                <span className="text-[#007FFF] cursor-pointer flex justify-center items-center w-[32px] mr-[10px] h-[32px] bg-[#F0F0F0] rounded-full">
                  <FaMinus className="" />
                </span>
                <input
                  type="text"
                  className="w-[55px] text-center text-[#007FFF] font-semibold"
                  value="1"
                />
                <span className="text-[#007FFF] cursor-pointer flex justify-center items-center w-[32px] h-[32px] bg-[#F0F0F0] rounded-full ml-[10px]">
                  <FaPlus className="" />
                </span>
              </div>
            </div>
            <div>
              <p className="text-lg text-[#1d1d1d] mb-[14px]">Base Price</p>
              <input
                className="bg-[#F4F4F4] p-[10px] rounded-[10px]"
                placeholder="INR"
              />
            </div>
          </div>

          {/* expanded */}
          {expanded1 && (
            <div>
              <div className="flex justify-between items-center mt-[32px]">
                <p className="text-lg font-semibold text-[#1d1d1d]">
                  Rooms available
                </p>

                <span className="text-[#FF385C]">
                  <FaTrashAlt className="trash" />
                </span>
              </div>

              <div className="flex flex-wrap gap-[25px] mt-[30px]">
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    101
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    102
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    103
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    104
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    105
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    106
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    107
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    108
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-[20px] shadow-lg py-[45px] px-[24px] rounded-[10px]" onClick={expand2}>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold text-[#4F4F4F]">Deluxe (08)</p>
            <span className="text-lg font-semibold text-[#fff] bg-[#007FFF] py-[12px] px-[60px] rounded-[8px]">
              Save
            </span>
          </div>
          <div className="mt-[20px] flex justify-between items-center">
            <div>
              <p className="text-lg text-[#1d1d1d] mb-[14px]">
                Enter room no. separated by comma
              </p>
              <div className="flex justify-start items-center bg-[#F4F4F4] p-[10px] rounded-[10px]">
                <img src={room} alt="room" className="mr-[13px]" />
                <input
                  placeholder="104, 105, 106, 107"
                  className="w-full h-[35px] bg-transparent focus:border-0 focus:outline-0 rounded-[4px]"
                />
              </div>
            </div>
            <div>
              <p className="text-lg text-[#1d1d1d] mb-[14px]">No. of Guests</p>
              <div className="flex justify-start items-center">
                <span className="text-[#007FFF] cursor-pointer flex justify-center items-center w-[32px] mr-[10px] h-[32px] bg-[#F0F0F0] rounded-full">
                  <FaMinus className="" />
                </span>
                <input
                  type="text"
                  className="w-[55px] text-center text-[#007FFF] font-semibold"
                  value="1"
                />
                <span className="text-[#007FFF] cursor-pointer flex justify-center items-center w-[32px] h-[32px] bg-[#F0F0F0] rounded-full ml-[10px]">
                  <FaPlus className="" />
                </span>
              </div>
            </div>
            <div>
              <p className="text-lg text-[#1d1d1d] mb-[14px]">Base Price</p>
              <input
                className="bg-[#F4F4F4] p-[10px] rounded-[10px]"
                placeholder="INR"
              />
            </div>
          </div>

          {/* expanded */}
          {expanded2 && (
            <div>
              <div className="flex justify-between items-center mt-[32px]">
                <p className="text-lg font-semibold text-[#1d1d1d]">
                  Rooms available
                </p>

                <span className="text-[#FF385C]">
                  <FaTrashAlt className="trash" />
                </span>
              </div>

              <div className="flex flex-wrap gap-[25px] mt-[30px]">
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    101
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    102
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    103
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    104
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    105
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    106
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    107
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    108
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-[20px] shadow-lg py-[45px] px-[24px] rounded-[10px]" onClick={expand3}>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold text-[#4F4F4F]">
              HoneyMoon Suite
            </p>
            <span className="text-lg font-semibold text-[#fff] bg-[#007FFF] py-[12px] px-[60px] rounded-[8px]">
              Save
            </span>
          </div>
          <div className="mt-[20px] flex justify-between items-center">
            <div>
              <p className="text-lg text-[#1d1d1d] mb-[14px]">
                Enter room no. separated by comma
              </p>
              <div className="flex justify-start items-center bg-[#F4F4F4] p-[10px] rounded-[10px]">
                <img src={room} alt="room" className="mr-[13px]" />
                <input
                  placeholder="104, 105, 106, 107"
                  className="w-full h-[35px] bg-transparent focus:border-0 focus:outline-0 rounded-[4px]"
                />
              </div>
            </div>
            <div>
              <p className="text-lg text-[#1d1d1d] mb-[14px]">No. of Guests</p>
              <div className="flex justify-start items-center">
                <span className="text-[#007FFF] cursor-pointer flex justify-center items-center w-[32px] mr-[10px] h-[32px] bg-[#F0F0F0] rounded-full">
                  <FaMinus className="" />
                </span>
                <input
                  type="text"
                  className="w-[55px] text-center text-[#007FFF] font-semibold"
                  value="1"
                />
                <span className="text-[#007FFF] cursor-pointer flex justify-center items-center w-[32px] h-[32px] bg-[#F0F0F0] rounded-full ml-[10px]">
                  <FaPlus className="" />
                </span>
              </div>
            </div>
            <div>
              <p className="text-lg text-[#1d1d1d] mb-[14px]">Base Price</p>
              <input
                className="bg-[#F4F4F4] p-[10px] rounded-[10px]"
                placeholder="INR"
              />
            </div>
          </div>

            {/* expanded */}
            {expanded3 && (
            <div>
              <div className="flex justify-between items-center mt-[32px]">
                <p className="text-lg font-semibold text-[#1d1d1d]">
                  Rooms available
                </p>

                <span className="text-[#FF385C]">
                  <FaTrashAlt className="trash" />
                </span>
              </div>

              <div className="flex flex-wrap gap-[25px] mt-[30px]">
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    101
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    102
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    103
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    104
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    105
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    106
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    107
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="room1"
                    className="hidden"
                    name="room1"
                    value="room1"
                  />
                  <label
                    for="room1"
                    className="text-lg bg-[#EBEBEB] text-[#4F4F4F] py-[14px] px-[35px] rounded-[5px] block border border-[#4F4F4F]"
                  >
                    108
                  </label>
                </div>
              </div>
            </div>
          )}
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

export default Capacity;
