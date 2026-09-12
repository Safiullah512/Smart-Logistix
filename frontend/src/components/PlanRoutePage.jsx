import React, { useState } from "react";
import {
  Box,
  MapPin,
  Truck,
  Shield,
  Search,
  ChevronDown,
  Route as RouteIcon,
  Clock,
  ShieldCheck,
  Plus,
  Minus,
  Eye,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ---------------- Data ----------------

const statusStyles = {
  Active: "bg-emerald-50 text-emerald-600",
  Planned: "bg-sky-50 text-sky-600",
  Completed: "bg-violet-50 text-violet-600",
};

const routes = [
  {
    n: 1,
    name: "Delhi → Noida",
    from: "Delhi",
    to: "Noida",
    distance: "50 km",
    time: "1 hr 20 min",
    status: "Active",
  },
  {
    n: 2,
    name: "Noida → Gurgaon",
    from: "Noida",
    to: "Gurgaon",
    distance: "28 km",
    time: "55 min",
    status: "Active",
  },
  {
    n: 3,
    name: "Delhi → Faridabad",
    from: "Delhi",
    to: "Faridabad",
    distance: "32 km",
    time: "1 hr 05 min",
    status: "Planned",
  },
  {
    n: 4,
    name: "Ghaziabad → Delhi",
    from: "Ghaziabad",
    to: "Delhi",
    distance: "22 km",
    time: "50 min",
    status: "Completed",
  },
  {
    n: 5,
    name: "Noida → Greater Noida",
    from: "Noida",
    to: "Greater Noida",
    distance: "18 km",
    time: "40 min",
    status: "Active",
  },
];

// ---------------- Small components ----------------

function FieldLabel({ children }) {
  return (
    <label className="text-sm font-medium text-slate-700">{children}</label>
  );
}

function IconInput({ icon: Icon, placeholder, trailing = true }) {
  return (
    <div className="relative">
      <Icon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
      <input
        placeholder={placeholder}
        className="w-full pl-10 pr-9 py-2.5 text-sm rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 placeholder:text-slate-400"
      />
      {trailing && (
        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      )}
    </div>
  );
}

function IconSelect({ icon: Icon, value }) {
  return (
    <div className="relative">
      <Icon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
      <select className="w-full appearance-none pl-10 pr-9 py-2.5 text-sm rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 bg-white text-slate-600">
        <option>{value}</option>
      </select>
      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}

function StatusPill({ status }) {
  return (
    <span
      className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

// ---------------- Main page ----------------

export default function PlanRoutePage() {
  const [page, setPage] = useState(1);

  return (
    <div className="min-h-screen bg-slate-50 mt-2 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-2">
        {/* Top: form + map */}
        <div className="grid grid-cols-1 xl:grid-cols-[380px_1fr] gap-6">
          {/* Plan a New Route */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-11 h-11 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                <Box className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h1 className="text-slate-900 font-semibold text-[15px]">
                  Plan a New Route
                </h1>
                <p className="text-slate-500 text-sm mt-0.5">
                  Enter source and destination to find the best route.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <FieldLabel>From</FieldLabel>
                <IconInput icon={MapPin} placeholder="Enter source city" />
              </div>
              <div className="flex flex-col gap-2">
                <FieldLabel>To</FieldLabel>
                <IconInput icon={MapPin} placeholder="Enter destination city" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col gap-2">
                <FieldLabel>Vehicle Type</FieldLabel>
                <IconSelect icon={Truck} value="Select vehicle type" />
              </div>
              <div className="flex flex-col gap-2">
                <FieldLabel>Priority</FieldLabel>
                <IconSelect icon={Shield} value="Shortest & Safest" />
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
              <Search className="w-4 h-4" />
              Find Route
            </button>
          </div>

          {/* Route Map */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col">
            <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
              <div>
                <h2 className="text-slate-900 font-semibold text-[15px]">
                  Route Map
                </h2>
                <p className="text-slate-500 text-sm mt-0.5">
                  Delhi → Noida (Shortest &amp; Safest)
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-slate-600">
                  <span className="w-4 h-0.5 bg-emerald-500 rounded-full" />
                  Shortest Route
                </span>
                <span className="flex items-center gap-1.5 text-slate-600">
                  <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
                  Safest Route
                </span>
                <span className="flex items-center gap-1.5 text-slate-600">
                  <span className="w-4 h-0.5 bg-red-400 rounded-full" />
                  Alternative
                </span>
              </div>
            </div>

            <div className="flex-1 flex gap-4 flex-col lg:flex-row">
              {/* Map area */}
              <div className="relative flex-1 rounded-xl overflow-hidden border border-slate-100 bg-[#eaf0e6] min-h-[280px]">
                <svg
                  viewBox="0 0 700 320"
                  className="w-full h-full absolute inset-0"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <rect width="700" height="320" fill="#eef2ea" />
                  <path d="M0 60 L700 90" stroke="#dbe4d6" strokeWidth="3" />
                  <path d="M40 0 L120 320" stroke="#dbe4d6" strokeWidth="3" />
                  <path d="M550 0 L500 320" stroke="#dbe4d6" strokeWidth="3" />
                  {/* shortest (green dotted) */}
                  <path
                    d="M90 55 C 250 100, 400 150, 600 210"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    fill="none"
                  />
                  {/* safest (blue solid) */}
                  <path
                    d="M90 55 C 220 90, 300 160, 400 175 S 560 190, 600 215"
                    stroke="#2563eb"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* alternative (red dotted) */}
                  <path
                    d="M90 55 C 300 60, 480 120, 600 210"
                    stroke="#f87171"
                    strokeWidth="2"
                    strokeDasharray="3 6"
                    fill="none"
                  />
                  {/* markers */}
                  <circle
                    cx="90"
                    cy="55"
                    r="7"
                    fill="#16a34a"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="600"
                    cy="212"
                    r="7"
                    fill="#ef4444"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <text
                    x="103"
                    y="50"
                    fontSize="14"
                    fontWeight="600"
                    fill="#1e293b"
                  >
                    Delhi
                  </text>
                  <text
                    x="613"
                    y="235"
                    fontSize="14"
                    fontWeight="600"
                    fill="#1e293b"
                  >
                    Noida
                  </text>
                  <text x="470" y="95" fontSize="12" fill="#94a3b8">
                    Ghaziabad
                  </text>
                  <text x="30" y="140" fontSize="12" fill="#b6c2b0">
                    Delhi
                  </text>
                  <text x="340" y="290" fontSize="12" fill="#94a3b8">
                    Faridabad
                  </text>
                </svg>

                <div className="absolute left-3 bottom-3 flex flex-col gap-1.5">
                  <button className="w-7 h-7 bg-white rounded-md shadow flex items-center justify-center text-slate-600 hover:bg-slate-50">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-7 h-7 bg-white rounded-md shadow flex items-center justify-center text-slate-600 hover:bg-slate-50">
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Stats sidebar */}
              <div className="lg:w-52 shrink-0 border border-slate-100 rounded-xl p-4 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <RouteIcon className="w-4 h-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-400">Distance</p>
                    <p className="text-sm font-semibold text-slate-800">
                      50 km
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-400">Estimated Time</p>
                    <p className="text-sm font-semibold text-slate-800">
                      1 hr 20 min
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-400">Road Condition</p>
                    <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-medium px-2.5 py-1 rounded-full mt-1">
                      Good
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Routes List */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="flex items-start justify-between px-6 py-5 flex-wrap gap-4">
            <div>
              <p className="text-base font-semibold text-slate-800">
                Routes List
              </p>
              <p className="text-sm text-slate-500 mt-0.5">
                Manage and track all delivery routes.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  placeholder="Search route..."
                  className="w-52 pl-10 pr-3 py-2.5 text-sm rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 placeholder:text-slate-400"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">
                All Status
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto border-t border-slate-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-left">
                  <th className="font-medium px-6 py-3">#</th>
                  <th className="font-medium px-6 py-3">Route Name</th>
                  <th className="font-medium px-6 py-3">From</th>
                  <th className="font-medium px-6 py-3">To</th>
                  <th className="font-medium px-6 py-3">Distance</th>
                  <th className="font-medium px-6 py-3">Estimated Time</th>
                  <th className="font-medium px-6 py-3">Status</th>
                  <th className="font-medium px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((r) => (
                  <tr key={r.n} className="border-t border-slate-100">
                    <td className="px-6 py-3.5 text-slate-500">{r.n}</td>
                    <td className="px-6 py-3.5 text-slate-800 font-medium">
                      {r.name}
                    </td>
                    <td className="px-6 py-3.5 text-slate-600">{r.from}</td>
                    <td className="px-6 py-3.5 text-slate-600">{r.to}</td>
                    <td className="px-6 py-3.5 text-slate-600">{r.distance}</td>
                    <td className="px-6 py-3.5 text-slate-600">{r.time}</td>
                    <td className="px-6 py-3.5">
                      <StatusPill status={r.status} />
                    </td>
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1.5 border border-indigo-200 text-indigo-600 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                          View
                        </button>
                        <button className="text-slate-400 hover:text-slate-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
            <p className="text-sm text-slate-500">Showing 1 to 5 of 5 routes</p>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPage(1)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium ${
                  page === 1
                    ? "bg-indigo-600 text-white"
                    : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
