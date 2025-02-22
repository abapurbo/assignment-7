import PropTypes from "prop-types";
import Players from "../Players/Players";
import Selected from "../Selected/Selected";

const Banner = (props) => {
    const { handleToAddMoney, displayNone, handleIsDisplayNone,selectedPlayer,handleIsRemovePlayer } = props
    return (
        <div className="absolute top-24 w-full">
            <div className="text-center z-30 w-full ">
                <div className="bg-[url('bg-shadow.png')] rounded-3xl h-[500px] bg-black mx-10 flex justify-center items-center  my-4">
                    <div className="flex flex-col items-center justify-center">

                        <img className="w-72" src="banner-main.png" alt="" />
                        <div className="flex flex-col space-y-3 justify-center items-center ">
                            <h1 className="text-4xl font-bold text-[#FFFFFF]">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                            <p className="text-2xl font-medium text-gray-400">Beyond Boundaries Beyond Limits</p>
                            <div className="border-2 border-[#E7FE29] px-2 rounded-2xl">
                                <button onClick={() => {
                                    handleToAddMoney(6000000)

                                }
                                } className="bg-[#E7FE29] my-2 p-2 rounded-2xl text-[16px] font-semibold">Claim Free Credit</button>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* button section */}
            <div className="flex justify-end w-full z-30 sticky top-17  p-8 ">
                <div className="border py-3.5  border-gray-300 rounded-xl box-border  text-xl text-[#969696] font-semibold] ">
                    <span onClick={() => handleIsDisplayNone('addCart')} className={displayNone.cart ? `active px-8 py-3.5 rounded-l-xl  cursor-pointer` : ` px-8 py-3.5 rounded-l-xl  cursor-pointer`} >Available</span>
                    <span onClick={() => handleIsDisplayNone('availableCart')} className={displayNone.cart ? ` px-5 py-3.5 rounded-r-xl  cursor-pointer` : `active px-5 py-3.5 rounded-r-xl  cursor-pointer`}>Selected({selectedPlayer.length})</span>
                </div>
            </div>
           
                
                {
                    displayNone.cart ? <Players {...props}></Players> : <Selected handleIsDisplayNone={handleIsDisplayNone} selectedPlayer={selectedPlayer} handleIsRemovePlayer={handleIsRemovePlayer}></Selected>
                }
           
         
              
        </div>
    );
};
Banner.propTypes = {
    handleToAddMoney: PropTypes.func.isRequired,
    handleIsDisplayNone: PropTypes.func,
    displayNone: PropTypes.func,
    selectedPlayer:PropTypes.func,
    handleIsRemovePlayer:PropTypes.func
}
export default Banner;