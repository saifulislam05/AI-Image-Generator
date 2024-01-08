import React, { useState } from "react";
import axios from "axios";
import InputSection from "./InputSection";
import ImageDisplaySection from "./ImageDisplaySection";

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const query = async (data) => {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
        data,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            "Content-Type": "application/json",
          },
          responseType: "blob",
        }
      );

      const result = await response.data;
      return URL.createObjectURL(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const imageData = await query({ inputs: inputText });
      setImage(imageData);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
      console.log(image);
    }
  };

  const handleDownload = () => {
    if (image) {
      const link = document.createElement("a");
      link.href = image;
      link.download = "generated_image.png";
      link.click();
    }
  };

  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto mt-4">
      <h1 className="text-center text-xl mb-4 font-semibold uppercase">
        Generate your desired Image
      </h1>

      <InputSection
        inputText={inputText}
        handleInputChange={handleInputChange}
        handleGenerate={handleGenerate}
      />

      <ImageDisplaySection
        image={image}
        loading={loading}
        handleDownload={handleDownload}
      />
    </div>
  );
};

export default Body;
