import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#F8F9FA] overflow-hidden">
      {/* 1. السايد بار (القائمة الجانبية) */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#1A2332] transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0 md:block
      `}>
        <AppSidebar />
      </div>

      {/* 2. الجزء الرئيسي (الهيدر والمحتوى) */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* نمرر الـ Function للهيدر عشان يفتح المنيو في الموبايل */}
        <AppHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* المحتوى الداخلي مع سكرول منفصل */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* 3. غطاء شفاف للموبايل */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}