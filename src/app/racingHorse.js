"use client";
import { useState } from "react";

export default function RacingHorse() {
  const [day, setDay] = useState("today");

  const tabs = ["latest", "today", "tomorrow", "monday"];

  const data = [
    {
      venue: "Doncaster",
      races: [
        { time: "13:15", offer: true, runners: 15 },
        { time: "13:50", offer: true, runners: 5 },
        { time: "14:25", offer: true, runners: 21 },
      ],
    },
    {
      venue: "Chester",
      races: [
        { time: "13:35", offer: false, runners: 9 },
        { time: "14:05", offer: false, runners: 5 },
        { time: "14:40", offer: false, runners: 12 },
      ],
    },
  ];

  return (
    <div className="max-w-4xl min-w-[300px] w-full mx-auto bg-white rounded shadow">
 
  <div className="flex items-center justify-between px-4 py-2 border-b">
    <h2 className="font-bold text-lg text-black">{"TODAY'S RACING"}</h2>
    <a href="#" className="text-red-500 text-sm">
      Going and non-runners →
    </a>
  </div>

 
  <div className="flex border-b">
    {tabs.map((t) => (
      <button
        key={t}
        onClick={() => setDay(t)}
        className={`flex-1 py-2 text-sm capitalize ${
          day === t ? "bg-black text-white" : "hover:bg-gray-100 text-black"
        }`}
      >
        {t}
      </button>
    ))}
  </div>

  <div>
    {data.map((venue) => (
      <div
        key={venue.venue}
        className="flex justify-between items-center border-b px-4 py-3 "
      >
      
         <div>
          <h3 className="font-semibold text-black">{venue.venue}</h3>
          <p className="text-xs text-black">
            Flat {venue.races.length} races
          </p>
        </div>

        
        <div className="flex gap-6 justify-end flex-wrap ">
          {venue.races.map((r, i) => (
            <div key={i} className="text-right text-black">
              <div className="flex items-center gap-1">
                <span className="font-bold">{r.time}</span>
                {r.offer && (
                  <span className="text-green-500 text-xs font-medium">
                    Offer
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500">{r.runners} Runners</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
