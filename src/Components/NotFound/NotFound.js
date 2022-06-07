import React from "react";
import useBasicImage from "../CUSTOM_HOOK/useBasicImage";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const [basicImage] = useBasicImage();
    const matched = basicImage.find((item) => item?.name === "404");

    const navigate = useNavigate();
    return (
        <div className="h-[90vh] flex flex-col items-center justify-center text-gray-700">
            <img className="md:h-[25rem]" src={matched?.image} alt="" />

            <h1 className="text-4xl font-semibold mt-8 py-2">Ooops! This Page is Not Found</h1>
            <p>The Requested page doesn't exist</p>

            <button
                onClick={() => navigate("/home")}
                className="flex items-center px-6 mt-5 py-3 border border-[#ad6449] hover:bg-[#ad6449] duration-300 hover:text-[aliceblue]"
            >
                <FaHome className="mr-2 text-2xl"></FaHome> Back to Home
            </button>
        </div>
    );
};

export default NotFound;