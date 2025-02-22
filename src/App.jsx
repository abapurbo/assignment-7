
import Navbar from "./Component/Header/Banner/Navbar"
import Banner from "./Banner/Banner"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [addMoney, setAddMoney] = useState(0)
  const [selectedPlayer, setSelectedPlayer] = useState([])
  console.log('selected',selectedPlayer)
  const [displayNone, setDisplayNone] = useState({
    cart: true,
    status: 'active'
  })

  const notify = () => toast.success("Credit added to your account", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",

  });

  // add money 
  const handleToAddMoney = price => {
    if (price) {
      notify()
      setAddMoney(addMoney + price)
    }

  }
  // choose player
  const handleToChoosePlayer = player => {
    const selectPlayer = player.price
    const checkInArray = selectedPlayer.find(select => select.id == player.id);
    if (selectPlayer > addMoney) {
      toast.warn('Not found your credit', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      })

    }

    else if (checkInArray) {
      toast.error('Player already selected', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })



    }
   
    else {
      if(selectedPlayer.length<6){
        toast.success(`Congrates!!,${player.name} is now in your squad`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
  
  
        });
        setAddMoney(addMoney - player.price)
  
  
        const newPlayer = [...selectedPlayer, player]
        setSelectedPlayer(newPlayer)
  
      }
      else{
        toast.error('Your are only 6 player selected', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    

    }

  }
  // display none section 
  const handleIsDisplayNone = status => {
    if (status == 'addCart') {
      setDisplayNone({
        cart: true,
        status: 'active'
      })
     
    }
    else{
      setDisplayNone({
        cart:false,
        status:'active'
      })
    }
  }
  // remove selected player 
  const handleIsRemovePlayer=select=>{
    console.log(select)
    const searchPlayer=selectedPlayer.filter(removePlayer=>removePlayer.id!=select.id)
     setSelectedPlayer(searchPlayer)
  }
  return (
    <div className="max-w-7xl relative ">

      <Navbar addMoney={addMoney} ></Navbar>
      <Banner handleIsDisplayNone={handleIsDisplayNone} displayNone={displayNone} handleToAddMoney={handleToAddMoney} handleToChoosePlayer={handleToChoosePlayer} selectedPlayer={selectedPlayer}  handleIsRemovePlayer={handleIsRemovePlayer}>
     
      </Banner>


      <ToastContainer />


    </div>
  )
}

export default App
