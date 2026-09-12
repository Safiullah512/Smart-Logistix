import React, { useState } from "react";
import {
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Megaphone,
  FlaskConical,
  Download,
  Eye,
  Trash2,
  Lock,
  CloudUpload,
  FileText,
} from "lucide-react";

// ---------------- Small components ----------------

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0 ${
        checked ? "bg-indigo-600" : "bg-slate-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

function CardHeader({ title, subtitle, action }) {
  return (
    <div className="flex items-start justify-between px-6 py-5">
      <div>
        <p className="text-sm font-semibold text-slate-800">{title}</p>
        <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

function DataRow({ iconNode, iconBg, title, desc, trailing }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
      <div className="flex items-center gap-3.5">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}
        >
          {iconNode}
        </div>
        <div>
          <p className="text-sm font-medium text-slate-800">{title}</p>
          <p className="text-sm text-slate-500">{desc}</p>
        </div>
      </div>
      {trailing}
    </div>
  );
}

function SecurityTile({ iconNode, iconBg, title, desc }) {
  return (
    <div className="border border-slate-100 rounded-xl p-4 flex flex-col gap-3">
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center ${iconBg}`}
      >
        {iconNode}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-800">{title}</p>
        <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

// ---------------- Main page ----------------

export default function DataPrivacyPage() {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [productImprovement, setProductImprovement] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-slate-900 font-semibold text-xl">
              Data &amp; Privacy
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">
              Control how your data is collected, used and protected.
            </p>
          </div>
        </div>

        {/* Data Usage */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <CardHeader
            title="Data Usage"
            subtitle="Manage how your data is used across SmartLogix AI."
            action={
              <button className="flex items-center gap-1 border border-indigo-200 text-indigo-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors whitespace-nowrap">
                Manage Preferences
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            }
          />
          <DataRow
            iconNode={<TrendingUp className="w-4.5 h-4.5 text-indigo-600" />}
            iconBg="bg-indigo-50"
            title="Analytics & Performance"
            desc="Allow us to use data to improve platform performance."
            trailing={<Toggle checked={analytics} onChange={setAnalytics} />}
          />
          <DataRow
            iconNode={<Megaphone className="w-4.5 h-4.5 text-emerald-600" />}
            iconBg="bg-emerald-50"
            title="Marketing Communications"
            desc="Receive updates about new features, tips and offers."
            trailing={<Toggle checked={marketing} onChange={setMarketing} />}
          />
          <DataRow
            iconNode={<FlaskConical className="w-4.5 h-4.5 text-sky-600" />}
            iconBg="bg-sky-50"
            title="Product Improvement"
            desc="Help us improve by sharing anonymous usage data."
            trailing={
              <Toggle
                checked={productImprovement}
                onChange={setProductImprovement}
              />
            }
          />
        </div>

        {/* Data Access & Control */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <CardHeader
            title="Data Access & Control"
            subtitle="Manage, export or delete your data."
          />
          <DataRow
            iconNode={<Download className="w-4.5 h-4.5 text-indigo-600" />}
            iconBg="bg-indigo-50"
            title="Download Your Data"
            desc="Export a copy of all your data."
            trailing={
              <button className="border border-indigo-200 text-indigo-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors whitespace-nowrap">
                Request Export
              </button>
            }
          />
          <DataRow
            iconNode={<Eye className="w-4.5 h-4.5 text-emerald-600" />}
            iconBg="bg-emerald-50"
            title="View Data"
            desc="See what data we have collected about you."
            trailing={
              <button className="border border-indigo-200 text-indigo-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors whitespace-nowrap">
                View Data
              </button>
            }
          />
          <DataRow
            iconNode={<Trash2 className="w-4.5 h-4.5 text-red-500" />}
            iconBg="bg-red-50"
            title="Delete Account"
            desc="Permanently delete your account and data."
            trailing={
              <button className="border border-red-200 text-red-500 text-sm font-medium px-4 py-2 rounded-lg hover:bg-red-50 transition-colors whitespace-nowrap">
                Delete Account
              </button>
            }
          />
        </div>

        {/* Data Security */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <p className="text-sm font-semibold text-slate-800">
            Data Security
          </p>
          <p className="text-sm text-slate-500 mt-0.5 mb-5">
            We take your data security seriously.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SecurityTile
              iconNode={<ShieldCheck className="w-4.5 h-4.5 text-indigo-600" />}
              iconBg="bg-indigo-50"
              title="Data Encryption"
              desc="All data is encrypted in transit and at rest."
            />
            <SecurityTile
              iconNode={<Lock className="w-4.5 h-4.5 text-emerald-600" />}
              iconBg="bg-emerald-50"
              title="Secure Access"
              desc="Role-based access control for all user data."
            />
            <SecurityTile
              iconNode={<CloudUpload className="w-4.5 h-4.5 text-sky-600" />}
              iconBg="bg-sky-50"
              title="Regular Backups"
              desc="Daily backups to ensure data availability."
            />
            <SecurityTile
              iconNode={<FileText className="w-4.5 h-4.5 text-fuchsia-600" />}
              iconBg="bg-fuchsia-50"
              title="Compliance"
              desc="We comply with GDPR and other data regulations."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
