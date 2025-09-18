import Image from "next/image";
import RacingHorse from "./racingHorse";
import BettingScreen from "./BettingScreen";
export default function Home() {
  return (
    <div className="flex justify-center flex-col">


      <div className="bg-red-500 w-full items-center text-center mb-7">
<p>logo</p>
      </div>
<div className="justify center text-center max-w-x1 text-black mb-12">
      <h2 className="text-5xl font-bold leading-snug max-w-xl mx-auto">
The Only Horse Racing Edge That Turned 8,201 Profit From Just 10.3% Winners</h2>
</div>
<RacingHorse></RacingHorse>
<BettingScreen></BettingScreen>

    </div>
  );
}
