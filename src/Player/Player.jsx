import PropTypes from "prop-types";
import { TiFlag } from "react-icons/ti";;
const Player = ({ player }) => {
    const { name, price, img, batting_style, country } = player
    return (
        <div className="rounded-2xl border-1">
            <div className="box-border  w-96 h-60  p-5 ">
                <img className="w-full h-full object-cover bg-center rounded-2xl" src={img} alt="" />
            </div>
            <div>
                <div className="flex flex-col">
                    <h1>{name}</h1>
                    <div className=" flex justify-between px-1 items-center">
                        <h3 className="flex  justify-between items-center text-[16px] text-gray-500  "> <TiFlag className="text-2xl"/> {country}</h3>
                        <button className="btn p-2 border-2 rounded-xl border-gray-200">All-Rounder</button>
                    </div>
                    <hr />

                </div>
       
                <div className="flex flex-col">
                   <h1 className="border-3 text-start">Rating</h1>
                   <div className="grid grid-cols-2">
                    <p>{batting_style}</p>
                    <p>{batting_style}</p>
                    <p>Price:${price}</p>
                    <button>Choose Player</button>
                   </div>
                </div>
            </div>

        </div>
    );
};
Player.propTypes = {
    player: PropTypes.object.isRequired,
}
export default Player;