import React from "react";

const ImageDisplaySection = ({ image, loading, handleDownload }) => {
  return (
    <div className="w-full mt-6 rounded-xl overflow-hidden h-fit">
      {loading ? (
        <div className="mt-6 w-fit mx-auto flex flex-col items-center">
          <span className="loading loading-dots loading-lg"></span>
          <span className="text-center text-warning">
            It's painting, just wait. I will show you!
          </span>
        </div>
      ) : (
        <>
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
            alt="Generated"
            className="w-full rounded-b-xl"
          />
          <div className="w-fit mx-auto my-2">
            <button
              className="btn btn-secondary"
              onClick={handleDownload}
              disabled={!image}
            >
              Download Image
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageDisplaySection;
