export default function HorseBanner() {
  return (
    <div className="relative -mt-10">
      <section className="relative w-full min-h-[500px] bg-cover bg-center bg-no-repeat">
        {/* Desktop background */}
        <div 
          className="hidden md:block absolute inset-0"
          style={{
            backgroundImage: "url('Image 2 background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        {/* Mobile background */}
        <div 
          className="block md:hidden absolute inset-0"
          style={{
            backgroundImage: "url('mobBackground.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

       
  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-white text-center md:text-left md:right-5">
  <div className="max-w-4xl mx-auto md:mx-0">
    <p className="font-neue font-bold text-[48px] leading-[56px] tracking-normal">
      Let me ask you something straight:<br className="block mb-6" />
      What's worse than losing your bets<br className="block mb-6" />
      on a Saturday afternoon?<br className="block mb-6" />
      <br className="block mb-6" />
      It's not the money, is it?<br className="block mb-6" />
      <br className="block mb-6" />
      Not really<br className="block mb-6" />
      <br className="block mb-6" />
      It's the feeling.
    </p>
    <img src={"./Underline 1.png"}></img>
  </div>
</div>


      </section>
    </div>
  );
}