import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const LocationMap = () => {
    return (
        <div
            style={{ overflowX: "hidden", overflowY: "hidden" }}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
        >
            <MapContainer
                className="input-map md:h-[30rem] h-[20rem] md:w-[45vw] w-[85vw] z-0"
                center={[23.810331, 90.412521]}
                zoom={13}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[23.810331, 90.412521]} />
            </MapContainer>
        </div>
    );
};

export default LocationMap;