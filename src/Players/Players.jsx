import { useEffect, useState } from "react";
import Player from "../Player/Player";
const Players = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('Fake data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    console.log(players)
    return (
        <div className="relative ">
            <div className="flex justify-end sticky top-[84px] mx-10 p-4 ">
                <div className="border py-3.5 border-gray-300 rounded-xl box-border  text-xl text-[#131313 font-semibold] ">
                    <span className="px-8 py-3.5 rounded-l-xl bg-amber-200 ">Available</span>
                    <span className="px-5 py-3.5 rounded-r-xl bg-amber-300">Selected()</span>
                </div>
            </div>

            <div className=" flex justify-between absolute top-4  items-center mx-10 p-4">
                <p className="text-[28px] text-[#131313] font-bold ">Available Players</p>

            </div>
            <div className="grid grid-cols-3  mx-10 p-4   gap-6">

                {
                    players.map(player => <Player key={player.id} player={player}></Player>)
                }
            </div>
        </div>

    );
};

export default Players;