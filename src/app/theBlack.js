export default function TheBlack({ text }) {
  return (
    <div className="relative w-full max-h-[200px] overflow-hidden">
    
      <img
        src="/banner.png"
        alt="Horse Racing Banner"
        
        className="w-full h-auto object-cover"
      />

   
        <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-[1152px] mx-auto px-6 sm:px-8">
          <div className="pl-8 md:pl-10">
            <div
              className="text-white font-bold text-left"
              style={{
                fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif",
                fontSize: "clamp(20px, 5vw, 40px)",
                lineHeight: "clamp(28px, 6vw, 48px)",
              }}
            >
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
