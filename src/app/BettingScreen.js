export default function BettingScreen() {
  const newdate = new Date();
  const showTime = newdate.getHours() + ":" + newdate.getMinutes();

  return (
    


    <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-lg text-black mt-6 z-13 ">
      
    
      <div className="flex items-start justify-between border-b px-4 py-3">
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold">2:15</h2>
            <span className="text-xl font-bold">Leopardstown</span>
          </div>
          <p className="text-gray-600 text-sm mt-1 flex items-center gap-2">
            <span>13 SEP 2025</span>
            <span className="bg-gray-800 text-white px-2 py-0.5 rounded text-xs font-medium">RTV</span>
          </p>
          <p className="text-[#1E1E1E] text-sm mt-2 font-medium">
            7f Ballylinch Stud Irish EBF Ingabelle Stakes (Listed Race) (Fillies) (2yo)
          </p>
          
          <div className="mt-3">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded text-sm font-semibold transition-colors">
              🎥 Place a bet through the Racing Post to watch live
            </button>
          </div>
        </div>

        <div className="text-right text-sm text-gray-600">
          <p><strong>Stalls:</strong></p>
          <p><strong>EW Terms:</strong></p>
        </div>
      </div>

    
      <div className="flex gap-6 px-4 py-3 border-b text-sm">
        <span className="text-red-600 font-medium border-b-2 border-red-600 pb-1">Card</span>
        <span className="text-red-600 hover:text-red-700 cursor-pointer">Pro Card</span>
        <span className="hover:text-gray-700 cursor-pointer">At-a-glance</span>
        <span className="text-red-600 hover:text-red-700 cursor-pointer">Odds Comparison</span>
        <span className="text-red-600 hover:text-red-700 cursor-pointer">Live</span>
        <span className="text-red-600 hover:text-red-700 cursor-pointer">Smart View</span>
        <span className="ml-auto text-gray-500">?</span>
      </div>

   
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm">
            <span>🎯</span> Predictor
          </button>
          <button className="flex items-center gap-1 text-sm">
            <span>⚙️</span> Settings
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Select Bookmaker</span>
          <select className="bg-black text-white px-3 py-1 rounded text-sm">
            <option>William Hill</option>
          </select>
        </div>
      </div>

    
      <div className="bg-yellow-300 px-4 py-2 flex items-center justify-between">
        <span className="font-semibold text-sm">VIEW 1 OFFER FOR LEOPARDSTOWN</span>
        <span className="text-lg">+</span>
      </div>

     
      <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-gray-50 text-xs font-medium text-gray-700 border-b">
        <div className="col-span-1">NO. DRAW FORM</div>
        <div className="col-span-3">HORSE</div>
        <div className="col-span-2">AGE WGT OR</div>
        <div className="col-span-2">JOCKEY TRAINER</div>
        <div className="col-span-2">ALLOW RTF% TS</div>
        <div className="col-span-1">RPR</div>
        <div className="col-span-1">ODDS</div>
      </div>

     
      <div className="divide-y">
       
        <div className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center">
          <div className="col-span-1">
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">(7)</span>
              <span className="font-bold">1</span>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🏇</span>
              </div>
              <div>
                <p className="font-semibold">Brownstown ♀</p>
                <div className="flex gap-1 text-xs">
                  <span>📍</span>
                  <span>📋</span>
                  <span>❌</span>
                  <span>💿</span>
                  <span className="bg-red-600 text-white px-1 rounded">21</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 text-center">
            <p>2 9-2</p>
            <p>98</p>
          </div>
          <div className="col-span-2">
            <p>J: Gary Carroll ♀</p>
            <p>T: Gavin Cromwe... 39</p>
          </div>
          <div className="col-span-2 text-center">
            <p>- 90</p>
          </div>
          <div className="col-span-1 text-center">
            <p className="font-bold">100</p>
          </div>
          <div className="col-span-1 text-center">
            <p className="font-bold text-red-600">ODDS</p>
          </div>
        </div>

       
        <div className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center">
          <div className="col-span-1">
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">(5)</span>
              <span className="font-bold">2</span>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🏇</span>
              </div>
              <div>
                <p className="font-semibold">Caught U Sleeping ♀</p>
                <div className="flex gap-1 text-xs">
                  <span>📍</span>
                  <span>📋</span>
                  <span>❌</span>
                  <span className="bg-red-600 text-white px-1 rounded">20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 text-center">
            <p>2 9-2</p>
            <p>-</p>
          </div>
          <div className="col-span-2">
            <p>J: Ben Coen ♀</p>
            <p>T: Noel Meade ♀ 50</p>
          </div>
          <div className="col-span-2 text-center">
            <p>- -</p>
          </div>
          <div className="col-span-1 text-center">
            <p className="font-bold">95</p>
          </div>
          <div className="col-span-1 text-center">
            <p className="font-bold text-red-600">ODDS</p>
          </div>
        </div>

       
        <div className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center">
          <div className="col-span-1">
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">(4)</span>
              <span className="font-bold">3</span>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🏇</span>
              </div>
              <div>
                <p className="font-semibold">Diamond Necklace ♀</p>
                <div className="flex gap-1 text-xs">
                  <span>📍</span>
                  <span>❌</span>
                  <span>📊</span>
                  <span className="bg-blue-600 text-white px-1 rounded">35</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 text-center">
            <p>2 9-2</p>
            <p>-</p>
          </div>
          <div className="col-span-2">
            <p>J: Christophe Soumill...</p>
            <p>T: A P O'Brien ♀ 56</p>
          </div>
          <div className="col-span-2 text-center">
            <p>86 98</p>
          </div>
          <div className="col-span-1 text-center">
            <p className="font-bold">92</p>
          </div>
          <div className="col-span-1 text-center">
            <p className="font-bold text-red-600">ODDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
