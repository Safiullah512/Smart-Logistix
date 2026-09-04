import { Truck, MapPin } from "lucide-react";

function TrackingMap({ progress }) {
  return (
    <div className="relative h-[100px] w-full overflow-hidden rounded border border-slate-200 bg-[#eaf0f7]">
      {/* Fake Roads */}

      <div className="absolute left-[-10%] top-[35%] h-4 w-[120%] rotate-6 bg-white opacity-80" />

      <div className="absolute left-[20%] top-[-10%] h-[120%] w-4 -rotate-[25deg] bg-white opacity-80" />

      <div className="absolute left-[55%] top-[-10%] h-[120%] w-5 rotate-[30deg] bg-white opacity-80" />

      <div className="absolute left-[5%] top-[70%] h-3 w-[110%] -rotate-[8deg] bg-white opacity-70" />

      {/* Pickup Location */}

      <div className="absolute left-[8%] top-[65%] flex flex-col items-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">
          <MapPin size={18} />
        </div>

        <p className="mt-2 whitespace-nowrap text-xs font-medium text-slate-700">
          Connaught Place
        </p>
      </div>

      {/* Destination */}

      <div className="absolute right-[8%] top-[25%] flex flex-col items-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white shadow-lg">
          <MapPin size={18} />
        </div>

        <p className="mt-2 whitespace-nowrap text-xs font-medium text-slate-700">
          Noida Sector 18
        </p>
      </div>

      {/* Route */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
      >
        <polyline
          points="100,330 250,300 350,370 480,280 620,300 750,180 900,130"
          fill="none"
          stroke="#4f46e5"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Moving Truck */}

      <div
        className="absolute z-20 transition-all duration-1000 ease-linear"
        style={{
          left: `${10 + progress * 0.78}%`,
          top: `${65 - progress * 0.35}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-xl">
          <Truck size={25} />
        </div>
      </div>

      {/* Progress */}

      <div className="absolute bottom-3 left-3 rounded-lg bg-white px-3 py-2 text-xs font-medium shadow">
        Delivery Progress: {progress.toFixed(0)}%
      </div>
    </div>
  );
}

export default TrackingMap;
