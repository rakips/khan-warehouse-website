import React from "react";
import { useNavigate } from "react-router-dom";
import useInventoryItems from "../../CUSTOM_HOOK/useInventoryItems";
import ProductCard from "../../ProductCard/ProductCard";

const InventoryPart = () => {
    const [products] = useInventoryItems();
    const navigate = useNavigate();
    return (
        <div style={{ overflowX: "hidden", overflowY: "hidden" }} className="my-28">
            <div className="pb-10 text-[#9B5A43] font-semibold">
                <h1 className="text-5xl py-3 text-center">Our Perfume Product</h1>
                <h2 className="text-3xl text-center">Become More Confident & Show Your Better Self</h2>
            </div>

            <div>
                <div className="grid md:grid-cols-2 place-items-center gap-10 md:px-28  px-5">
                    {products.slice(0, 6).map((item) => (
                        <ProductCard item={item} key={item._id}></ProductCard>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={() => navigate("/inventory")}
                        className="py-3 px-5 mt-10 border border-[#9B5A43] font-semibold text-[#C76F4F] hover:bg-[#9B5A43] duration-300 hover:text-[aliceblue] "
                    >
                        Manage Inventory
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryPart;