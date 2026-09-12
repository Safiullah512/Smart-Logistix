import React from "react";
import {
  CreditCard,
  ChevronRight,
  Lock,
  Calendar,
  ClipboardList,
  Truck,
  User,
  Database,
  Zap,
  Download,
} from "lucide-react";

// ---------------- Data ----------------

const planStats = [
  {
    icon: Lock,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    label: "Monthly Price",
    value: "₹4,999",
    unit: "/month",
  },
  {
    icon: Calendar,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    label: "Billing Cycle",
    value: "Monthly",
    unit: "Auto-renewal",
  },
  {
    icon: ClipboardList,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    label: "Next Billing Date",
    value: "20 Sep 2025",
    unit: "In 14 days",
  },
  {
    icon: CreditCard,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    label: "Payment Method",
    value: "•••• 4242",
    unit: "Visa ending in 4242",
  },
];

const usageStats = [
  {
    icon: Truck,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    label: "Deliveries",
    value: "1,245 / 3,000",
    percent: 41,
    barColor: "bg-indigo-600",
  },
  {
    icon: User,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    label: "Users",
    value: "12 / 25",
    percent: 48,
    barColor: "bg-blue-600",
  },
  {
    icon: Database,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    label: "Storage",
    value: "78 GB / 200 GB",
    percent: 39,
    barColor: "bg-emerald-500",
  },
  {
    icon: Zap,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    label: "API Calls",
    value: "12,500 / 50,000",
    percent: 25,
    barColor: "bg-orange-500",
  },
];

const invoices = [
  {
    id: "INV-2025-00045",
    date: "20 Aug 2025",
    plan: "Professional Plan",
    amount: "₹4,999.00",
    status: "Paid",
  },
  {
    id: "INV-2025-00032",
    date: "20 Jul 2025",
    plan: "Professional Plan",
    amount: "₹4,999.00",
    status: "Paid",
  },
  {
    id: "INV-2025-00018",
    date: "20 Jun 2025",
    plan: "Professional Plan",
    amount: "₹4,999.00",
    status: "Paid",
  },
  {
    id: "INV-2025-00005",
    date: "20 May 2025",
    plan: "Professional Plan",
    amount: "₹4,999.00",
    status: "Paid",
  },
];

// ---------------- Small components ----------------

function StatIconValue({ icon: Icon, iconBg, iconColor, label, value, unit }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}
      >
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-base font-semibold text-slate-800">{value}</p>
        <p className="text-xs text-slate-400">{unit}</p>
      </div>
    </div>
  );
}

function UsageCard({
  icon: Icon,
  iconBg,
  iconColor,
  label,
  value,
  percent,
  barColor,
}) {
  return (
    <div className="border border-slate-100 rounded-xl p-4">
      <div className="flex items-center gap-2.5 mb-3">
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}
        >
          <Icon className={`w-4 h-4 ${iconColor}`} />
        </div>
        <div>
          <p className="text-sm text-slate-500 leading-tight">{label}</p>
          <p className="text-sm font-semibold text-slate-800 leading-tight">
            {value}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${barColor}`}
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-xs text-slate-400 w-8 text-right">
          {percent}%
        </span>
      </div>
    </div>
  );
}

function StatusPill({ status }) {
  return (
    <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-medium px-2.5 py-1 rounded-full">
      {status}
    </span>
  );
}

// ---------------- Main page ----------------

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-white p-3 rounded shadow-[0_0_3px_rgba(0,0,0,0.3)]">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
            <CreditCard className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-slate-900 font-semibold text-xl">Billing</h1>
            <p className="text-slate-500 text-sm mt-0.5">
              Manage your subscription, payments and billing details.
            </p>
          </div>
        </div>

        {/* Current Plan */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <p className="text-sm font-semibold text-slate-800">Current Plan</p>
            <button className="border border-indigo-200 text-indigo-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
              Change Plan
            </button>
          </div>
          <div className="border-t border-slate-100 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
            <div className="p-6 lg:border-r border-slate-100">
              <h2 className="text-xl font-semibold text-slate-900">
                Professional Plan
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-medium px-2.5 py-1 rounded-full">
                  Active
                </span>
                <span className="text-xs text-slate-400">
                  Renews on 20 Sep 2025
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-3">
                Best for growing logistics teams and advanced operations.
              </p>
              <button className="flex items-center gap-1 text-indigo-600 text-sm font-medium mt-3 hover:underline">
                View Plan Details
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            {planStats.map((s) => (
              <div
                key={s.label}
                className="p-6 flex items-center lg:border-r border-slate-100 last:border-r-0"
              >
                <StatIconValue {...s} />
              </div>
            ))}
          </div>
        </div>

        {/* Usage Overview */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Usage Overview
              </p>
              <p className="text-sm text-slate-500 mt-0.5">
                Your usage this month (01 Sep – 30 Sep 2025)
              </p>
            </div>
            <button className="border border-indigo-200 text-indigo-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors whitespace-nowrap">
              View Usage Details
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {usageStats.map((u) => (
              <UsageCard key={u.label} {...u} />
            ))}
          </div>
        </div>

        {/* Billing History */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="flex items-start justify-between px-6 py-5">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Billing History
              </p>
              <p className="text-sm text-slate-500 mt-0.5">
                View and download your past invoices.
              </p>
            </div>
            <button className="text-indigo-600 text-sm font-medium hover:underline whitespace-nowrap">
              View All Invoices
            </button>
          </div>
          <div className="overflow-x-auto border-t border-slate-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-left">
                  <th className="font-medium px-6 py-3">Invoice ID</th>
                  <th className="font-medium px-6 py-3">Date</th>
                  <th className="font-medium px-6 py-3">Plan</th>
                  <th className="font-medium px-6 py-3">Amount</th>
                  <th className="font-medium px-6 py-3">Status</th>
                  <th className="font-medium px-6 py-3">Download</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-t border-slate-100">
                    <td className="px-6 py-3.5 text-indigo-600 font-medium">
                      {inv.id}
                    </td>
                    <td className="px-6 py-3.5 text-slate-600">{inv.date}</td>
                    <td className="px-6 py-3.5 text-slate-600">{inv.plan}</td>
                    <td className="px-6 py-3.5 text-slate-800">{inv.amount}</td>
                    <td className="px-6 py-3.5">
                      <StatusPill status={inv.status} />
                    </td>
                    <td className="px-6 py-3.5">
                      <button className="text-indigo-600 hover:text-indigo-700">
                        <Download className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl px-6 py-5 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800">
                Need to update payment method?
              </p>
              <p className="text-sm text-slate-500">
                Update your card details or billing information.
              </p>
            </div>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap">
            Update Payment Method
          </button>
        </div>
      </div>
    </div>
  );
}
