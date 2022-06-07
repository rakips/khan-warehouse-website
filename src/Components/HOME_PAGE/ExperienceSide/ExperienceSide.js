import React from "react";
import CountUp from "react-countup";
import { BiBadgeCheck } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { BsFlower1 } from "react-icons/bs";
const ExperienceSide = () => {
    return (
        <div className="flex md:flex-row flex-col gap-10 md:gap-0 items-center justify-evenly my-20 py-20 bg-[#EEEEF0]">
            <div className="text-[#C76F4F]">
                <h1 className="text-6xl text-center mx-auto font-semibold  border-b border-[#C76F4F] w-1/2">
                    <BiBadgeCheck className="mx-auto"></BiBadgeCheck>
                    <CountUp end={15} />
                </h1>
                <p className="text-xl font-semibold py-2">Years Of Experience</p>
            </div>
            <div className="text-[#C76F4F]">
                <h1 className="text-6xl text-center mx-auto font-semibold w-1/2 border-b border-[#C76F4F]">
                    <FaRegHandshake className="mx-auto"></FaRegHandshake> <CountUp end={42} />
                </h1>
                <p className="text-xl font-semibold py-2">Partners Worldwide</p>
            </div>
            <div className="text-[#C76F4F]">
                <h1 className="text-6xl text-center mx-auto font-semibold w-1/2 border-b border-[#C76F4F]">
                    <IoIosPersonAdd className="mx-auto w-1/2"></IoIosPersonAdd> <CountUp end={11} />
                </h1>
                <p className="text-xl font-semibold py-2">Qualified Speciaists</p>
            </div>
            <div className="text-[#C76F4F]">
                <h1 className="text-6xl text-center mx-auto font-semibold w-1/2 border-b border-[#C76F4F]">
                    <BsFlower1 className="mx-auto w-1/2"></BsFlower1>
                    <CountUp end={49} />+
                </h1>
                <p className="text-xl font-semibold py-2">Exclusive Fragnances</p>
            </div>
        </div>
    );
};

export default ExperienceSide;