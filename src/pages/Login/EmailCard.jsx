import React, {useState} from "react";

function EmailCard(){

    const [focusedInput, setFocusedInput] = useState(null);

    const handleFocus = (inputIndex) => {
      setFocusedInput(inputIndex);
    };
  
    const handleBlur = () => {
      setFocusedInput(null);
    };

    return  <div className=" primary-color design-before-footer flex justify-center items-center rounded-md mb-20 mt-24 ">
    <div>
      <h2 className="text-color-white subscribe mb-3">
        Subscribe for the latest deals
      </h2>
      <p className="text-color-white sign-up">
        Sign up now and get the latest news right in your inbox
      </p>
      <div className="relative">
        <input
          type="text"
          className="md:mt-12 mt-5 mb-5 w-[90%] md:w-[100%] md:h-16 h-10 px-4 py-1 ml-[5%] md:ml-0 mb-4 border border-gray-200 focus:outline-none focus:border-blue-500 rounded-sm shadow-lg email-bar"
          placeholder={focusedInput === 7 ? '' : 'Email Address'}
          onFocus={() => handleFocus(7)}
        onBlur={handleBlur}
        />
        <button className="relative primary-color ml-[32%] md:ml-0 p-5 md:p-3 md:absolute md:top-14 md:right-3 button-orange-color rounded-md text-color-white">
          Subscribe
        </button>
        <div className="hidden small-color-circle md:block absolute top-[-80%] right-[-30%] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"></div>

        <div className="hidden small-color-circle md:block absolute top-[-10%] left-[-30%] w-20 h-20 rounded-full flex justify-center items-center cursor-pointer"></div>
      </div>
    </div>
  </div>
}

export default EmailCard;