function TopRecommendations() {
  const recommendations = [
    {
      icon: "↗",
      text: "Reroute SLX-7847 to avoid heavy traffic",
      color: "green",
    },
    {
      icon: "🔧",
      text: "Schedule maintenance for SLX-7848",
      color: "violet",
    },
    {
      icon: "◷",
      text: "Increase buffer time for NH-48 deliveries",
      color: "orange",
    },
    {
      icon: "☁",
      text: "Monitor weather conditions in North India",
      color: "blue",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-[0_0_5px_rgba(0,0,0,0.2)]">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-sm">
          Top Recommendations
        </h2>

        <button className="text-blue-600 text-xs font-medium">
          View All
        </button>
      </div>

      {/* Recommendations */}
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-3 py-3 border-b last:border-b-0 border-slate-200"
          >
            {/* Icon */}
            <div
              className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-sm
                ${
                  item.color === "green"
                    ? "bg-green-100 text-green-600"
                    : item.color === "violet"
                    ? "bg-violet-100 text-violet-600"
                    : item.color === "orange"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-blue-100 text-blue-600"
                }`}
            >
              {item.icon}
            </div>

            {/* Text */}
            <p className="text-xs">
              {item.text}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default TopRecommendations;