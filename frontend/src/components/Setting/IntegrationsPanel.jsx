import React from "react";
import {
  Share2,
  MoreVertical,
  MapPin,
  MessageCircle,
  TrendingUp,
  Mail,
  Link2,
} from "lucide-react";

// ---------------- Data ----------------

const connectedIntegrations = [
  {
    name: "Google Maps",
    desc: "Used for route mapping and location services.",
    synced: "Last synced: 2 min ago",
    iconWrapClass: "bg-white",
    icon: <MapPin className="w-5 h-5 text-red-500" />,
  },
  {
    name: "WhatsApp Business",
    desc: "Send order updates and notifications to customers.",
    synced: "Last synced: 5 min ago",
    iconWrapClass: "bg-green-500",
    icon: <MessageCircle className="w-5 h-5 text-white" />,
  },
  {
    name: "Razorpay",
    desc: "Payment processing for invoices and bookings.",
    synced: "Last synced: 1 hour ago",
    iconWrapClass: "bg-white",
    icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
  },
];

const availableIntegrations = [
  {
    name: "Email Service (SMTP)",
    desc: "Send emails for alerts, invoices and reports.",
    icon: <Mail className="w-5 h-5 text-indigo-600" />,
    iconBg: "bg-indigo-50",
  },
  {
    name: "Slack",
    desc: "Get notifications and updates in your Slack channel.",
    icon: <Mail className="w-5 h-5 text-fuchsia-500" />,
    iconBg: "bg-fuchsia-50",
  },
  {
    name: "HubSpot",
    desc: "Sync leads, contacts and customer data.",
    icon: <Share2 className="w-5 h-5 text-orange-500" />,
    iconBg: "bg-orange-50",
  },
  {
    name: "Zoho CRM",
    desc: "Sync customer and sales data with Zoho CRM.",
    icon: <Link2 className="w-5 h-5 text-blue-500" />,
    iconBg: "bg-blue-50",
  },
  {
    name: "QuickBooks",
    desc: "Sync invoices, payments and accounting data.",
    icon: <span className="text-green-600 font-bold text-xs">qb</span>,
    iconBg: "bg-green-50",
  },
];

// ---------------- Small components ----------------

function IntegrationRow({ iconNode, iconWrapClass, name, desc, trailing }) {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 last:border-b-0">
      <div className="flex items-center gap-3.5">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 ${iconWrapClass}`}
        >
          {iconNode}
        </div>
        <div>
          <p className="text-sm font-medium text-slate-800">{name}</p>
          <p className="text-sm text-slate-500">{desc}</p>
        </div>
      </div>
      {trailing}
    </div>
  );
}

// ---------------- Main component ----------------

export default function IntegrationsPanel() {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
            <Share2 className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-slate-900 font-semibold text-xl">
              Integrations
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">
              Connect SmartLogix AI with your favorite tools and services.
            </p>
          </div>
        </div>

        {/* Connected integrations */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <p className="text-sm font-semibold text-slate-800">
              Connected Integrations
            </p>
          </div>
          {connectedIntegrations.map((item) => (
            <IntegrationRow
              key={item.name}
              iconWrapClass={item.iconWrapClass}
              iconNode={item.icon}
              name={item.name}
              desc={item.desc}
              trailing={
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-medium px-2.5 py-1 rounded-full">
                      Connected
                    </span>
                    <p className="text-xs text-slate-400 mt-1">{item.synced}</p>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              }
            />
          ))}
        </div>

        {/* Available integrations */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <p className="text-sm font-semibold text-slate-800">
              Available Integrations
            </p>
          </div>
          {availableIntegrations.map((item) => (
            <IntegrationRow
              key={item.name}
              iconWrapClass={item.iconBg}
              iconNode={item.icon}
              name={item.name}
              desc={item.desc}
              trailing={
                <button className="border border-indigo-200 text-indigo-600 text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors whitespace-nowrap">
                  Connect
                </button>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
