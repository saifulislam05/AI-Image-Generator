import React, { useState } from "react";

const Body = () => {
  // const [inputText, setInputText] = useState("");
  // const [state, setstate] = useState(initialState);


  
  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto mt-4 ">
      <h1 className="text-center text-xl mb-4 font-semibold uppercase">
        Generate your desire Image
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-3 mx-auto">
        <input
          type="text"
          placeholder="Enter prompt to generate image"
          className="input input-primary w-full"
          // value={inputText}
          // onChange={handleInputChange}
        />
        <button className="btn btn-primary" >Generate</button>
      </div>
      <div className=" w-full mt-6 rounded-xl overflow-hidden">
        <div className="bg-primary text-primary-content py-2">
        <h1 className="text-center text-lg font-semibold ">Generated Image</h1>
        </div>
        <img
          src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="name"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Body;
