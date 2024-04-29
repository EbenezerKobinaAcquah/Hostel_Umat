import React, {useState} from "react";

function EmailCard(){

    const [focusedInput, setFocusedInput] = useState(null);

    const handleFocus = (inputIndex) => {
      setFocusedInput(inputIndex);
    };
  
    const handleBlur = () => {
      setFocusedInput(null);
    };

    return  <div className="primary-color design-before-footer flex justify-center items-center mb-32 mt-24 ">
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
          className="mt-12 mb-5 w-[100%] h-16 px-4 py-2 mt-2 mb-2 border border-gray-200 focus:outline-none focus:border-blue-500 rounded-sm shadow-lg email-bar"
          placeholder={focusedInput === 7 ? '' : 'Email Address'}
          onFocus={() => handleFocus(7)}
        onBlur={handleBlur}
        />
        <button className="primary-color p-3 absolute top-14 right-3 rounded-md text-color-white">
          Subscribe
        </button>
        <div className=" primary-color absolute top-[-110%] right-[-50%] w-20 h-20 rounded-full flex justify-center items-center cursor-pointer"></div>

        <div className=" small-color-circle absolute top-[-10%] left-[-30%] w-20 h-20 rounded-full flex justify-center items-center cursor-pointer"></div>
      </div>
    </div>
  </div>
}

export default EmailCard;