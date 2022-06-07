import axios from "axios";
import React, { useEffect, useState } from "react";

const useBasicImage = () => {
    const [basicImage, setBasicImage] = useState([]);

    useEffect(() => {
        axios.get("https://quiet-springs-92968.herokuapp.com/basicimages").then((res) => {
            setBasicImage(res?.data);
        });
    }, []);
    return [basicImage];
};

export default useBasicImage;