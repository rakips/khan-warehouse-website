import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import SalesInfo from "./SalesInfo";

const ManageInventory = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [size, setSize] = useState(10);
    const [page, setPage] = useState(0);
    const [tPage, setTPage] = useState(0);

    const button = [...Array(Math.ceil(tPage)).keys()];

    useEffect(() => {
        (async () => {
            await axios
                .get(`https://quiet-springs-92968.herokuapp.com/inventory?pageNum=${page}&size=${size}`)
                .then((res) => {
                    setProducts(res?.data?.result);
                    setTPage(res?.data?.count / size);
                });
        })();
    }, [size, page]);

    const handleDeleteProduct = (id) => {
        const confirm = window.confirm("Are you sure wants to delete?");

        if (!confirm) {
            toast("Invalid Operation", {
                autoClose: 2000,
            });
        } else {
            //used axios for deleting
            axios.delete(`https://quiet-springs-92968.herokuapp.com/deleteItem/${id}`).then((res) => {
                if (res?.data?.acknowledged) {
                    toast("The Item you wants to delete was deleted", {
                        autoClose: 2000,
                    });
                    const remaining = products.filter((item) => item._id !== id);
                    setProducts(remaining);
                }
            });
        }
    };

    return (
        <div>
            <SalesInfo products={products}></SalesInfo>

            <div className="flex flex-col w-full">
                <div className="overflow-x-auto mb-5">
                    <div className="pb-10 inline-block min-w-full ">
                        <div className="overflow-hidden">
                            <table className="w-full text-center">
                                <thead className="border-b bg-[#ad6449]">
                                    <tr>
                                        <th scope="col" className="text-xl font-medium text-white px-6 py-4">
                                            Serial
                                        </th>
                                        <th scope="col" className="text-xl font-medium text-white px-6 py-4">
                                            Name
                                        </th>
                                        <th scope="col" className="text-xl font-medium text-white px-6 py-4">
                                            Image
                                        </th>
                                        <th scope="col" className="text-xl font-medium text-white px-6 py-4">
                                            Quantity
                                        </th>
                                        <th scope="col" className="text-xl font-medium text-white px-6 py-4">
                                            Price
                                        </th>
                                        <th scope="col" className="text-xl font-medium text-white px-6 py-4"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item, i) => (
                                        <TableRow
                                            key={item._id}
                                            item={item}
                                            i={i}
                                            handleDeleteProduct={handleDeleteProduct}
                                        ></TableRow>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center md:space-x-5 space-x-3 justify-center my-8">
                {button.map((n, i) => (
                    <button
                        onClick={() => setPage(n)}
                        key={i}
                        className={`${page === n ? "bg-[#ad6449] text-[aliceblue]" : ""
                            } px-3 py-1 border border-[#ad6449] font-semibold duration-300 hover:bg-[#ad6449] hover:text-[aliceblue]`}
                    >
                        {n + 1}
                    </button>
                ))}
                <select defaultValue={size} className="p-2" onChange={(e) => setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>

            {/* add items site */}
            <div className="flex justify-center mb-28">
                <button
                    onClick={() => navigate("/addinventory")}
                    className="flex items-center text-gray-600  md:py-3 py-2 md:px-6 px-4 md:text-2xl text-lg font-semibold border border-[#ad6449] hover:bg-[#ad6449] hover:text-[aliceblue] duration-300"
                >
                    <AiOutlinePlus></AiOutlinePlus> Add Product
                </button>
            </div>
        </div>
    );
};

export default ManageInventory;