import React from "react";

function Login(){
  return <div className=" w-full overall-container">
  
  <div className="top-container">
  <div className="login flex bg-gray-100 justify-end ">
    <div className="pr-10 pt-2 pb-2"><p>Login</p></div> 
    <div className="pr-10 pt-2 pb-2"><p>Register</p></div>
    <div className="flex pr-10 pt-2 pb-2"><p>Day</p><img src="images/moon.png" className="h-6"></img></div>
    
  </div>
<div className="flex justify-around">
  <div><p>logo</p></div>

  <div className="flex ">
    <p>Home</p>
    <p>Hotels</p>
    <p>Hostels</p>
    <p>Flight</p>
    <p>Book</p>
  </div>
  <div><input type="text"></input></div>
</div>
<img src="https://www.villahostels.com/wp-content/uploads/villa-hostel-nice-france-accommodation-twin-room-en-suite.jpg"></img>
  </div>
   </div>
}


export default Login;