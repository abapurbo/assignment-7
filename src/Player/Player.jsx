import PropTypes from "prop-types";
import { TiFlag } from "react-icons/ti";;
import { FaRegCircleUser } from "react-icons/fa6";
const Player = ({ player,handleToChoosePlayer}) => {
    const { name, price, img, batting_style, country } = player
    return (
        <div className="rounded-2xl p-4 box-border border-1">
            <div className="box-border h-60  ">
                <img className="w-full h-full object-down rounded-2xl" src={img} alt="" />
            </div>
            <div>
                <div className="flex flex-col ">
                    <h1 className="text-start text-xl font-semibold my-3 flex items-center gap-1.5" ><FaRegCircleUser className="text-2xl" />{name}</h1>
                    <div className=" flex justify-between  items-center">
                        <h3 className="flex  justify-between items-center text-[16px] text-gray-500  "> <TiFlag className="text-2xl"/> {country}</h3>
                        <button className="btn p-2 border-2 rounded-xl border-gray-200">All-Rounder</button>
                    </div>
                    <hr className="mt-4" />

                </div>
       
                <div className="flex flex-col">
                   <h1 className=" text-start text-[19px] font-semibold mt-2">Rating</h1>
                   <div className="flex flex-wrap justify-between text-[18px] mt-2 font-semibold   gap-8 ">
                    <p >{batting_style}</p>
                    <p className="text-gray-400">{batting_style}</p>
                    <p >Price:${price}</p>
                    <button onClick={()=>handleToChoosePlayer(player)} className="border-1 border-gray-400 rounded-xl p-2">Choose Player</button>
                   </div>
                </div>
            </div>

        </div>
    );
};
Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleToChoosePlayer:PropTypes.func.isRequired,
}
export default Player;