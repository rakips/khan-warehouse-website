import React from "react";
import {
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ComposedChart,
    Legend,
    Line,
    Bar,
} from "recharts";

import { BsCartPlus } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";

const SalesInfo = ({ products }) => {
    let data = products.map((item) => {
        return {
            name: item.name,
            sellingPrice: item.price,
            buyingPrice: item?.price * 0.8,
            revenue: ((item.price + item.price * 0.8) * 15) / 100,
        };
    });

    return (
        <div>
            <h1 className="text-center mt-10 text-3xl font-semibold text-[#ad6449]">
                This Weeks Sells & Purchases
            </h1>
            <div className="md:px-28 px-1 md:my-12 my-10 ">
                <ResponsiveContainer width="100%" height={600}>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            bottom: 20,
                            left: -20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="sellingPrice" barSize={20} fill="#ad6449" />
                        <Line type="monotone" dataKey="buyingPrice" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            <div className="flex md:flex-row flex-col gap-10 justify-between items-center md:px-28 px-4 mb-16 ">
                <div className="flex justify-around items-center gap-4 bg-[#EEEEF0] p-4 rounded-md shadow-xl w-full">
                    <div>
                        <BsCartPlus className="text-5xl text-[#AD6449]"></BsCartPlus>
                    </div>
                    <div className="text-[#022438]">
                        <p>Today's Sale</p>
                        <h1 className="text-3xl">1780 $</h1>
                    </div>
                </div>
                <div className="flex justify-around items-center shadow-xl gap-4 bg-[#EEEEF0] p-4 rounded-md w-full">
                    <div>
                        <FaHandHoldingUsd className="text-5xl text-[#AD6449]"></FaHandHoldingUsd>
                    </div>
                    <div className="text-[#022438]">
                        <p>Income</p>
                        <h1 className="text-3xl">2300 $</h1>
                    </div>
                </div>
                <div className="flex justify-around items-center shadow-xl gap-4 bg-[#EEEEF0] p-4 rounded-md w-full">
                    <div>
                        <GiMoneyStack className="text-5xl text-[#AD6449]"></GiMoneyStack>
                    </div>
                    <div className="text-[#022438]">
                        <p>Expenses</p>
                        <h1 className="text-3xl">1880 $</h1>
                    </div>
                </div>
                <div className="flex justify-around items-center shadow-xl gap-4 bg-[#EEEEF0] p-4 rounded-md w-full">
                    <div>
                        <GiTakeMyMoney className="text-5xl text-[#AD6449]"></GiTakeMyMoney>
                    </div>
                    <div className="text-[#022438]">
                        <p>Profit</p>
                        <h1 className="text-3xl">412 $</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesInfo;