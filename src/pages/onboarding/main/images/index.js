import React from "react";

import rect from "../../../../assets/images/svgs/rect.svg";

import img1 from "../../../../assets/images/pngs/img1.png";
import img2 from "../../../../assets/images/pngs/img2.png";

import { FaTrashAlt } from "react-icons/fa";

const Images = ({ currentID, setCurrentID, decrementId, incrementId }) => {

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

            <div className="grid md:grid-cols-3 grid-cols-1 mt-[40px] gap-40">
                <div className="col-span-2">
                    <p className="text-2xl text-[#323F4B]">
                        Choose image type
                    </p>

                    <div className="mt-[56px]">
                        <img src={img1} alt="img" className="w-full mb-[10px]" />

                        <div className="flex justify-between items-center gap-[10px]">
                            <select className="w-full h-[60px] px-5 bg-[#F4F4F4] rounded-[5px]" placeholder="Select Image Type" >
                                <option value="demo">Demo</option>
                            </select>

                            <span className="flex justify-center items-center shadow-md bg-white ml-[45px] p-4">
                                <FaTrashAlt className="text-[#FF0000] text-2xl cursor-pointer" />
                            </span>
                        </div>
                    </div>
                    <div className="mt-[56px]">
                        <img src={img2} alt="img" className="w-full mb-[10px]" />

                        <div className="flex justify-between items-center gap-[10px]">
                            <select className="w-full h-[60px] px-5 bg-[#F4F4F4] rounded-[5px]" placeholder="Select Image Type" >
                                <option value="demo">Demo</option>
                            </select>

                            <span className="flex justify-center items-center shadow-md bg-white ml-[45px] p-4">
                                <FaTrashAlt className="text-[#FF0000] text-2xl cursor-pointer" />
                            </span>
                        </div>
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
                    <p className="text-lg uppercase text-black">Upload Images</p>
                    

                    <img
                        src={preview}
                        alt="rect"
                        id="viewer"
                        className="mb-[20px] mt-[56px] w-full h-220px object-cover"
                    />

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

export default Images;
