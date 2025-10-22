export default function TheBlack({ text }) {
  return (
    <div className="relative w-full max-h-[200px] overflow-hidden">
    
      <img
        src="/banner.png"
        alt="Horse Racing Banner"
        
        className="w-full h-[64px] sm:h-auto object-cover sm:block hidden"
      />
          <img
        src="/Banner 8.png"
        alt="Horse Racing Banner"
        
        className="w-full h-[84px] sm:h-auto object-cover sm:hidden block"
      />

   
        <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-[1152px] mx-auto px-6 sm:px-8 sm:text-[64px] text-[27px]  ">
          <div className="sm:pl-8 md:pl-10 sm:ml-6 ">
            <div
  className="text-white font-bold sm:text-left text-left"
  style={{
    fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif",
  }}
>
  <p className="whitespace-pre leading-[32px] sm:leading-tight">{text}</p>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
