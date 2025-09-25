export default function HorseBanner() {
  return (
    <div className="relative -mt-10">
      <section className="relative w-full min-h-[500px] bg-cover bg-center bg-no-repeat">
       
        <div 
          className="hidden md:block absolute inset-0"
          style={{
            backgroundImage: "url('Image 2 background.png')",
            backgroundSize: "cover",
            backgroundPosition: "75% center "
          }}
        ></div>
        
       
        <div 
          className="block md:hidden absolute inset-0"
          style={{
            backgroundImage: "url('mobBackground.png')",
            backgroundSize: "cover",
            backgroundPosition: "50% center",
            
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

       
  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28  text-white text-center md:text-left md:right-5">
  <div className="max-w-4xl mx-auto md:mx-0">
    <p className="font-bold text-[48px] leading-[56px] tracking-normal px-10" style={{ fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif" }}>
      Let me ask you something straight:<br className="block mb-6" />
      What&apos;s worse than losing your bets<br className="block mb-6" />
      on a Saturday afternoon?<br className="block mb-6" />
      <br className="block mb-6" />
     <u> It&apos;s not the money,</u> is it?<br className="block mb-6" />
      <br className="block mb-6" />
      Not really<br className="block mb-6" />
      <br className="block mb-6" />
      It&apos;s the feeling.
    </p>
    <img src={"./Underline 1.png"}
    style={{width:"34%"}}></img>
  </div>
</div>


      </section>
    </div>
  );
}