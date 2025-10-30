import React from "react";

export default function TextCard10() {
  return (
    <div className="relative sm:w-full w-[365px] max-w-[1152px] mx-auto bg-white text-black rounded-b-lg shadow-lg overflow-hidden font-source    px-8 sm:px-8 py-9">
      <div className="sm:space-y-[44px] space-y-[25px] text-[18px] leading-[20px] text-[#1E1E1E]  sm:text-[32px] sm:leading-[38px]  sm:px-10  max-w-1xl ">
       <img src={'./Group 8 desktop.png'} className="hidden sm:block"></img>
              <img src={'./Group 18 mob.png'} className="block sm:hidden"></img>

<div className=" text-center leading-loose sm:space-y-[20px] space-y-[15px] ">
       <p className="sm:text-[48px] sm:leading-[48px] text-[30.9px] sm:mb-10 font-bold text-center text-[#D11F25]" style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}>
 SO WHY STOP NOW?
</p>

        <p className="sm:text-[46px] sm:leading-[45px] text-[25px] -mt-2 sm:-mt-0 leading-tight font-bold">
          <strong>CONSISTENCY IS EVERYTHING IN BETTING AND IN DECISIONS</strong>
        </p>

        <p className=" ">
          The <strong>consistent punters</strong> make money.
        </p>

        <p className="font-bold">
          The ones who hesitate?
        </p>

        <p className="font-bold">
          <u>THEY STAY STUCK...</u>
        </p>

        </div>
        <p className="sm:text-[48px] sm:leading-[48px] text-[24px] leading-[29px] font-bold text-center sm:-mb-3 mb-4 -mt-4" style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}>
Choose which one <br/> YOU ARE TODAY...
</p>
<div className="flex items-center justify-center gap-4 sm:gap-8 mt-4">
  <img
    src={"./left.png"}
    className="hidden sm:block  h-auto "
    alt="Left Arrow"
  />
  <img
    src={"./left mob.png"}
    className="sm:hidden block w-[50px] h-auto -mt-6"
    alt="Left Arrow Mobile"
  />

  <button
    className="text-center justify-center sm:w-[410px] sm:h-[95px] h-[40px] w-[300px]
    sm:rounded-[100px] rounded-[50px] border-[3px]
    sm:px-[40px] sm:py-[20px] font-neue sm:text-[44px] sm:leading-[46px] text-[20px] leading-[29px]
    font-bold text-white bg-gradient-to-r from-[#f76464] to-[#C8102E]"
    style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}
  >
    JOIN NOW
  </button>

  <img
    src={"./right.png"}
    className="hidden sm:block   h-auto"
    alt="Right Arrow"
  />
  <img
    src={"./right mob.png"}
    className="sm:hidden block w-[50px] h-auto -mt-6"
    alt="Right Arrow Mobile"
  />
</div>
 
        
      </div>
   </div>
  );
}
