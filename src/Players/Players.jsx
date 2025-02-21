import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";
import './Players.css'
const Players = ({ handleToChoosePlayer }) => {

    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('Fake data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div >


            <div className=" flex justify-between absolute top-[570px]  items-center mx-10 p-4">
                <p className="text-[28px] text-[#131313] font-bold ">Available Players</p>

            </div>


            <div className="grid grid-cols-3  mx-10 p-4   gap-6">

                {
                    players.map(player => 
                        <Player key={player.id} player={player} handleToChoosePlayer={handleToChoosePlayer}></Player>
                    )
                }
            </div>
        </div >

    );
};
Players.propTypes = {
    handleToChoosePlayer: PropTypes.func,
    handleIsDisplayNone: PropTypes.func,
    displayNone: PropTypes.func
}
export default Players;