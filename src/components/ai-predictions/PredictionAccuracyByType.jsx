function PredictionAccuracyByType() {
  const predictionTypes = [
    {
      type: "On-Time Delivery",
      accuracy: "91%",
    },
    {
      type: "Delivery Delay",
      accuracy: "86%",
    },
    {
      type: "Route Disruption",
      accuracy: "82%",
    },
    {
      type: "Vehicle Breakdown",
      accuracy: "84%",
    },
    {
      type: "High Traffic",
      accuracy: "88%",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-[0_0_5px_rgba(0,0,0,0.2)] h-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold text-sm">
          Prediction Accuracy by Type
        </h2>

        <button className="text-blue-600 text-xs font-medium">
          View All
        </button>
      </div>

      {/* Prediction Types */}
      <div className="flex flex-col justify-between h-[220px]">

        {predictionTypes.map((item) => (
          <div
            key={item.type}
            className="flex items-center gap-3"
          >

            {/* Type */}
            <div className="w-36 text-xs">
              {item.type}
            </div>

            {/* Progress Bar */}
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-violet-600 rounded-full"
                style={{
                  width: item.accuracy,
                }}
              ></div>
            </div>

            {/* Percentage */}
            <span className="text-xs font-medium w-8 text-right">
              {item.accuracy}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
}

export default PredictionAccuracyByType;