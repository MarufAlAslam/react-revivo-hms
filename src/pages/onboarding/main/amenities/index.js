import React, { useState } from "react";

import icon1 from "../../../../assets/icons/television.svg";
import icon2 from "../../../../assets/icons/internet.svg";
import icon3 from "../../../../assets/icons/cctv.svg";
import icon4 from "../../../../assets/icons/studyTable.svg";
import icon5 from "../../../../assets/icons/laundry.svg";
import icon6 from "../../../../assets/icons/refrigerator.svg";
import icon7 from "../../../../assets/icons/bathtub.svg";
import icon8 from "../../../../assets/icons/clothesRack.svg";
import icon9 from "../../../../assets/icons/housekeeping.svg";
import icon10 from "../../../../assets/icons/fireSafety.svg";


import icon11 from "../../../../assets/icons/kingSizeBed.svg";
import icon12 from "../../../../assets/icons/queenSizeBed.svg";
import icon13 from "../../../../assets/icons/singleBed.svg";
import icon14 from "../../../../assets/icons/ac.svg";
import icon15 from "../../../../assets/icons/window.svg";
import icon16 from "../../../../assets/icons/balcony.svg";
import { Collapse } from "antd";

const Amenities = ({ currentID, setCurrentID, decrementId, incrementId }) => {

    const { Panel } = Collapse;

    const [data1, setData1] = useState([
        {
            id: 1,
            icon: icon1,
            selected: false,
            title: "Television",
        },
        {
            id: 2,
            icon: icon2,
            selected: false,
            title: "Internet",
        },
        {
            id: 3,
            icon: icon3,
            selected: false,
            title: "CCTV",
        },
        {
            id: 4,
            icon: icon4,
            selected: false,
            title: "Study Table",
        },
        {
            id: 5,
            icon: icon5,
            selected: false,
            title: "Laundry",
        },
        {
            id: 6,
            icon: icon6,
            selected: false,
            title: "Refrigerator",
        },
        {
            id: 7,
            icon: icon7,
            selected: false,
            title: "Bathtub",
        },
        {
            id: 8,
            icon: icon8,
            selected: false,
            title: "Clothes Rack",
        },
        {
            id: 9,
            icon: icon9,
            selected: false,
            title: "Housekeeping",
        },
        {
            id: 10,
            icon: icon10,
            selected: false,
            title: "Fire Safety",
        }
    ]
    )

     const [data2, setData2] = useState([
        {
            id: 1,
            icon: icon11,
            selected: false,
            title: "King Size Bed",
        },
        {
            id: 2,
            icon: icon12,
            selected: false,
            title: "Queen Size Bed",
        },
        {
            id: 3,
            icon: icon13,
            selected: false,
            title: "Single Bed",
        },
        {
            id: 4,
            icon: icon14,
            selected: false,
            title: "AC",
        },
        {
            id: 5,
            icon: icon15,
            selected: false,
            title: "Window",
        },
        {
            id: 6,
            icon: icon16,
            selected: false,
            title: "Balcony",
        },
    ]
    )

     const [data3, setData3] = useState([
        {
            id: 1,
            icon: icon11,
            selected: false,
            title: "King Size Bed",
        },
        {
            id: 2,
            icon: icon12,
            selected: false,
            title: "Queen Size Bed",
        },
        {
            id: 3,
            icon: icon13,
            selected: false,
            title: "Single Bed",
        },
        {
            id: 4,
            icon: icon14,
            selected: false,
            title: "AC",
        },
        {
            id: 5,
            icon: icon15,
            selected: false,
            title: "Window",
        },
        {
            id: 6,
            icon: icon16,
            selected: false,
            title: "Balcony",
        },
    ]
    )

    const handleSelect1 = (id) => {
        const newData = data1.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    selected: !item.selected,
                };
            }
            return item;
        });
        setData1(newData);
    };
    const handleSelect2 = (id) => {
        const newData = data1.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    selected: !item.selected,
                };
            }
            return item;
        });
        setData2(newData);
    };
    const handleSelect3 = (id) => {
        const newData = data1.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    selected: !item.selected,
                };
            }
            return item;
        });
        setData3(newData);
    };




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

                <Collapse accordion className="border-0">
                    <Panel className="border-0" header={<p className="text-2xl text-[#007FFF] ">General amenities</p>} key="1">
                        <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
                            {data1.map((item, index) => (
                                <div className="checkbox-holder cursor-pointer" key={index}>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleSelect1(index + 1)}
                                        className="hidden"
                                        id={`checkbox${index + 1}`}
                                    />
                                    <label
                                        htmlFor={`checkbox${index + 1}`}
                                        className={`text-2xl block w-full ${item.selected ? "text-[#ffffff]" : "text-[#4F4F4F]"
                                            } rounded-[8px] 
                 ${item.selected ? "bg-[#7E8082]" : "bg-[#ECECEC]"
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
                    </Panel>
                    <Panel header={<p className="text-2xl text-[#007FFF] ">Luxary Rooms</p>} key="2">
                        <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
                            {data2.map((item, index) => (
                                <div className="checkbox-holder cursor-pointer" key={index}>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleSelect2(index + 1)}
                                        className="hidden"
                                        id={`checkbox${index + 1}`}
                                    />
                                    <label
                                        htmlFor={`checkbox${index + 1}`}
                                        className={`text-2xl block w-full ${item.selected ? "text-[#ffffff]" : "text-[#4F4F4F]"
                                            } rounded-[8px] 
                 ${item.selected ? "bg-[#7E8082]" : "bg-[#ECECEC]"
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
                    </Panel>
                    <Panel header={<p className="text-2xl text-[#007FFF] ">Honeymoon Suite</p>} key="3">
                        <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
                            {data3.map((item, index) => (
                                <div className="checkbox-holder cursor-pointer" key={index}>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleSelect3(index + 1)}
                                        className="hidden"
                                        id={`checkbox${index + 1}`}
                                    />
                                    <label
                                        htmlFor={`checkbox${index + 1}`}
                                        className={`text-2xl block w-full ${item.selected ? "text-[#ffffff]" : "text-[#4F4F4F]"
                                            } rounded-[8px] 
                 ${item.selected ? "bg-[#7E8082]" : "bg-[#ECECEC]"
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
                    </Panel>
                </Collapse>
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

export default Amenities;
