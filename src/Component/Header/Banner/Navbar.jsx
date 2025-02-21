import { TbCoin } from "react-icons/tb";
import PropTypes from "prop-types";
const Navbar = ({addMoney}) => {
    return (
        <div>
            <div className="flex z-40 fixed w-full mt-0 justify-between px-10 space-y-2 py-4 bg-white/30 backdrop-blur">
                <img className="w-16" src="logo.png" alt="logo image" />
                <div className="flex justify-between items-center ">
                    <div className="space-x-7">
                        <span className="text-xl font-semibold text-gray-500">Home</span>
                        <span className="text-xl font-semibold text-gray-500">Fixture</span>
                        <span className="text-xl font-semibold text-gray-500">Teams</span>
                        <span className="text-xl font-semibold text-gray-500">Schedules</span>
                    </div>

                    <p className="flex justify-between  items-center space-x-2 p-2 ml-10 border-2 border-gray-200 rounded-[11px]">
                        <span className="text-xl font-semibold">{addMoney}</span>
                        <span className="text-xl font-semibold">Coin</span>
                        <TbCoin className="text-2xl text-[#F39E09] " />
                    </p>
                </div>
            </div>
        </div>
    );
};
Navbar.propTypes={
    addMoney:PropTypes.number
}
export default Navbar;