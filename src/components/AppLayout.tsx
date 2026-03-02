import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background w-full overflow-hidden">
      {/* السايد بار - مخفي في الموبايل وبيظهر لما نفتح المنيو */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0 md:block
      `}>
        <AppSidebar />
      </div>

      {/* خلفية سوداء خفيفة تظهر لما نفتح المنيو في الموبايل */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* المحتوى الرئيسي */}
      <div className="flex-1 flex flex-col min-w-0 w-full relative">
        <AppHeader onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 w-full">
          {children}
        </main>
      </div>
    </div>
  );
}