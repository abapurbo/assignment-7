
import Navbar from "./Component/Header/Banner/Navbar"
import Banner from "./Banner/Banner"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
function App() {
 const [addMoney,setAddMoney]=useState(0)
 console.log(addMoney)
 const notify = () =>toast.success("Credit added to your account",{
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
const handleToAddMoney=price=>{
  if(price){
    notify()
    setAddMoney(addMoney+price)
  }
 
}
  return (
    <div className="max-w-7xl  ">
    
      <Navbar addMoney={addMoney} ></Navbar>
      <Banner handleToAddMoney={handleToAddMoney} notify={notify}></Banner>
      <ToastContainer />
    </div>
  )
}

export default App
