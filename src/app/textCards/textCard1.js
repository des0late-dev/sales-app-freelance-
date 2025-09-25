import React from "react";

export default function TextCards() {
  return (
    <div className="relative w-full max-w-[1152px] mx-auto bg-white text-black rounded-lg shadow-lg overflow-hidden  font-source -mt-12  px-6 sm:px-8 py-18">

      <div className="space-y-[44px] text-lg text-[#1E1E1E]  text-[32px] leading-[38px]  p-8 md:p-10 pl-8 md:pl-10">
        <p>
          The gut-punch of watching your bet lose by a nose while the bookies
          nick another chunk out of your money.
        </p>

        <p>
          It&apos;s walking into the pub later, mates buzzing, and you muttering,
          {'“'}Nah, didn&apos;t land today.{'”'}
        </p>

        <p>
          It&apos;s the bloke who works at the bookie giving you a blank stare as
          though you&apos;re a mug who should have known better. But what does he
          know?!
        </p>

        <p>We&apos;ve all been there.</p>

        <p className="font-bold">Too many times.</p>

        <p>
          But here&apos;s the good news about what I&apos;m about to let you in on:
        </p>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D11F25] leading-tight" style={{fontFamily: "'Neue Haas Grotesk Display Pro', sans-serif"}}>
            Over 2,074 tips, we&apos;ve pulled in £8,201 profit with just a 10.3%
            strike rate.
          </h2>
        </div>

        <p>That&apos;s not a typo.</p>

        <p>
          That&apos;s not some <strong>{'“'}winner every race{'”'}</strong> fairy tale.
        </p>

        <p>
          That&apos;s the reality of a system built to target what bookies fear most:
        </p>

        <p className="font-bold">
          Big-priced horses at the sweet spots the market overlooks.
        </p>
      </div>
    </div>
  );
}
