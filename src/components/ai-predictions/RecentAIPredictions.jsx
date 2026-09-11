import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

function RecentAIPredictions() {
  const predictions = [
    {
      id: "PRD-1251",
      type: "Delivery Delay",
      details: "High traffic on NH-48",
      confidence: "92%",
      vehicle: "SLX-7845",
      date: "May 19, 10:25 AM",
      status: "Accurate",
    },
    {
      id: "PRD-1250",
      type: "On-Time Delivery",
      details: "Normal conditions",
      confidence: "88%",
      vehicle: "SLX-7846",
      date: "May 19, 09:45 AM",
      status: "Accurate",
    },
    {
      id: "PRD-1249",
      type: "Route Disruption",
      details: "Heavy rain forecast",
      confidence: "79%",
      vehicle: "SLX-7847",
      date: "May 19, 08:30 AM",
      status: "Accurate",
    },
    {
      id: "PRD-1248",
      type: "Vehicle Breakdown",
      details: "Engine fault probability",
      confidence: "85%",
      vehicle: "SLX-7848",
      date: "May 19, 07:50 AM",
      status: "Pending",
    },
    {
      id: "PRD-1247",
      type: "High Traffic",
      details: "Weekend traffic surge",
      confidence: "90%",
      vehicle: "SLX-7849",
      date: "May 19, 07:10 AM",
      status: "Accurate",
    },
  ];

  return (
    <div className="mt-3 bg-white rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-sm">
          Recent AI Predictions
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">

          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="px-3 py-3">Prediction ID</th>
              <th className="px-3 py-3">Type</th>
              <th className="px-3 py-3">Details</th>
              <th className="px-3 py-3">Confidence</th>
              <th className="px-3 py-3">Predicted For</th>
              <th className="px-3 py-3">Date & Time</th>
              <th className="px-3 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {predictions.map((prediction) => (
              <tr
                key={prediction.id}
                className="border-b border-slate-200"
              >
                <td className="px-3 py-3 font-medium">
                  {prediction.id}
                </td>

                <td className="px-3 py-3">
                  {prediction.type}
                </td>

                <td className="px-3 py-3">
                  {prediction.details}
                </td>

                <td className="px-3 py-3">
                  {prediction.confidence}
                </td>

                <td className="px-3 py-3">
                  {prediction.vehicle}
                </td>

                <td className="px-3 py-3 whitespace-nowrap">
                  {prediction.date}
                </td>

                <td className="px-3 py-3">
                  {prediction.status === "Accurate" ? (
                    <span className="px-2 py-1 rounded-md bg-green-100 text-green-600 whitespace-nowrap">
                      Accurate
                    </span>
                  ) : (
                    <span className="px-2 py-1 rounded-md bg-orange-100 text-orange-600 whitespace-nowrap">
                      Pending
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center mt-3 text-xs text-slate-500">

        <p>
          Showing 1 to 5 of 20 entries
        </p>

        <div className="flex gap-2 items-center">
          <button className="px-2 py-1">
            ‹
          </button>

          <button className="px-3 py-1 rounded bg-violet-600 text-white">
            1
          </button>

          <button className="px-2 py-1">
            2
          </button>

          <button className="px-2 py-1">
            3
          </button>

          <button className="px-2 py-1">
            4
          </button>

          <button className="px-2 py-1">
            ›
          </button>
        </div>

      </div>

    </div>
  );
}

export default RecentAIPredictions;