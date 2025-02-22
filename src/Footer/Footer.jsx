

const Footer = () => {
    return (
       
        <div className="flex flex-col bg-[#06091A] justify-start  mt-76 pb-4
         w-full h-[770px] relative">
            <div className=" border-1 border-gray-300 bg-white/10  backdrop-blur rounded-3xl p-6 absolute bottom-[550px] w-[1150px] h-96  mx-16">
                {/* footer search section */}
                <div className=" bg-[url('bg-shadow.png')] bg-white h-full flex flex-col justify-center p-20  rounded-3xl">
                   <div className=" text-center space-y-2">
                     <h1 className="text-3xl text-black font-bold">Subscribe to our Newsletter</h1>
                     <h1 className="text-xl text-gray-500 font-medium ">Get the latest updates and news right in your inbox!</h1>
                      <label htmlFor="email">
                        <input className="border-2 tex-[16px] mt-2 border-gray-300 py-4  pl-8 pr-48 rounded-2xl " placeholder="Enter your email" type="email" name="" id="" />
                      </label>
                      <button className="ml-1.5  py-3.5 bg-linear-to-r from-[#FE9F30] to-[#E05C51] bg px-7 rounded-2xlt text-black text-xl font-bold rounded-xl" type="submit">Subscribe</button>
                   </div>
                </div>
                {/* ata footer main section */}

            </div>
            <div className=" absolute bottom-0 mb-42 mx-16 w-[1150px] h-86">
                <h1 className="flex justify-center items-center">
                <img  src="logo-footer.png" alt="" />
                </h1>
              
               <div className="flex justify-between  mt-8 ">
                <div className=" flex flex-col ">
                    <h1 className="text-white text-[18px]">About Us</h1>
                    <p className="text-[16px] w-56 text-gray-500">We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className=" w-60 space-y-4  ">
                    <h1 className="text-[18px] text-white font-semibold">Quick Links</h1>
                    <ul className="text-gray-500 ml-8 text-[18px] ">
                        <li type="circle">Home</li>
                        <li type="circle">Service</li>
                        <li type="circle">About</li>
                        <li type="circle">Contract</li>
                    </ul>
                </div>
                <div className=" w-86 ">
                    <h1 className="text-[18px] text-white font-semibold text-left ">Subscribe</h1>
                    <p className="text-[16px] my-2.5 text-gray-500 ">Subscribe to our newsletter for the latest updates.</p>
                    <label htmlFor="email">
                        <input className="bg-white py-3 pl-4 rounded-xl" type="email" placeholder="Enter your email" name="" id="" />
                    </label>
                    <button className="text-[18px] text-black font-bold bg-linear-to-r from-[#FE9F30] to-[#E05C51] py-2.5 px-3 rounded-xl ml-2" type="submit">Subscribe</button>
                </div>
               </div>
            </div>
        <div className=" border-1 border-t-gray-800 h-28   absolute bottom-0 w-full"></div>
          <p className="text-gray-400 absolute bottom-0 text-center my-10 mx-[465px]  ">&copy; 2024 Your Company All Rights Reserved.</p>
        </div>
        

    );
};

export default Footer;