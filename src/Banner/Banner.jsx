import PropTypes from "prop-types";
import Players from "../Players/Players";
const Banner = ({handleToAddMoney,handleToChoosePlayer}) => {
   
    return (
        <div >
        <div className="text-center z-30 absolute  mt-28 w-full">
            <div className="bg-[url('bg-shadow.png')] rounded-3xl h-[500px] bg-black mx-10 flex justify-center items-center  my-4">
                <div className="flex flex-col items-center justify-center">

                    <img className="w-72" src="banner-main.png" alt="" />
                    <div className="flex flex-col space-y-3 justify-center items-center ">
                        <h1 className="text-4xl font-bold text-[#FFFFFF]">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="text-2xl font-medium text-gray-400">Beyond Boundaries Beyond Limits</p>
                        <div className="border-2 border-[#E7FE29] px-2 rounded-2xl">
                            <button onClick={()=>{
                                handleToAddMoney(6000000)
                            
                            }
                                } className="bg-[#E7FE29] my-2 p-2 rounded-2xl text-[16px] font-semibold">Claim Free Credit</button>
                          
                       
                        </div>
                       
                    </div>
                </div>        
            </div>
           
            <Players handleToChoosePlayer={handleToChoosePlayer}></Players>
        </div>
       
        </div>
    );
};
Banner.propTypes={
    handleToAddMoney:PropTypes.func.isRequired,
    handleToChoosePlayer:PropTypes.func
}
export default Banner;