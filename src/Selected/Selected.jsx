import PropTypes from "prop-types";
const Selected = ({selectedPlayer}) => {

console.log('selected',selectedPlayer)


    return (
        <div className="border-4 mx-10">

            <div>
                <h1 className="text-[28px] text-black font-medium">Selected Player({selectedPlayer.length}/6)</h1>
            </div>
            
              selectedPlayer.forEach(p)

           
        </div>
    );
};
Selected.propTypes={
    selectedPlayer:PropTypes.func,
}
export default Selected;