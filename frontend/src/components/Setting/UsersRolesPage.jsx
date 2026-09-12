import React, { useState } from "react";
import {
  Users,
  Plus,
  Search,
  ChevronDown,
  Filter,
  Pencil,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Headset,
  Car,
  UserCog,
} from "lucide-react";

// ---------------- Data ----------------

const users = [
  {
    name: "Admin User",
    email: "admin@smartlogix.ai",
    role: "Administrator",
    roleClass: "bg-indigo-50 text-indigo-600",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-600",
    lastActive: "Today, 10:30 AM",
    avatarBg: "bg-indigo-100",
    avatarColor: "text-indigo-500",
  },
  {
    name: "Rohit Sharma",
    email: "rohit@smartlogix.ai",
    role: "Manager",
    roleClass: "bg-sky-50 text-sky-600",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-600",
    lastActive: "Today, 09:15 AM",
    avatarBg: "bg-sky-100",
    avatarColor: "text-sky-500",
  },
  {
    name: "Neha Singh",
    email: "neha@smartlogix.ai",
    role: "Dispatcher",
    roleClass: "bg-emerald-50 text-emerald-600",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-600",
    lastActive: "Yesterday, 06:45 PM",
    avatarBg: "bg-emerald-100",
    avatarColor: "text-emerald-500",
  },
  {
    name: "Amit Verma",
    email: "amit@smartlogix.ai",
    role: "Driver",
    roleClass: "bg-orange-50 text-orange-600",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-600",
    lastActive: "Yesterday, 04:20 PM",
    avatarBg: "bg-orange-100",
    avatarColor: "text-orange-500",
  },
  {
    name: "Sneha Patel",
    email: "sneha@smartlogix.ai",
    role: "Support",
    roleClass: "bg-pink-50 text-pink-600",
    status: "Inactive",
    statusClass: "bg-red-50 text-red-500",
    lastActive: "2 days ago",
    avatarBg: "bg-pink-100",
    avatarColor: "text-pink-500",
  },
];

const roleOverview = [
  {
    count: 1,
    label: "Administrator",
    desc: "Full access",
    icon: ShieldCheck,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    count: 2,
    label: "Managers",
    desc: "Manage operations",
    icon: Users,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    count: 3,
    label: "Dispatchers",
    desc: "Handle deliveries",
    icon: Headset,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    count: 6,
    label: "Drivers",
    desc: "On the road",
    icon: Car,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    count: 3,
    label: "Support",
    desc: "Customer support",
    icon: UserCog,
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

// ---------------- Small components ----------------

function Avatar({ name, bg, color }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div
      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${bg} ${color}`}
    >
      {initials}
    </div>
  );
}

function Pill({ children, className }) {
  return (
    <span
      className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${className}`}
    >
      {children}
    </span>
  );
}

// ---------------- Main page ----------------

export default function UsersRolesPage() {
  const [activeTab, setActiveTab] = useState("Users");
  const [page, setPage] = useState(1);

  return (
    <div className="min-h-screen bg-white p-3 rounded shadow-[0_0_3px_rgba(0,0,0,0.3)]">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-slate-900 font-semibold text-xl">
                Users &amp; Roles
              </h1>
              <p className="text-slate-500 text-sm mt-0.5">
                Manage platform users and their roles &amp; permissions.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            Add User
          </button>
        </div>

        {/* Main card */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex items-center gap-6 px-6 pt-4 border-b border-slate-100">
            {["Users", "Roles"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? "text-indigo-600 border-indigo-600"
                    : "text-slate-500 border-transparent hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 px-6 py-4">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                placeholder="Search users by name or email..."
                className="w-full pl-10 pr-3 py-2.5 text-sm rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 placeholder:text-slate-400"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">
              All Roles
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">
              All Statuses
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-left">
                  <th className="font-medium px-6 py-3">User</th>
                  <th className="font-medium px-6 py-3">Role</th>
                  <th className="font-medium px-6 py-3">Status</th>
                  <th className="font-medium px-6 py-3">Last Active</th>
                  <th className="font-medium px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.email} className="border-t border-slate-100">
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <Avatar
                          name={u.name}
                          bg={u.avatarBg}
                          color={u.avatarColor}
                        />
                        <div>
                          <p className="text-slate-800 font-medium">{u.name}</p>
                          <p className="text-slate-400 text-xs">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3.5">
                      <Pill className={u.roleClass}>{u.role}</Pill>
                    </td>
                    <td className="px-6 py-3.5">
                      <Pill className={u.statusClass}>{u.status}</Pill>
                    </td>
                    <td className="px-6 py-3.5 text-slate-600">
                      {u.lastActive}
                    </td>
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">
                          <MoreVertical className="w-3.5 h-3.5" />
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
            <p className="text-sm text-slate-500">Showing 1 to 5 of 15 users</p>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {[1, 2, 3].map((p) => (
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

        {/* Role overview */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-slate-800">
              Role Overview
            </p>
            <p className="text-sm text-slate-400">Total Roles: 5</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {roleOverview.map((r) => (
              <div
                key={r.label}
                className={`rounded-xl p-4 border border-slate-100 ${r.bg}`}
              >
                <div
                  className={`w-9 h-9 rounded-lg bg-white flex items-center justify-center mb-3 ${r.color}`}
                >
                  <r.icon className="w-4.5 h-4.5" />
                </div>
                <p className="text-xl font-semibold text-slate-800">
                  {r.count}
                </p>
                <p className="text-sm font-medium text-slate-700">{r.label}</p>
                <p className="text-xs text-slate-500">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
