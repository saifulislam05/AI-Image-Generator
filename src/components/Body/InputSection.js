import React from "react";

const InputSection = ({ inputText, handleInputChange, handleGenerate }) => {
  return (
    <div className="w-full flex flex-col items-center md:flex-row gap-3 mx-auto">
      <input
        type="text"
        placeholder="Enter prompt to generate image"
        className="input input-primary w-full"
        value={inputText}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary w-28 " onClick={handleGenerate}>
        Generate
      </button>
    </div>
  );
};

export default InputSection;
