import React from "react";
import '../css/player.css'

const player = () => {
    return (
        <div className="container mx-auto mt-15 grid grid-cols-3">
            <div className="p-4 border flex flex-col border-gray-300 rounded-2xl">
                <img
                    src="../public/assets/Rectangle 2.png"
                    alt=""
                    className="plyerImage "
                />
                <div className="flex mt-4 gap-3 items-center">
                    <img src="../public/assets/user 1.png" alt="" className="plyerFlag"/>
                    <h1 className="playerName">Viral Kohli</h1>
                </div>
                <div className="flex justify-between items-center mt-4 ">
                    <div className="flex gap-1.5">
                        <img src="../public/assets/report 1.png" alt="" />
                        <p className="playerCountry">India</p>
                    </div>
                    <h1 className="playerCatagory">All-Rounder</h1>
                </div>
                <div className="mt-6 playerRating">Rating</div>
                <div className="flex justify-between items-center mt-2">
                    <div className="playerBat">Left-Hand-Bat</div>
                    <div className="playerBlow">Left-Hand-blower</div>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <div className="playerPrice">Price: $1500000</div>
                    <button className="playerButton">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default player;
