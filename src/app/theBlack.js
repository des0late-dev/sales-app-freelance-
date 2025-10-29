export default function TheBlack({ text }) {
  return (
    <div className="relative w-full overflow-hidden max-h-[200px] sm:min-h-auto min-h-[150px] ">
    
      <img
        src="/banner.png"
        alt="Horse Racing Banner"
        className="w-full h-[64px] sm:h-auto object-cover sm:block hidden"
      />
      <img
        src="/Banner 8.png"
        alt="Horse Racing Banner"
        className="w-full h-[150px]  sm:h-auto object-cover sm:hidden block"
      />

      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-[1152px] mx-auto px-11  sm:px-[93px]">
          <p
            className="text-white font-bold text-left text-[27px] sm:text-[64px] leading-[32px] sm:leading-[1.1]"
            style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
