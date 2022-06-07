import React from "react";

const MyItemCard = ({ item, handleDeleteMyItem }) => {
    const { _id, name, image, description, price, quantity, supplier } = item;
    return (
        <div data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-once="false">
            <div className="bg-[#EEEEF0] border border-[#c76f4f] flex md:flex-row flex-col items-center md:px-8 px-4 py-5 md:gap-10 gap-5 rounded-lg h-full">
                <div>
                    <img className="w-96 md:h-80 h-[30rem]" src={image} alt="" />
                    <h1 className="text-3xl font-semibold py-3 text-[#c76f4f] text-center">{name}</h1>
                </div>
                <div className="text-[#c76f4f] font-semibold">
                    <h2 className="text-xl pb-2">{description}</h2>
                    <h2 className="text-2xl">Price: ${price}</h2>
                    <p className="text-xl py-1">Quantity : {quantity}</p>
                    <p className="text-xl">Supplier: {supplier}</p>

                    <div className="flex justify-end items-center mt-8">
                        <button
                            onClick={() => handleDeleteMyItem(_id)}
                            className="px-4 py-2 border-2 border-[#c76f4f] hover:bg-[#c76f4f] hover:text-[aliceblue] duration-300"
                        >
                            Delete Item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItemCard;