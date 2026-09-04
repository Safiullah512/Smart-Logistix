import { useEffect, useState } from "react";

import { Phone, Truck, User } from "lucide-react";

import Timeline from "./Timeline";
import TrackingMap from "./TrackingMap";

import { deliveryData } from "../data/deliveryData";

function DeliveryTracking() {
  const [progress, setProgress] = useState(35);

  const [currentStep, setCurrentStep] = useState(2);

  // Simulated Live Tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((previousProgress) => {
        if (previousProgress >= 100) {
          return 100;
        }

        return previousProgress + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Progress ke according timeline update

  useEffect(() => {
    if (progress >= 100) {
      setCurrentStep(4);
    } else if (progress >= 80) {
      setCurrentStep(3);
    } else if (progress >= 30) {
      setCurrentStep(2);
    } else if (progress >= 10) {
      setCurrentStep(1);
    } else {
      setCurrentStep(0);
    }
  }, [progress]);

  const statusList = [
    "Order Received",
    "Picked Up",
    "In Transit",
    "Out for Delivery",
    "Delivered",
  ];

  return (
    <div className="min-h-screen bg-slate-100 mt-3 *:text-xs">
      <div className=" rounded border border-slate-200 bg-white shadow-sm sm:p-7">
        {/* HEADER */}

        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Delivery Details
            </p>

            <h1 className="mt-3 text-xl font-bold text-slate-800">
              {deliveryData.orderId}
            </h1>

            <p className="mt-1 text-xs text-slate-500">
              {deliveryData.pickupLocation}
            </p>
          </div>

          {/* Status Badge */}

          <div className="rounded-lg bg-indigo-50 px-3 py-2">
            <span className="text-xs font-semibold text-indigo-600">
              {statusList[currentStep]}
            </span>
          </div>
        </div>

        {/* Divider */}

        <div className="my-2 border-t border-slate-200" />

        {/* TIMELINE */}

        <Timeline currentStep={currentStep} />

        {/* Divider */}

        <div className="my-2 border-t border-slate-200" />

        {/* LIVE TRACKING HEADER */}

        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold text-slate-800">Live Tracking</h2>

          <span className="text-xs text-slate-500">
            Updated {deliveryData.updatedTime}
          </span>
        </div>

        {/* MAP */}

        <TrackingMap progress={progress} />

        {/* Divider */}

        <div className="my-2 border-t border-slate-200" />

        {/* DRIVER INFO */}

        <div className="grid grid-cols-2 gap-4">
          {/* Vehicle */}

          <div>
            <div className="flex items-center gap-2 text-slate-500">
              <Truck size={16} />

              <span className="text-xs">Vehicle</span>
            </div>

            <p className="mt-2 text-sm font-semibold text-slate-800">
              {deliveryData.vehicle}
            </p>
          </div>

          {/* Driver */}

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-slate-500">
                <User size={16} />

                <span className="text-xs">Driver</span>
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-800">
                {deliveryData.driver}
              </p>
            </div>

            {/* Phone Button */}

            <a
              href={`tel:${deliveryData.phone}`}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-200 text-indigo-600 transition hover:bg-indigo-50"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Demo Controls */}

        <div className="mt-3 flex gap-3 border-t pt-3">
          <button
            onClick={() => setProgress((prev) => Math.max(prev - 10, 0))}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm"
          >
            Back
          </button>

          <button
            onClick={() => setProgress((prev) => Math.min(prev + 10, 100))}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white"
          >
            Move Truck
          </button>

          <button
            onClick={() => setProgress(0)}
            className="rounded-lg border border-red-200 px-4 py-2 text-sm text-red-500"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryTracking;
