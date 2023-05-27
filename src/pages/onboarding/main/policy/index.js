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

const Policy = ({ currentID, setCurrentID, decrementId, incrementId }) => {

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
                    Choose Guest policies applcicable to your hotel
                </p>

                <p className="mt-[52px] pl-4 mb-[28px] text-[22px]">
                    <input type={"checkbox"} id="all" className="mr-[10px] cursor-pointer" />
                    <label htmlFor="all" className="cursor-pointer">Select All</label>
                </p>

                <Collapse accordion className="border-0 policy">
                    <Panel className="border-0 pl-0" header={<p className="text-2xl text-[#007FFF] ">
                        <input type={"checkbox"} id="general" className="mr-[10px] cursor-pointer" />
                        <label htmlFor="general" className="cursor-pointer">General Policies</label>
                    </p>} key="1">
                        <ol className="list-decimal list-inside">
                            <li className="text-xl">
                                Couples are welcome. Guests can check in using any local or outstation ID proof
                            </li>
                            <li className="text-xl">
                                General Booking Policy: Certain destinations may have different travel guidelines for specific times during the year. Please abide by all laws and guidelines as applicable
                            </li>
                            <li className="text-xl">
                                Policies are booking specific and would be informed to the guest at the time of booking or upon Check-In.
                            </li>
                            <li className="text-xl">
                                The primary guest must be at least 18 years of age to be able to check into the hotel.
                            </li>
                            <li className="text-xl">
                                It is mandatory for guests to present valid photo identification at the time of check-in. According to government regulations, a valid Photo ID has to be carried by every person above the age of 18 staying at the hotel. The identification proofs accepted are Aadhar Card, Driving License, Voter ID Card, and Passport. Without Original copy of valid ID the guest will not be allowed to check-in.
                            </li>
                            <li className="text-xl">
                                PAN card is not accepted as a valid ID card.

                            </li>
                            <li className="text-xl">
                                Pets are not allowed in the hotel premises.
                            </li>
                            <li className="text-xl">
                                Should any action by a guest be deemed inappropriate by the hotel, or if any inappropriate behaviour is brought to the attention of the hotel, the hotel reserves the right, after the allegations have been investigated, to take action against the guest.
                            </li>
                            <li className="text-xl">
                                Guests shall be liable for any damage, except normal wear and tear to Hotel asset. Guest shall keep the Hotel room in a good condition and maintain hygiene and cleanliness.
                            </li>
                            <li className="text-xl">
                                Extension of stay would be provided on current room rates, subject to availability. Current room rates can be different from the rates at which the rooms were booked.
                            </li>
                            <li className="text-xl">You  agree that hotels may deny entry of visitors to rooms. You will be solely responsible for entry of any visitor to your room, You will be liable for any damage to hotel assets and use of the hotel must comply with all applicable local, state, national, and international laws, and that you will not use the hotel for any illegal purpose.

                            </li>
                            <li className="text-xl">We do not charge cancellation fees for bookings cancelled within 10 minutes of creating the same booking. Any amount paid will be refunded. You can cancel your booking using our website or email .
                            </li>
                        </ol>
                    </Panel>
                    <Panel className="border-0 pl-0" header={<p className="text-2xl text-[#007FFF] ">
                        <input type={"checkbox"} id="long" className="mr-[10px] cursor-pointer" />
                        <label htmlFor="long" className="cursor-pointer">Long Stay Bookings</label>
                    </p>} key="2">
                        <p className="text-xl">
                            For bookings of more than 7 nights, you have to settle all outstanding payments on a weekly basis. Further accommodation is subject to settlement of the outstanding amount.
                        </p>
                    </Panel>
                    <Panel className="border-0 pl-0" header={<p className="text-2xl text-[#007FFF] ">
                        <input type={"checkbox"} id="triple" className="mr-[10px] cursor-pointer" />
                        <label htmlFor="triple" className="cursor-pointer">Triple Occupancy Policy</label>
                    </p>} key="3">
                        <p className="text-xl">
                            Some Hotels allow triple occupancy by providing an extra mattress for the third person for extra fee. However no extra bed is usually provided.
                        </p>
                    </Panel>
                    <Panel className="border-0 pl-0" header={<p className="text-2xl text-[#007FFF] ">
                        <input type={"checkbox"} id="visitor" className="mr-[10px] cursor-pointer" />
                        <label htmlFor="visitor" className="cursor-pointer">Visitor’s Policy</label>
                    </p>} key="3">
                        <p className="text-xl">
                            a. Some Hotels allow triple occupancy by providing an extra mattress for the third person for extra fee. However no extra bed is usually provided.a. Visitors are generally allowed to meet guests in the guest rooms during the day, except if there is an emergency. <br></br>
b. Visitors are not to be allowed to stay overnight.<br/>
c. The Hotel front desk requires all visitors to present a government approved photo identity prior to accessing guest floors/rooms.
                        </p>
                    </Panel>
                    <Panel className="border-0 pl-0" header={<p className="text-2xl text-[#007FFF] ">
                        <input type={"checkbox"} id="child" className="mr-[10px] cursor-pointer" />
                        <label htmlFor="child" className="cursor-pointer">Child’s Policy</label>
                    </p>} key="3">
                        <p className="text-xl">
                        Stay of 1 child up to 5 years of age is complementary without the use of an extra mattress. Breakfast charges may be applicable for the child.
                        </p>
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

export default Policy;
