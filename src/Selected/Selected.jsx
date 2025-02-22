import PropTypes from "prop-types";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const Selected = ({ selectedPlayer, handleIsRemovePlayer, handleIsDisplayNone }) => {
    return (
        <div className="mx-10 mb-10 ">
            <h1 className="text-[28px] absolute top-146 text-black  font-semibold">Selected Player({selectedPlayer.length}/6)</h1>
            {
                selectedPlayer.map((select, idx) => <SelectedPlayer key={idx} select={select} handleIsRemovePlayer={handleIsRemovePlayer}></SelectedPlayer>)
            }

            <button onClick={() => handleIsDisplayNone('addCart')} className="border-1 border-b-fuchsia-900 rounded-xl py-3 px-1"><span className="rounded-xl bg-[#E7FE29] text-[18px] font-semibold  p-3">Add more player</span></button>
        </div>
    );
};
Selected.propTypes = {
    selectedPlayer: PropTypes.func,
    handleIsRemovePlayer: PropTypes.func,
    handleIsDisplayNone: PropTypes.func
}
export default Selected;