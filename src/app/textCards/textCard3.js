export default function TextCard3(){
   return (
<div className="w-full lg:w-[1152px] mx-auto bg-white text-black rounded-lg shadow-lg overflow-hidden p-6 md:p-10 font-sans font-normal font-source">
      <div className="space-y-8 text-[#1E1E1E] text-[26px] leading-[32px] p-6 md:p-8 pl-8 md:pl-10">
    <p><strong>Numbers don&apos;t lie:</strong></p>

    <div className="relative">
      <img
        src="/Stats 2.png"
        className="w-full h-auto object-contain"
        alt="Stats"
      />
    </div>

    <p>
      But don&apos;t just take our word. <strong>here&apos;s what real punters say:</strong>
    </p>

    <div className="relative">
      <img
        src="/Testimonials.png"
        className="w-full h-auto object-contain"
        alt="Testimonials"
      />
      <p className="text-center mt-6">
        <u>This isn&apos;t theory.</u> <strong>This is real punters, real bets, real returns.</strong>
      </p>
    </div>
  </div>
</div>

  );
}