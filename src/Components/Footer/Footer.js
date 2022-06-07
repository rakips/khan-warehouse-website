import React from "react";
import useBasicImage from "../CUSTOM_HOOK/useBasicImage";

const Footer = () => {
    const [basicImage] = useBasicImage();
    const logo = basicImage.find((item) => item?.name === "brand-logo");
    return (
        <div className="mt-28 md:px-28 md:py-10 px-5 py-10 bg-[#6b0a15]">
            <div className="flex justify-between items-center md:flex-row flex-col">
                <img className="w-52" src={logo?.image} alt="" />
                <div className="md:w-1/3 w-full flex items-center space-x-5 mt-10">
                    <input
                        type="email"
                        placeholder="Email"
                        className="font-semibold bg-transparent border-b border-[#ad6449] w-full pt-4 pb-1 mb-4 focus:outline-none"
                        name="email"
                    />
                    <input className="px-5 py-2 text-xl text-[aliceblue] border border-[#ad6449]" type="submit" />
                </div>
            </div>

            <div className="pt-16 text-[aliceblue] flex md:items-center gap-16 flex-col justify-between md:flex-row">
                <div className="md:w-2/4">
                    <h1 className="border-l-4 border-l-[#ad6449] pl-3 text-3xl font-semibold mb-6">About Us</h1>
                    <p>
                        Our Ware house is more than just another average all over shop. We sell not only top quality
                        productss, but give our customers positive shopping experience and with best price. We will be glad
                        to become your No. 1 products retailer.
                    </p>
                </div>

                <div>
                    <div>
                        <h1 className="border-l-4 border-l-[#ad6449] pl-3 text-2xl font-semibold mb-10">Contacts</h1>

                        <p className="text-sm text-[#C76F4F]">Phone</p>
                        <p className="pb-3 text-xl">+8801621603649</p>

                        <p className="text-sm text-[#C76F4F]">Address</p>
                        <p className="pb-3 text-xl">Barishal</p>

                        <p className="text-sm text-[#C76F4F]">E-mail</p>
                        <p className="pb-3 text-xl">mk1000Rakib@gmail.com</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="border-l-4 border-l-[#ad6449] pl-3 text-2xl font-semibold mb-10">Quick Links</h1>

                        <p className="pb-3 text-xl">Privacy Policy</p>
                        <p className="pb-3 text-xl">Terms of Service</p>
                        <p className="pb-3 text-xl">Credit</p>
                        <p className="pb-3 text-xl">FAQ</p>
                    </div>
                </div>
            </div>
            <p className="text-center pt-5 text-gray-400">&copy; Copyright 2022 | Khan's Shop by Rakibul Hasan </p>
        </div>
    );
};

export default Footer;