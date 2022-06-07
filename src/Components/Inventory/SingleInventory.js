import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useInventoryItems from "../CUSTOM_HOOK/useInventoryItems";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";
import axios from "axios";

const SingleInventory = () => {
    //always come top of the page after clicking from other page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { pid } = useParams();
    const navigate = useNavigate();

    const [products] = useInventoryItems();
    const matched = products.find((item) => item?._id === pid);

    let [updatingProduct, setUpdated] = useState("");

    //setting values of matched in updated
    useEffect(() => {
        setUpdated(matched);
    }, [matched]);

    //deleting single quantity
    const deleteQuantity = () => {
        const updatedQuantity = updatingProduct?.quantity - 1;

        if (updatedQuantity < 0) {
            return toast.warning("The Product Is Sold-Out can't reduce more ", {
                autoClose: 2000,
            });
        }

        updatingProduct = {
            ...updatingProduct,
            quantity: updatedQuantity,
        };

        //using axios for updating
        axios.put(`https://quiet-springs-92968.herokuapp.com/inventory/${pid}`, updatingProduct).then((res) => {
            if (res?.data?.acknowledged) {
                setUpdated(updatingProduct);
            }
        });
    };

    //updating quantity by form
    const updateQuantitybyForm = (e) => {
        e.preventDefault();
        const quantity = e.target.number.value;

        if (parseInt(quantity) < 0 || !quantity) {
            return toast("Please put a valid number");
        }

        updatingProduct = {
            ...updatingProduct,
            quantity: parseInt(quantity),
        };

        //using axios for updating
        axios.put(`https://quiet-springs-92968.herokuapp.com/inventory/${pid}`, updatingProduct).then((res) => {
            if (res?.data?.acknowledged) {
                setUpdated(updatingProduct);
            }
        });

        e.target.reset();
    };

    return (
        <div style={{ overflowX: "hidden", overflowY: "hidden" }} className="md:px-28 px-5">
            <div className="flex md:flex-row flex-col md:justify-between items-center mt-20 mb-10 gap-10">
                <div
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className="border-2 p-6 border-[#ad6449] w-full flex md:flex-row flex-col items-center gap-5 bg-[#EEEEF0]"
                >
                    <div className="text-center">
                        <img className="md:h-[30rem] h-[25rem] md:w-[30rem]" src={updatingProduct?.image} alt="" />
                        <h1 className="text-4xl font-semibold pt-5 text-[#b96c50]">{updatingProduct?.name}</h1>
                    </div>

                    <div className="text-xl font-semibold">
                        <div className="text-gray-600">
                            <h1 className="md:text-2xl">Id : {updatingProduct?._id}</h1>
                            <h2 className="md:text-2xl py-2">Price : ${updatingProduct?.price}</h2>
                            <p>Description : {updatingProduct?.description}</p>
                            <p className="py-2">
                                Quantity left : {updatingProduct ? updatingProduct?.quantity : updatingProduct?.quantity}{" "}
                                pieces
                            </p>

                            <p>Supplier : {updatingProduct?.supplier} Brand LTD.</p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={deleteQuantity}
                                className="flex items-center px-4 py-2 mt-10 border-2 border-[#ad6449] hover:text-green-400 duration-300 hover:bg-[#ad6348]"
                            >
                                <TiTick className="text-2xl "></TiTick> Delivered
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className="border-2 md:w-1/2 w-full border-[#ad6449] px-5 h-96 text-gray-600"
                >
                    <h1 className="text-center pt-16 text-3xl font-semibold pb-8">Restock the Items</h1>
                    <form onSubmit={updateQuantitybyForm}>
                        <input
                            className="w-full py-2 px-3 focus:outline-none bg-slate-100"
                            type="number"
                            name="number"
                            id=""
                        />

                        <input
                            className="w-full mt-4 py-2 cursor-pointer bg-[#ad6449] text-[aliceblue] font-semibold"
                            type="submit"
                            value="Restock"
                        />
                    </form>
                </div>
            </div>
            <div className="text-center">
                <button
                    onClick={() => navigate("/inventory")}
                    className="py-3 px-5 mt-10 border border-[#ad6449] font-semibold text-[#C76F4F] hover:bg-[#ad6449] duration-300 hover:text-[aliceblue] "
                >
                    Manage Inventory
                </button>
            </div>
        </div>
    );
};

export default SingleInventory;