import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
    const { _id, name, image, description, price, quantity, supplier } = item;

    const navigate = useNavigate();

    return (
        <div
            className="bg-[#EEEEF0] border border-[#c76f4f] flex md:flex-row flex-col items-center md:px-8 px-5 py-5 gap-10 rounded-lg h-full"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
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
                        onClick={() => navigate(`/inventory/${_id}`)}
                        className="px-4 py-2 border-2 border-[#c76f4f] hover:bg-[#c76f4f] hover:text-[aliceblue] duration-300"
                    >
                        Manage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;