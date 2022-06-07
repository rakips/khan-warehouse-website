import React from "react";
import useBasicImage from "../../CUSTOM_HOOK/useBasicImage";
import LocationMap from "./LocationMap";

const LocationPart = () => {
    //getting brand logo
    const [basicImage] = useBasicImage();
    const warehouse = basicImage.find((item) => item.name === "warehouse");

    return (
        <div style={{ overflowX: "hidden", overflowY: "hidden" }} className="md:py-20 py-10 bg-[#F3F3F3] md:px-28 px-4">
            <h1 className="md:text-4xl text-3xl text-center mb-3 font-semibold text-[#ad6449] ">
                Find Our Warehouse Locaion From Anywhere
            </h1>

            <p className="md:text-2xl text-lg text-center mb-10 font-semibold text-[#ad6449]">
                We Are Open To Share Our Business
            </p>
            <div className="flex md:flex-row flex-col justify-between gap-5 items-center border border-[#ad6449] p-2">
                <LocationMap></LocationMap>

                <div
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                >
                    <img className="md:w-full md:h-[30rem] " src={warehouse?.image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LocationPart;