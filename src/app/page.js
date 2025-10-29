/* eslint-disable react/no-unescaped-entities */

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
<div className="flex flex-col justify-center overflow-x-hidden">
  <div className="relative sm:min-h-screen min-h-[600px]">
 
    <div
      className="absolute inset-0 -z-10 w-full h-full bg-no-repeat bg-cover bg-top"
      style={{
        backgroundImage: "url('/Background home.png')",
      
      }}
    ></div>

    <div className="bg-[#D11F25] w-full h-[45px] sm:h-[74px] flex items-center justify-center">
      <img
        src="/Asset 2@2x.png"
        alt="LOGO"
        className="w-auto h-[42px] sm:block hidden"
      />
      <img
        src="/Asset 2@2x.png"
        alt="LOGO"
        className="w-auto h-[24px] sm:hidden block"
      />
    </div>

    
    <div className="relative text-center justify-center w-full py-8 pt-4 pb-4 md:pt-30 md:pb-15">
      <p
    className="w-screen -ml-[calc((100vw-100%)/2)] text-[33px] leading-[40px] mt-8 mb-4 sm:text-[82px]  xl:-mt-12   font-bold sm:leading-[85px]  text-white drop-shadow-lg text-center"
        style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}

      >
        17/1 Winners.<br className="sm:block block" />
        Place Money Rolling <br className="sm:hidden block"></br> In. <br className="sm:block hidden" />
        £8,201 Profit. <br />
        And It Works Even <br className="block sm:hidden"/> When Your <br className="hidden sm:block" />
        Horses <br className="block sm:hidden"></br> Come Fourth!
      </p>
    </div>
  

  
  <div className=" sm:block hidden w-full h-110 bg-gradient-to-t from-[#d9d9d9] via-[#d9d9d9]/0 to-transparent "></div>
</div>

  
     
  
      <TextCards />
      <TheBlack text={<>Think back to your<br className="block sm:hidden " /> last month <br className="sm:block hidden"/>  of <br className="block sm:hidden"/> betting...</>} />
 
    
      <TextCard6 /> 
<TheBlack text={<>You don&apos;t need to win often. <br className="sm:block hidden" /> At 17/1 You Just need to win start</>} />
     
      <TextCard11></TextCard11>
    
      <TheBlack text={<> Reciprocity  (Give <br className="block sm:hidden"/> Before You Ask) </>} />
      <TextCard4 />
      <TheBlack text={<>If Too Many People <br className="block sm:hidden"/> Pile  Onto The <br className="sm:block hidden" />Same <br className="sm:hidden block"/> Bets - Odds Crash</>} />
      <TextCard7 />
<TheBlack text={<> Here&apos;s what you get<br className="block sm:hidden"/> when you join  <br className="block sm:hidden"/> EachWayGold Today </>} />
    <TextCard8 />
<TheBlack text={<> You&apos;re covered by our CANCEL <br className="sm:block hidden "/>ANYTIME GUARANTEE. </>} />
    
      <TextCard9 />
<TheBlack
  text={
    <>
      You&apos;ve read this far, which tells <br/>me three things:
    </>
  }
/>
      <TextCard10 />
    </div>
  );
}