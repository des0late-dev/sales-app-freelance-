export default function TheBlack({ text, className="" }) {
  return (
    <div className={`relative w-full overflow-hidden  sm:min-h-auto ${className}`}>
    
      <img
        src="/Banner 4. desktop.png"
        alt="Horse Racing Banner"
        className="w-full h-[64px] sm:h-[170px] object-cover  sm:block hidden"
      />
      <img
        src="/Banner 8.png"
        alt="Horse Racing Banner"
        className={`w-full ${className}  sm:h-auto object-cover sm:hidden block`}
      />

      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-[1152px] mx-auto px-12  sm:px-[93px]">
          <p
            className="text-white font-bold text-left text-[30px] sm:text-[56px] leading-[32px] sm:leading-[1.1]"
            style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
