import React, { useState } from "react";
import axios from "axios";

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  // Event handler for input text change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Function to make API request using axios
  const query = async (data) => {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
        data,
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.data;
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  // Event handler for image generation button click
  const handleGenerate = async () => {
    setLoading(true);
    try {
      const imageData = await query({ inputs: inputText });
      setImage(imageData.data);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto mt-4">
      <h1 className="text-center text-xl mb-4 font-semibold uppercase">
        Generate your desired Image
      </h1>

      {/* Input and button for image generation */}
      <div className="w-full flex flex-col md:flex-row gap-3 mx-auto">
        <input
          type="text"
          placeholder="Enter prompt to generate image"
          className="input input-primary w-full"
          value={inputText}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleGenerate}>
          Generate
        </button>
      </div>

      {/* Loading indicator while generating the image */}
      {loading ? (
        <div className="mt-6 w-fit mx-auto flex flex-col items-center">
          <span className="loading loading-dots loading-lg"></span>
          <span className="text-center text-warning">
            Its painting, just wait. I will show you!
          </span>
        </div>
      ) : (
        // Display generated or demo image
        <div className="w-full mt-6 rounded-xl overflow-hidden">
          <div className="bg-primary text-primary-content py-2">
            <h1 className="text-center text-lg font-semibold">
              {image ? "Generated Image" : "Demo Image"}
            </h1>
          </div>
          <img
            src={
              image ||
              "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="Generated Image"
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default Body;
