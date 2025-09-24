import React, { use } from "react";
import "../css/player.css";


// battingStyle: "Left-hand";
// bowlingStyle: "Right-arm medium fast";
// country: "England";
// flag: "https://flagcdn.com/gb.svg";
// image: "https://resources.pulse.icc-cricket.com/players/210/1154.png";
// name: "Ben Stokes";
// price: 16;
// rating: 90;
// type: "Allrounder";

const player = ({Player}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Playerlist = use(Player);
  return (
    <>
      <div className="container mx-auto mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-10">
        {
          Playerlist.map( (player) => <div className="p-4 border flex flex-col border-gray-300 rounded-2xl">
        <img
          src={player.image}
          alt=""
          className="plyerImage "
        />
        <div className="flex mt-4 gap-3 items-center">
          <img src="../public/assets/user 1.png" alt=""  />
          <h1 className="playerName">{player.name}</h1>
        </div>
        <div className="flex justify-between items-center mt-4 ">
          <div className="flex gap-1.5">
            <img src={player.flag} alt="" className="plyerFlag"/>
            <p className="playerCountry">{player.country}</p>
          </div>
          <h1 className="playerCatagory">{player.type}</h1>
        </div>
        <div className="mt-6 playerRating">Rating: {player.rating}</div>
        <div className="flex justify-between items-center mt-2 gap-2">
          <div className="playerBat">Batting:&nbsp;{player.battingStyle}</div>
          <div className="playerBat">Blowing:&nbsp;{player.bowlingStyle}</div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="playerPrice">Price: {player.price}cr</div>
          <button className="playerButton">Choose Player</button>
        </div>
      </div>)
        }
  
    </div>
    </>
  );
};

export default player;


    // <div className="p-4 border flex flex-col border-gray-300 rounded-2xl">
    //     <img
    //       src="../public/assets/Rectangle 2.png"
    //       alt=""
    //       className="plyerImage "
    //     />
    //     <div className="flex mt-4 gap-3 items-center">
    //       <img src="../public/assets/user 1.png" alt="" className="plyerFlag" />
    //       <h1 className="playerName">Viral Kohli</h1>
    //     </div>
    //     <div className="flex justify-between items-center mt-4 ">
    //       <div className="flex gap-1.5">
    //         <img src="../public/assets/report 1.png" alt="" />
    //         <p className="playerCountry">India</p>
    //       </div>
    //       <h1 className="playerCatagory">All-Rounder</h1>
    //     </div>
    //     <div className="mt-6 playerRating">Rating</div>
    //     <div className="flex justify-between items-center mt-2">
    //       <div className="playerBat">Left-Hand-Bat</div>
    //       <div className="playerBlow">Left-Hand-blower</div>
    //     </div>
    //     <div className="flex justify-between items-center mt-3">
    //       <div className="playerPrice">Price: $1500000</div>
    //       <button className="playerButton">Choose Player</button>
    //     </div>
    //   </div>