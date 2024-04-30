import React, { useState } from "react";
import HostelList from "./HostelList";
import EmailCard from "./EmailCard";
import SelectionCheckBox from "./SelectionCheckBox";
import MainDashboard from "./MainDashboard";
import NewFooter from "./Footer";

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
    <div className=" overall-container">
      <MainDashboard />
      <div className="flex justify-center w-full mt-20 ">
        <SelectionCheckBox />
        <HostelList />
      </div>

      <EmailCard />

      <NewFooter />
    </div>
  );
}

export default Login;
