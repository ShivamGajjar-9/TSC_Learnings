import React from 'react';


const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="bg-white rounded-2xl shadow-lg flex w-[60vw] overflow-hidden">
        {/* Left */}
        <div className="w-1/2 p-6 overflow-hidden">
          <h2 className="text-xl font-semibold mb-4">Mortgage Calculator</h2>
          <a href="#" className="text-sm text-blue-600 float-right">Clear All</a>
          
          <div className="mt-4">
            <label className="text-sm font-medium">Mortgage Amount</label>
            <div className="flex items-center border rounded-lg p-2 mt-1">
              <div className="text-gray-500 bg-[#e3f4fc]">£</div>
              <input type="number" className="w-full outline-none pl-2" />
            </div>
          </div>
          
          <div className="flex gap-4 mt-4">
            <div className="w-1/2">
              <label className="text-sm font-medium">Mortgage Term</label>
              <div className="flex items-center border rounded-lg p-2 mt-1">
                <input type="number" className="w-full outline-none" />
                <div className="text-gray-500 bg-[#e3f4fc] w-full h-full">years</div>
              </div>
            </div>
            <div className="w-1/2">
              <label className="text-sm font-medium">Interest Rate</label>
              <div className="flex items-center border rounded-lg p-2 mt-1">
                <input type="number" className="w-full outline-none" />
                <div className="text-gray-500 bg-[#e3f4fc]">%</div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <label className="text-sm font-medium">Mortgage Type</label>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center gap-2 border rounded-lg p-2 cursor-pointer">
                <input type="radio" name="mortgageType" /> Repayment
              </label>
              <label className="flex items-center gap-2 border rounded-lg p-2 cursor-pointer">
                <input type="radio" name="mortgageType" /> Interest Only
              </label>
            </div>
          </div>
          
          <button className="w-full mt-6 bg-[#d9dd2e] text-black font-semibold py-2 rounded-lg flex items-center justify-center gap-2">
            <div className='w-30px h-30px'><img src="assets/images/icon-calculator.svg "/></div> Calculate Repayments
          </button>
        </div>
        
        {/* Right */}
        <div className="w-1/2 bg-[#133040] text-white flex flex-col items-center justify-center p-6 rounded-[0px_0px_0px_75px]">
          
          <img src="assets\images\illustration-empty.svg"/>
        
          <h3 className="text-lg font-semibold">Results shown here</h3>
          <p className="text-sm text-gray-300 text-center mt-2">
            Complete the form and click "calculate repayments" to see what your monthly repayments would be.
          </p>
        </div>
      </div>
    </div>
  );
}


export default Page;