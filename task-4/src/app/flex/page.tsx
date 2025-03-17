import React from "react";

const Page = () => {
  return (
    <div className="flex bg-[#37384e] min-h-screen items-center justify-center overflow-y-hidden p-4">
      <div className="bg-white rounded-3xl text-white w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] flex flex-col md:flex-row-reverse justify-center items-center overflow-hidden">
        
        {/* Left Section */}
        <div className="flex-1 p-6 sm:p-10 md:p-16 flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center sm:text-left">
            Stay updated!
          </h2>
          <p className="text-gray-600 mt-2 text-center sm:text-left">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-center sm:text-left">
            <li className="flex items-center gap-2">
              <img
                src="./images/icon-success.svg"
                alt=""
                className="h-5 w-5"
              />
              Product discovery and building what matters
            </li>
            <li className="flex items-center gap-2">
              <img
                src="./images/icon-success.svg"
                alt=""
                className="h-5 w-5"
              />
              Measuring to ensure updates are a success
            </li>
            <li className="flex items-center gap-2">
              <img
                src="./images/icon-success.svg"
                alt=""
                className="h-5 w-5"
              />
              And much more!
            </li>
          </ul>

          {/* Email Input */}
          <div className="mt-4">
            <form>
              <label className="text-sm font-medium text-gray-700 block">
                Email address
              </label>
            </form>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full mt-1 px-4 py-2 border border-black text-black rounded-lg outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Subscribe Button */}
          <button className="w-full mt-4 bg-[#1d1f39] text-white font-semibold py-2 rounded-lg hover:bg-[#f95766]">
            Subscribe to monthly newsletter
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 w-full p-6 flex justify-center items-center">
          <img
            src="/images/illustration-sign-up-desktop.svg"
            alt="image"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
