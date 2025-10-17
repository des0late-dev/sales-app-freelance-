export default function TextCard3(){
   return (
    <div className="relative w-full max-w-[1152px] mx-auto bg-white text-black rounded-lg shadow-lg overflow-hidden  font-source  px-6 sm:px-8 py-18">
      <div className="space-y-[44px] text-[20px] leading-[28px] text-[#1E1E1E]  sm:text-[32px] sm:leading-[38px]  sm:p-8 max-w-1xl xl:ml-5.5 lg:ml-5.5  md:p-10  md:pl-10">
    <p><strong>Numbers don&apos;t lie:</strong></p>

    <div className="relative">
      <img
        src="/Stats 2.png"
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
        className="w-full h-auto object-contain"
        alt="Testimonials"
      />
      <div className="relative mt-[85px]">
      <img
        src="/Artboard 9.png"
        className="w-full h-auto object-contain"
        alt="Artboard"
      />
      </div>
      <p className="text-center mt-[89px] -mb-2">
        <u>This isn&apos;t theory.</u> <strong>This is real punters, real bets, real returns.</strong>
      </p>
    </div>
  </div>
</div>

  );
}