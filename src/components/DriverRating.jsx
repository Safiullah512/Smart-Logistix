import { useState } from "react";
import { driversData } from "../services/DriverData";
import { Star } from "lucide-react";
function DriverRating() {
  const driverData1 = driversData[0];

  return (
    <div className="flex items-center gap-1 mt-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={
            star <= Math.floor(driverData1.rating)
              ? "fill-yellow-500 text-yellow-500"
              : "fill-slate-400 text-slate-300"
          }
          size={10}
        ></Star>
      ))}

      <span className="text-xs">{driverData1.rating}/5</span>
    </div>
  );
}
export default DriverRating;
