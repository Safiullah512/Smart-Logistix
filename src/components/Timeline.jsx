import { Check, Circle } from "lucide-react";

const steps = [
  {
    title: "Order Received",
    time: "May 18, 09:15 AM",
  },
  {
    title: "Picked Up",
    time: "May 18, 10:00 AM",
  },
  {
    title: "In Transit",
    time: "May 18, 11:30 AM",
  },
  {
    title: "Out for Delivery",
    time: "Pending",
  },
  {
    title: "Delivered",
    time: "Pending",
  },
];

function Timeline({ currentStep }) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1.75 top-2 bottom-3 w-0.5 bg-slate-200 text-xs" />

      <div className="space-y-2">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;

          const isCurrent = index === currentStep;

          return (
            <div
              key={index}
              className="relative flex items-center gap-4 text-xs"
            >
              {/* Circle */}
              <div
                className={`
                  relative z-10
                  flex h-3 w-3
                  items-center justify-center
                  rounded-full
                  border-2 *:text-xs
                  
                  ${isCompleted ? "border-emerald-500 bg-emerald-500" : ""}

                  ${isCurrent ? "border-indigo-600 bg-white" : ""}

                  ${
                    !isCompleted && !isCurrent
                      ? "border-slate-300 bg-white"
                      : ""
                  }
                `}
              >
                {isCompleted && (
                  <Check size={8} className="text-white font-bold" />
                )}
              </div>

              {/* Text */}
              <div className="flex flex-1 items-center justify-between text-xs">
                <p
                  className={`
                    text-sm
                    ${
                      isCurrent
                        ? "font-semibold text-indigo-600 text-xs"
                        : "text-slate-600"
                    }
                  `}
                >
                  {step.title}
                </p>

                <span className="text-xs text-slate-500">{step.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
