import React from "react";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TableRow = ({ item, i, handleDeleteProduct }) => {
    const { name, quantity, price, image, _id } = item;
    const navigate = useNavigate();

    return (
        <tr className="bg-white  border-b">
            <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-600">{i + 1}</td>
            <td className="text-xl text-gray-600 font-light px-6 py-4 whitespace-nowrap">{name}</td>
            <td>
                <img className="w-7 mx-auto" src={image} alt="" />
            </td>
            <td className="text-xl text-gray-600 font-light px-6 py-4 whitespace-nowrap">{quantity}</td>
            <td className="text-xl text-gray-600 font-light px-6 py-4 whitespace-nowrap">${price}</td>
            <td className="text-3xl text-gray-600 font-light px-6 py-4 whitespace-nowrap flex space-x-10">
                <FaEdit
                    onClick={() => navigate(`/inventory/${_id}`)}
                    className="cursor-pointer hover:text-[#ad6449]"
                ></FaEdit>
                <BsTrash
                    onClick={() => handleDeleteProduct(_id)}
                    className="cursor-pointer hover:text-[#ad6449]"
                ></BsTrash>
            </td>
        </tr>
    );
};

export default TableRow;