import React, { useState } from "react";
import {
  Truck,
  Menu,
  Search,
  Bell,
  ChevronDown,
  LayoutDashboard,
  PackageSearch,
  Car,
  Users,
  Route,
  Accessibility,
  BrainCircuit,
  BarChart3,
  CalendarCheck,
  FileText,
  UserCircle2,
  Warehouse,
  Settings as SettingsIcon,
  LogOut,
  User,
  Bell as BellIcon,
  ShieldCheck,
  Share2,
  ShieldAlert,
  CreditCard,
  SlidersHorizontal,
  ScrollText,
  HelpCircle,
  MoreVertical,
  MapPin,
  MessageCircle,
  TrendingUp,
  Mail,
  Link2,
  MailOpen,
} from "lucide-react";

// ---------------- Sidebar config ----------------

const mainNav = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Deliveries", icon: PackageSearch },
  { label: "Vehicles", icon: Car },
  { label: "Drivers", icon: Users },
  { label: "Routes", icon: Route },
  { label: "Accessibility", icon: Accessibility },
  { label: "AI Predictions", icon: BrainCircuit },
  { label: "Reports & Analytics", icon: BarChart3 },
];

const opsNav = [
  { label: "Bookings", icon: CalendarCheck },
  { label: "Invoices", icon: FileText },
  { label: "Customers", icon: UserCircle2 },
  { label: "Warehouses", icon: Warehouse },
];

const settingsTabs = [
  { label: "General", icon: SettingsIcon },
  { label: "Profile", icon: User },
  { label: "Notifications", icon: BellIcon },
  { label: "Security", icon: ShieldCheck },
  { label: "Integrations", icon: Share2 },
  { label: "Users & Roles", icon: Users },
  { label: "Data & Privacy", icon: ShieldAlert },
  { label: "Billing", icon: CreditCard },
  { label: "System Preferences", icon: SlidersHorizontal },
  { label: "Activity Logs", icon: ScrollText },
];

const connectedIntegrations = [
  {
    name: "Google Maps",
    desc: "Used for route mapping and location services.",
    synced: "Last synced: 2 min ago",
    bg: "bg-white",
    icon: <MapPin className="w-5 h-5 text-red-500" />,
  },
  {
    name: "WhatsApp Business",
    desc: "Send order updates and notifications to customers.",
    synced: "Last synced: 5 min ago",
    bg: "bg-green-500",
    icon: <MessageCircle className="w-5 h-5 text-white" />,
  },
  {
    name: "Razorpay",
    desc: "Payment processing for invoices and bookings.",
    synced: "Last synced: 1 hour ago",
    bg: "bg-white",
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

function NavItem({ icon: Icon, label, active }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
        active
          ? "bg-indigo-600 text-white font-medium"
          : "text-slate-300 hover:bg-white/5 hover:text-white"
      }`}
    >
      <Icon className="w-[18px] h-[18px] shrink-0" />
      <span>{label}</span>
    </button>
  );
}

function SettingsTab({ icon: Icon, label, active }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
        active
          ? "bg-indigo-50 text-indigo-600 font-medium"
          : "text-slate-600 hover:bg-slate-50"
      }`}
    >
      <Icon className="w-[17px] h-[17px] shrink-0" />
      <span>{label}</span>
    </button>
  );
}

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

// ---------------- Main page ----------------

export default function SettingsIntegrationsPage() {
  const [activeTab] = useState("Integrations");

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-800">
      {/* Sidebar */}
      <aside className="w-[220px] shrink-0 bg-[#0B0F2B] text-white flex flex-col justify-between h-screen sticky top-0">
        <div className="px-4 pt-5">
          <div className="flex items-center gap-2.5 px-1 pb-5 border-b border-white/10">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <p className="font-semibold text-sm leading-tight">
                SmartLogix AI
              </p>
              <p className="text-[11px] text-slate-400 leading-tight">
                Smart Logistics Platform
              </p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-[11px] tracking-wide text-slate-500 font-semibold px-3 mb-2">
              MAIN
            </p>
            <div className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <NavItem key={item.label} {...item} />
              ))}
            </div>

            <p className="text-[11px] tracking-wide text-slate-500 font-semibold px-3 mb-2 mt-5">
              OPERATIONS
            </p>
            <div className="flex flex-col gap-1">
              {opsNav.map((item) => (
                <NavItem key={item.label} {...item} />
              ))}
            </div>

            <p className="text-[11px] tracking-wide text-slate-500 font-semibold px-3 mb-2 mt-5">
              SETTINGS
            </p>
            <div className="flex flex-col gap-1">
              <NavItem icon={SettingsIcon} label="Settings" active />
            </div>
          </div>
        </div>

        <div className="px-4 pb-5">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
            <LogOut className="w-[18px] h-[18px]" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-[76px] bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <button className="text-slate-500 hover:text-slate-700">
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-lg font-semibold text-slate-900 leading-tight">
                Settings
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                Dashboard <span className="mx-1 text-slate-300">›</span>{" "}
                Settings <span className="mx-1 text-slate-300">›</span>{" "}
                <span className="text-slate-500">Integrations</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                placeholder="Search anything..."
                className="w-56 pl-10 pr-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 placeholder:text-slate-400"
              />
            </div>
            <button className="relative text-slate-500 hover:text-slate-700">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center">
                <User className="w-4.5 h-4.5 text-indigo-500" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-slate-800 leading-tight">
                  Admin
                </p>
                <p className="text-xs text-slate-400 leading-tight">
                  Administrator
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="flex-1 flex gap-6 p-6 min-w-0">
          {/* Settings sub-nav */}
          <div className="w-[230px] shrink-0 flex flex-col gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-2.5 flex flex-col gap-1">
              {settingsTabs.map((tab) => (
                <SettingsTab
                  key={tab.label}
                  {...tab}
                  active={tab.label === activeTab}
                />
              ))}
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-1.5">
                <HelpCircle className="w-4 h-4 text-indigo-500" />
                <p className="text-sm font-semibold text-slate-800">
                  Need Help?
                </p>
              </div>
              <p className="text-sm text-slate-500 mb-3.5">
                Contact support for any assistance.
              </p>
              <button className="w-full border border-indigo-200 text-indigo-600 text-sm font-medium py-2 rounded-lg hover:bg-indigo-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>

          {/* Integrations content */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                <Share2 className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-slate-900 font-semibold text-xl">
                  Integrations
                </h2>
                <p className="text-slate-500 text-sm mt-0.5">
                  Connect SmartLogix AI with your favorite tools and services.
                </p>
              </div>
            </div>

            {/* Connected */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100">
                <p className="text-sm font-semibold text-slate-800">
                  Connected Integrations
                </p>
              </div>
              {connectedIntegrations.map((item) => (
                <IntegrationRow
                  key={item.name}
                  iconWrapClass={item.bg}
                  iconNode={item.icon}
                  name={item.name}
                  desc={item.desc}
                  trailing={
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-medium px-2.5 py-1 rounded-full">
                          Connected
                        </span>
                        <p className="text-xs text-slate-400 mt-1">
                          {item.synced}
                        </p>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  }
                />
              ))}
            </div>

            {/* Available */}
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
      </div>
    </div>
  );
}
