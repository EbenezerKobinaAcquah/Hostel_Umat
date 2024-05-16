import React, { useState } from "react";
import HostelList from "./src/pages/Login/HostelList";
import EmailCard from "./src/pages/Login/EmailCard";
import SelectionCheckBox from "./src/pages/Login/SelectionCheckBox";
import MainDashboard from "./src/pages/Login/MainDashboard";
import NewFooter from "./src/pages/Login/Footer";

function Login() {
  // State to manage dropdown visibility
 

  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputIndex) => {
    setFocusedInput(inputIndex);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };




  return (
    <div className="overall-container">
      <MainDashboard />
      <div className="md:flex w-full justify-center w-full mt-20 pl-[10%] pr-[10%] mb-20">
        
      </div>

      {/* <EmailCard /> */}

      <NewFooter />
    </div>
  );
}

export default Login;
