import {
  faClock,
  faGasPump,
  faIndianRupeeSign,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowUp } from "lucide-react";

function PredictedImpact() {
  const impacts = [
    {
      title: "Time Saved (Est.)",
      value: "124 hrs",
      change: "8.6%",
      icon: faClock,
      color: "green",
    },
    {
      title: "Fuel Saved (Est.)",
      value: "2,850 L",
      change: "7.3%",
      icon: faGasPump,
      color: "orange",
    },
    {
      title: "Cost Savings (Est.)",
      value: "₹1.25M",
      change: "9.4%",
      icon: faIndianRupeeSign,
      color: "violet",
    },
    {
      title: "Risk Avoided",
      value: "48",
      change: "10.2%",
      icon: faShieldHalved,
      color: "blue",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-[0_0_5px_rgba(0,0,0,0.2)]">
      
      <h2 className="font-bold text-sm mb-4">
        Predicted Impact <span className="font-normal text-slate-500">(This Week)</span>
      </h2>

      <div className="grid grid-cols-4 gap-3">
        {impacts.map((item) => (
          <div
            key={item.title}
            className="border border-slate-200 rounded-lg p-3"
          >
            {/* Icon */}
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-3
                ${
                  item.color === "green"
                    ? "bg-green-100 text-green-600"
                    : item.color === "orange"
                    ? "bg-orange-100 text-orange-600"
                    : item.color === "violet"
                    ? "bg-violet-100 text-violet-600"
                    : "bg-blue-100 text-blue-600"
                }`}
            >
              <FontAwesomeIcon icon={item.icon} />
            </div>

            {/* Title */}
            <p className="text-xs text-slate-600">
              {item.title}
            </p>

            {/* Value */}
            <h3 className="font-bold text-xl mt-2">
              {item.value}
            </h3>

            {/* Change */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-green-600 flex items-center">
                <ArrowUp className="w-4 h-4" />
                <span className="font-bold text-xs">{item.change}</span>
              </span>

              <p className="text-xs">
                from last week
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PredictedImpact;