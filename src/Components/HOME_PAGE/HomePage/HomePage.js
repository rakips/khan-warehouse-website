import React, { useEffect } from "react";
import ExperienceSide from "../ExperienceSide/ExperienceSide";
import InventoryPart from "../InventoryPart/InventoryPart";
import LocationPart from "../LocationPart/LocationPart";
import OurService from "../OurService/OurService";
import HomeBanner from "./HomeBanner/HomeBanner";

const HomePage = () => {
    //refresh and get top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <InventoryPart></InventoryPart>
            <OurService></OurService>
            <ExperienceSide></ExperienceSide>
            <LocationPart></LocationPart>
        </div>
    );
};

export default HomePage;