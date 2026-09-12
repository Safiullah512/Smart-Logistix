import React, { useState } from "react";
import {
  FileText,
  Calendar,
  ChevronDown,
  RefreshCw,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ---------------- Data ----------------

const actionStyles = {
  Login: "bg-emerald-50 text-emerald-600",
  Update: "bg-blue-50 text-blue-600",
  Create: "bg-green-50 text-green-600",
  Delete: "bg-red-50 text-red-500",
  Logout: "bg-slate-100 text-slate-600",
};

const moduleStyles = {
  Authentication: "bg-indigo-50 text-indigo-600",
  Deliveries: "bg-violet-50 text-violet-600",
  Drivers: "bg-emerald-50 text-emerald-600",
  Settings: "bg-orange-50 text-orange-600",
  Vehicles: "bg-fuchsia-50 text-fuchsia-600",
  Routes: "bg-sky-50 text-sky-600",
  Bookings: "bg-purple-50 text-purple-600",
  Warehouses: "bg-teal-50 text-teal-600",
};

const logs = [
  {
    id: "#1245",
    name: "Admin",
    email: "admin@smartlogix.com",
    action: "Login",
    module: "Authentication",
    details: "User logged in successfully",
    date: "20 Sep 2025",
    time: "10:42 AM",
    ip: "192.168.1.10",
  },
  {
    id: "#1244",
    name: "Ravi Kumar",
    email: "ravi@smartlogix.com",
    action: "Update",
    module: "Deliveries",
    details: "Delivery status updated (DL-4587)",
    date: "20 Sep 2025",
    time: "09:18 AM",
    ip: "192.168.1.25",
  },
  {
    id: "#1243",
    name: "Sneha Patel",
    email: "sneha@smartlogix.com",
    action: "Create",
    module: "Drivers",
    details: "New driver added (Driver ID: DR-102)",
    date: "20 Sep 2025",
    time: "08:54 AM",
    ip: "192.168.1.32",
  },
  {
    id: "#1242",
    name: "Admin",
    email: "admin@smartlogix.com",
    action: "Update",
    module: "Settings",
    details: "System preferences updated",
    date: "20 Sep 2025",
    time: "08:12 AM",
    ip: "192.168.1.10",
  },
  {
    id: "#1241",
    name: "Amit Verma",
    email: "amit@smartlogix.com",
    action: "Delete",
    module: "Vehicles",
    details: "Vehicle removed (VEH-003)",
    date: "19 Sep 2025",
    time: "06:32 PM",
    ip: "192.168.1.45",
  },
  {
    id: "#1240",
    name: "Pooja Singh",
    email: "pooja@smartlogix.com",
    action: "Create",
    module: "Routes",
    details: "New route added (Route-Delhi-Noida)",
    date: "19 Sep 2025",
    time: "04:21 PM",
    ip: "192.168.1.52",
  },
  {
    id: "#1239",
    name: "Rahul Yadav",
    email: "rahul@smartlogix.com",
    action: "Login",
    module: "Authentication",
    details: "User logged in successfully",
    date: "19 Sep 2025",
    time: "01:03 PM",
    ip: "192.168.1.18",
  },
  {
    id: "#1238",
    name: "Neha Sharma",
    email: "neha@smartlogix.com",
    action: "Update",
    module: "Bookings",
    details: "Booking status updated (BK-7789)",
    date: "18 Sep 2025",
    time: "11:47 AM",
    ip: "192.168.1.76",
  },
  {
    id: "#1237",
    name: "Vikash Gupta",
    email: "vikash@smartlogix.com",
    action: "Create",
    module: "Warehouses",
    details: "New warehouse added (WH-005)",
    date: "18 Sep 2025",
    time: "09:15 AM",
    ip: "192.168.1.21",
  },
  {
    id: "#1236",
    name: "Admin",
    email: "admin@smartlogix.com",
    action: "Logout",
    module: "Authentication",
    details: "User logged out",
    date: "17 Sep 2025",
    time: "07:42 PM",
    ip: "192.168.1.10",
  },
];

// ---------------- Small components ----------------

function Pill({ children, className }) {
  return (
    <span
      className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${className}`}
    >
      {children}
    </span>
  );
}

function FilterSelect({ label, value, icon: Icon }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <button className="flex items-center justify-between gap-2 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-600 hover:bg-slate-50 min-w-[200px]">
        <span className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-slate-400" />}
          {value}
        </span>
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>
    </div>
  );
}

// ---------------- Main page ----------------

export default function ActivityLogsPage() {
  const [page, setPage] = useState(1);

  return (
    <div className="min-h-screen  bg-white p-3 rounded shadow-[0_0_3px_rgba(0,0,0,0.3)]">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-slate-900 font-semibold text-xl">
              Activity Logs
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">
              View and track all recent activity on your platform.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex flex-wrap items-end gap-4">
            <FilterSelect
              label="Date Range"
              value="20 Aug 2025  –  20 Sep 2025"
              icon={Calendar}
            />
            <FilterSelect label="Action Type" value="All Actions" />
            <FilterSelect label="User" value="All Users" />
            <button className="flex items-center gap-2 border border-indigo-200 text-indigo-600 text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-indigo-50 transition-colors ml-auto">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <p className="text-sm font-semibold text-slate-800">
              Recent Activity Logs
            </p>
            <p className="text-sm text-slate-400">Total Logs: 124</p>
          </div>
          <div className="overflow-x-auto border-t border-slate-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-left">
                  <th className="font-medium px-6 py-3">ID</th>
                  <th className="font-medium px-6 py-3">User</th>
                  <th className="font-medium px-6 py-3">Action</th>
                  <th className="font-medium px-6 py-3">Module</th>
                  <th className="font-medium px-6 py-3">Details</th>
                  <th className="font-medium px-6 py-3">Date &amp; Time</th>
                  <th className="font-medium px-6 py-3">IP Address</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="border-t border-slate-100">
                    <td className="px-6 py-3.5 text-slate-500">{log.id}</td>
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                          <User className="w-4 h-4 text-indigo-500" />
                        </div>
                        <div>
                          <p className="text-slate-800 font-medium">
                            {log.name}
                          </p>
                          <p className="text-slate-400 text-xs">{log.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3.5">
                      <Pill className={actionStyles[log.action]}>
                        {log.action}
                      </Pill>
                    </td>
                    <td className="px-6 py-3.5">
                      <Pill className={moduleStyles[log.module]}>
                        {log.module}
                      </Pill>
                    </td>
                    <td className="px-6 py-3.5 text-slate-600">
                      {log.details}
                    </td>
                    <td className="px-6 py-3.5">
                      <p className="text-indigo-600">{log.date}</p>
                      <p className="text-slate-400 text-xs">{log.time}</p>
                    </td>
                    <td className="px-6 py-3.5 text-slate-500">{log.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
            <p className="text-sm text-slate-500">
              Showing 1 to 10 of 124 logs
            </p>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {[1, 2, 3, 4, 5].map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium ${
                    page === p
                      ? "bg-indigo-600 text-white"
                      : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {p}
                </button>
              ))}
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
