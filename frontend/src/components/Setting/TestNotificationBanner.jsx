import { Send } from "lucide-react";

export default function TestNotificationBanner({ onSendTest }) {
  return (
    <div className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-brand-600/10">
          <Send className="h-5 w-5 text-brand-600" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">Test notification</p>
          <p className="text-xs text-slate-500">Send a test notification to your registered email and phone.</p>
        </div>
      </div>
      <button
        onClick={onSendTest}
        className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
      >
        Send test
      </button>
    </div>
  );
}
