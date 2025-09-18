export default function BettingScreen() {
  const newdate = new Date();
  const showTime = newdate.getHours() + ":" + newdate.getMinutes();

  return (
    <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow text-black mt-6">
    
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b px-4 py-2 gap-3">
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            2:15 Leopardstown
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            13 SEP 2025 · RTV
          </p>
          <p className="text-gray-600 text-xs sm:text-sm mt-1">
            7f Ballylinch Stud Irish EBF Ingabelle Stakes (Listed Race) (Fillies) (2yo)
          </p>
          <div className="mt-2 m-auto">
            <button className="bg-yellow-400 text-black text-xs sm:text-sm px-3 py-2 rounded font-medium hover:bg-yellow-500 transition">
              Place a bet →
            </button>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-gray-700">
          <p>Stalls: _________ </p>
          <p>EW Terms: ______ </p>
        </div>
      </div>

     
      <div className="flex flex-wrap gap-3 sm:gap-6 px-4 py-2 border-b text-xs sm:text-sm font-medium">
        <span className="text-red-600">Card</span>
        <span>Pro Card</span>
        <span>At-a-glance</span>
        <span>Odds Comparison</span>
        <span>Live</span>
        <span>Smart View</span>
      </div>

     
      <div className="bg-yellow-300 px-4 py-2 text-black font-semibold text-xs sm:text-sm">
        VIEW 1 OFFER FOR LEOPARDSTOWN
      </div>

      
      <div className="divide-y">
        
        <div className="flex flex-col sm:flex-row sm:items-center px-4 py-3 text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="w-8 sm:w-10 font-bold">1</div>
          <div className="flex-1">
            <p className="font-semibold">Brownstown</p>
            <p className="text-gray-500">Age 2 · WGT 9-2 · OR 98</p>
          </div>
          <div className="text-gray-700 sm:text-right">
            <p>J: Gary Carroll</p>
            <p>T: Gavin Cromwell</p>
          </div>
          <div className="sm:ml-4 text-right">
            <p className="font-bold">TS 90</p>
            <p className="font-bold">RPR 100</p>
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row sm:items-center px-4 py-3 text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="w-8 sm:w-10 font-bold">2</div>
          <div className="flex-1">
            <p className="font-semibold">Caught U Sleeping</p>
            <p className="text-gray-500">Age 2 · WGT 9-2</p>
          </div>
          <div className="text-gray-700 sm:text-right">
            <p>J: Ben Coen</p>
            <p>T: Noel Meade</p>
          </div>
          <div className="sm:ml-4 text-right">
            <p className="font-bold">TS -</p>
            <p className="font-bold">RPR 95</p>
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row sm:items-center px-4 py-3 text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="w-8 sm:w-10 font-bold">3</div>
          <div className="flex-1">
            <p className="font-semibold">Diamond Necklace</p>
            <p className="text-gray-500">Age 2 · WGT 9-2</p>
          </div>
          <div className="text-gray-700 sm:text-right">
            <p>J: Christophe Soumillon</p>
            <p>T: A P O&apos;Brien</p>
          </div>
          <div className="sm:ml-4 text-right">
            <p className="font-bold">TS 86</p>
            <p className="font-bold">RPR 92</p>
          </div>
        </div>
      </div>
    </div>
  );
}
