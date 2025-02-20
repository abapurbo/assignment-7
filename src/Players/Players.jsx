import { useEffect, useState } from "react";
import Player from "../Player/Player";
const Players = () => {
    const [players, setPlayers]=useState([])
    useEffect(()=>{
        fetch('Fake data.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[])
console.log(players)
    return (
       <div className="grid grid-cols-3 border-4 mx-10 px-auto gap-6">
           {
            players.map(player=><Player key={player.id} player={player}></Player>)
           }
        </div>
    );
};

export default Players;