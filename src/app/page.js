import Image from "next/image";

import TheBlack from "./theBlack";
import HorseBanner from "./HorseBanner";
import TextCards from "./textCards/textCard1";
import TextRest from "./textCards/textCard2";
import TextCard3 from "./textCards/textCard3";
import TextCard4 from "./textCards/textCard4";
import TextCard5 from "./textCards/textCard5";
import TextCard6 from "./textCards/textCard6";
import TextCard7 from "./textCards/textCard7";
import TextCard8 from "./textCards/textCard8";
import TextCard9 from "./textCards/textCard9";
import TextCard10 from "./textCards/textCard10";
import TextCard11 from "./textCards/textCard11";

export default function Home() {
  return (
  <div className="flex justify-center flex-col">
  <div className="relative  sm:min-h-screen">
    
  <div
  className="absolute inset-0 -z-10 w-full bg-no-repeat bg-cover h-full bg-top"
  style={{
    backgroundImage: "url('/background-home.png')",
    backgroundSize: "100%",

    
  }}
></div>
    
    
    <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-t from-white via-white/70 to-transparent -z-5"></div>
    
    <div className="bg-[#D11F25] w-full h-[45px] sm:h-[74px] flex items-center justify-center ">
      <img
  src="/Asset 2@2x.png"
  alt="LOGO"
  className="w-auto h-[42px] sm:block hidden"
  style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}
/>
<img
  src="/Asset 2@2x.png"
  alt="LOGO"
  className="w-auto h-[24px] sm:hidden block"
  style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}
/>

    </div>

   <div className="relative text-center justify-center max-w-7xl mx-auto px-8 py-8 md:px-40 lg:px-24 pt-4 pb-4 md:pt-30 md:pb-30 ">
  <p
    className="text-[28px] mt-8 mb-4 xl:text-7xl  2xl:text-[82px] xl:text-[78px] xl:-mt-8  xl:ml-12 lg:ml-12 font-bold leading-snug text-white drop-shadow-lg text-center "
    style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}
  >
    The Only Horse Racing Edge<br />
    That Turned £8,201 Profit<br />
    From Just 10.3% Winners
  </p>
</div>

<div className="relative z-10 mt-8 xl:-mt-4 mb-6 text-center xl:ml-17 lg:ml-17 ">
  <img src={"./Placeholder 1.png"} className="mx-auto" alt="Racing Horse" />
</div>


  
    <div className="relative z-20 sm:-mb-4  md:-mb-2 lg:-mb-2 xl:-mb-4 text-center xl:ml-17 lg:ml-17">
      <img src={"./Placeholder 2.png"} className="mx-auto" alt="Betting Screen" />
    </div>
  </div>
  
  
  
  <HorseBanner />
      <TextCards />
      <TheBlack text="Interest (Story + Problem)" />
      <TextRest />
      <TheBlack text="Agitate (Twisting the Knife)" />
      <TextCard6 /> 
      <TheBlack text="Desire (Solution + Benefits)"></TheBlack>   
      <TextCard11></TextCard11>
      <TheBlack text={<> Proof <br className="block sm:hidden"/> (Authority + Social Proof) </>} />
      <TextCard3 />
      <TheBlack text={<> Reciprocity <br className="block sm:hidden"/> (Give Before You Ask) </>} />
      <TextCard4 />
      <TheBlack text="Unity (We&apos;re One of You)" />
      <TextCard5 />
      <TheBlack text={<> Scarcity <br className="block sm:hidden"/> (Why You Must Act Now) </>} />
      <TextCard7 />
      <TheBlack text="The Offer (Action)" />
      <TextCard8 />
      <TheBlack text={<> Risk Reversal <br className="block sm:hidden"/> (Remove Doubt) </>} />
      <TextCard9 />
<TheBlack
  text={
    <>
      Final Push 
      <br className="block " /> 
      (Commitment + Consistency)
    </>
  }
/>
      <TextCard10 />
    </div>
  );
}