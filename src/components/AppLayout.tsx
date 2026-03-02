import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#F3F4F6] text-[#111827] overflow-hidden font-sans">
      {/* السايد بار باللون الغامق الاحترافي */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#0F172A] transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0 md:block
      `}>
        <AppSidebar />
      </div>

      {/* الجزء الرئيسي: الهيدر والمحتوى */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <AppHeader onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1400px] mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>

      {/* خلفية شفافة للموبايل فقط */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}