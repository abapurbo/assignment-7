import PropTypes from "prop-types";
import { IoTrashOutline } from "react-icons/io5";
const SelectedPlayer = ({select,handleIsRemovePlayer}) => {
    const {name,img,batting_style,price}=select
    return (
        <div className=" flex justify-between items-center border-2 border-gray-400 mb-8 p-4 rounded-xl">
            <div className="flex items-center ">
               <img className='w-16 h-17 object-cover rounded-xl' src={img} alt="player image" />
                <h1 className="flex flex-col ml-3">
                    <span className="text-[19px] font-semibold">{name}</span>
                    <span className="text-[15px] text-gray-500 font-semibold">{batting_style}</span>
                    <span className="text-sm font-semibold text-gray-500">${price}</span>
                </h1>
            </div>
            <div>
            <IoTrashOutline onClick={()=>handleIsRemovePlayer(select)} className="text-xl text-red-400 cursor-pointer"/>
            </div>
            
        </div>
    );
};
SelectedPlayer.propTypes={
    select:PropTypes.object,
    handleIsRemovePlayer:PropTypes.func,
    
}
export default SelectedPlayer;