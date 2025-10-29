export default function TextCard3(){
   return (
    <div className="relative w-full max-w-[1152px] mx-auto bg-white text-black rounded-lg shadow-lg overflow-hidden  font-source  px-6 sm:px-8 sm:py-9 py-12">
      <div className="sm:space-y-[44px] space-y-[25px] text-[20px] leading-[28px] text-[#1E1E1E]  sm:text-[32px] sm:leading-[38px]   sm:ml-5.5    md:pl-10">
    <p><strong>Numbers don&apos;t lie:</strong></p>

    <div className="relative sm:block hidden">
      <img
        src="/Stats 2.png"
        className="w-full h-auto object-contain"
        alt="Stats"
      />
    </div>

    <div className="relative sm:hidden block">
      <img
        src="/Stats 2 mob.png"
        className="w-full h-auto object-contain"
        alt="Stats"
      />
    </div>

    <p>
      But don&apos;t just take our word. <strong>Here&apos;s what real punters say:</strong>
    </p>

    <div className="relative">
      <img
        src="/Testimonials.png"
        className="w-full h-auto object-contain sm:block hidden"
        alt="Testimonials"
      />
      <div className="relative sm:mt-[85px]">
      <img
        src="/Artboard 9.png"
        className="w-full h-auto object-contain sm:block hidden"
        alt="Artboard"
      />
      </div>
      <img
        src="/Group 7 mob.png"
        className="w-full h-auto object-contain sm:hidden block"
        alt="Testimonials"
      />
      <div className="relative sm:mt-[85px] mt-[20px]">
      <img
        src="/Asset 14@4x mob.png"
        className="w-full h-auto object-contain sm:hidden block "
        alt="Artboard"
      />
      </div>
      </div>
      <p className="text-center sm:mt-[89px] -mb-2">
        <u>This isn&apos;t theory.</u> <strong>This is real punters, real bets, real returns.</strong>
      </p>
    </div>
  </div>


  );
}