import axios from "axios";
import React, { useEffect, useState } from "react";

const useInventoryItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://quiet-springs-92968.herokuapp.com/inventory").then((res) => {
            setProducts(res?.data?.result);
        });
    }, []);

    return [products, setProducts];
};

export default useInventoryItems;