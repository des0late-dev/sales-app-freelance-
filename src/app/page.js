import Image from "next/image";
import RacingHorse from "./racingHorse";
import BettingScreen from "./BettingScreen";
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

export default function Home() {
  return (
  <div className="flex justify-center flex-col">
  <div className="relative min-h-screen">
    {/* Fixed background - covers full width and fades properly */}
    <div 
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: "url('/background-home.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    ></div>
    
    {/* Gradient fade overlay - responsive height */}
    <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-t from-white via-white/70 to-transparent -z-5"></div>
    
    <div className="bg-red-500 w-full h-10 flex items-center justify-center mb-7">
      <p className="text-white font-bold">LOGO</p>
    </div>

    <div className="relative text-center max-w-4xl mx-auto px-4 pt-8 md:pt-20">
      <h2 className="text-3xl md:text-5xl font-bold leading-snug text-white drop-shadow-lg text-center" style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}>
        The Only Horse Racing Edge<br />
        That Turned £8,201 Profit<br />
        From Just 10.3% Winners
      </h2>
    </div>

    <div className="relative z-10 mt-8 md:mt-12 text-center mb-7">
      <img src={"./Placeholder 1.png"} className="mx-auto" alt="Racing Horse" />
    </div>

    {/* Mobile-responsive spacing with overlap */}
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
      <TheBlack text="Proof (Authority + Social Proof)" />
      <TextCard3 />
      <TheBlack text="Reciprocity (Give Before You Ask)" />
      <TextCard4 />
      <TheBlack text="Unity (We're One of You)" />
      <TextCard5 />
      <TheBlack text="Scarcity (Why You Must Act Now)" />
      <TextCard7 />
      <TheBlack text="The Offer (Action)" />
      <TextCard8 />
      <TheBlack text="Risk Reversal (Remove Doubt)" />
      <TextCard9 />
      <TheBlack text="Final Push (Commitment + Consistency)" />
      <TextCard10 />
    </div>
  );
}