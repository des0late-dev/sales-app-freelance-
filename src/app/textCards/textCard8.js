import React from "react";

export default function TextCard8() {
  return (
    <div className="relative w-full max-w-[1152px] mx-auto bg-white text-black rounded-lg shadow-lg overflow-hidden  font-source  px-6 sm:px-8 py-18">
      <div className="space-y-[44px] text-[20px] leading-[28px] text-[#1E1E1E]  sm:text-[32px] sm:leading-[38px]  sm:p-8 max-w-1xl xl:ml-5.5 lg:ml-5.5  md:p-10  md:pl-10">
        <p className="text-[#1E1E1E] ">
            Here&apos;s what you get when you join <strong>EachWayProfits</strong> today:
          
        </p>


<img src={"./Stats 3.png"} className="sm:block hidden"> 
</img>
<img src={"./Stats 3 mob.png"} className="sm:hidden block"> 
</img>
     <p
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  leading-tight text-center text-[#D11F25] xl:mt-23.5 sm:block hidden"
  style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}
>
  All for less than the price of a
  <br />
  Saturday night takeaway.
</p>

<p
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-[#D11F25] xl:mt-23.5 sm:hidden block"
  style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}
>
  All for less than the price of a
  <br />
  Saturday night takeaway.
</p>
        
      </div>
    </div>
  );
}
