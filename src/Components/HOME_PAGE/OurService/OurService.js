import React from "react";
import useBasicImage from "../../CUSTOM_HOOK/useBasicImage";

const OurService = () => {
    const [basicImage] = useBasicImage();
    const service1 = basicImage.find((i) => i.name === "service-1");
    const service2 = basicImage.find((i) => i.name === "service-2");
    const service3 = basicImage.find((i) => i.name === "service-3");
    const service4 = basicImage.find((i) => i.name === "service-4");

    return (
        <div style={{ overflowX: "hidden", overflowY: "hidden" }} className="text-center my-20 py-20 bg-[#EEEEF0]">
            <div className="pb-10">
                <h1 className="text-5xl font-semibold text-[#ad6449]">Our Services</h1>
                <p className="text-3xl py-4 font-semibold text-[#ad6449]">
                    Freight Forward Services by Cologne Brand
                </p>
            </div>

            <div className="flex md:flex-row flex-col items-center md:justify-evenly gap-10 text-center text-xl text-[#C76F4F] font-semibold">
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                >
                    <img src={service1?.image} alt="" />
                    <h2 className="py-4">Premium Services</h2>
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                >
                    <img src={service2?.image} alt="" />
                    <h2 className="py-4">Express Services</h2>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="false">
                    <img src={service3?.image} alt="" />
                    <h2 className="py-4">Cargo Services</h2>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                >
                    <img src={service4?.image} alt="" />
                    <h2 className="py-4">Courier Services</h2>
                </div>
            </div>
        </div>
    );
};

export default OurService;