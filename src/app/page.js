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
  <div className="relative min-h-screen">
    
  <div
  className="absolute inset-0 -z-10 w-full bg-no-repeat bg-contain   bg-top"
  style={{
    backgroundImage: "url('/background-home.png')",
    backgroundSize: "100%",

    
  }}
></div>
    
    
    <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-t from-white via-white/70 to-transparent -z-5"></div>
    
    <div className="bg-[#D11F25] w-full h-[62px] flex items-center justify-center ">
      <p className="text-white font-bold">LOGO</p>
    </div>

   <div className="relative text-center justify-center max-w-7xl mx-auto px-8 py-8 md:px-40 lg:px-24 pt-4 pb-4 md:pt-30 md:pb-30 s">
  <p
    className="text-5xl xl:text-7xl  2xl:text-[82px] xl:text-[78px] xl:-mt-8 font-bold leading-snug text-white drop-shadow-lg text-center"
    style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}
  >
    The Only Horse Racing Edge<br />
    That Turned £8,201 Profit<br />
    From Just 10.3% Winners
  </p>
</div>

<div className="relative z-10 -mt-8 xl:-mt-4 mb-6 text-center">
  <img src={"./Placeholder 1.png"} className="mx-auto" alt="Racing Horse" />
</div>


  
    <div className="relative z-20 -mb-4 sm:-mb-2 md:-mb-2 lg:-mb-2 xl:-mb-4 text-center">
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
      <TheBlack text="Proof (Authority + Social Proof)" />
      <TextCard3 />
      <TheBlack text="Reciprocity (Give Before You Ask)" />
      <TextCard4 />
      <TheBlack text="Unity (We&apos;re One of You)" />
      <TextCard5 />
      <TheBlack text="Scarcity (Why You Must Act Now)" />
      <TextCard7 />
      <TheBlack text="The Offer (Action)" />
      <TextCard8 />
      <TheBlack text="Risk Reversal (Remove Doubt)" />
      <TextCard9 />
      <TheBlack text='Final Push (Commitment + Consistency)' />
      <TextCard10 />
    </div>
  );
}