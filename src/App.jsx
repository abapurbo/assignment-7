
import Navbar from "./Component/Header/Banner/Navbar"
import Banner from "./Banner/Banner"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [addMoney, setAddMoney] = useState(0)
  const [selectedPlayer, setSelectedPlayer] = useState([])
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
    if (selectPlayer > addMoney) {
      toast.warn('Not found your coin', {
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
    else if (selectedPlayer.id == player.id) {
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
      setSelectedPlayer(player)
      console.log(player.price)


    }

  }
  return (
    <div className="max-w-7xl  ">

      <Navbar addMoney={addMoney} ></Navbar>
      <Banner handleToAddMoney={handleToAddMoney} handleToChoosePlayer={handleToChoosePlayer}></Banner>
      <ToastContainer />


    </div>
  )
}

export default App
