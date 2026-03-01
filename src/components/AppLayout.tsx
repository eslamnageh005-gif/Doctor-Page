// import { ReactNode } from "react";
// import { AppSidebar } from "./AppSidebar";
// import { AppHeader } from "./AppHeader";

// interface AppLayoutProps {
//   children: ReactNode;
// }

// export function AppLayout({ children }: AppLayoutProps) {
//   return (
//     <div className="flex min-h-screen w-full bg-background">
//       <AppSidebar />
//       <div className="flex flex-col flex-1 min-w-0">
//         <AppHeader />
//         <main className="flex-1 p-6 overflow-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* السايد بار - ضفنا له تحكم الموبايل */}
      <div className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <AppSidebar />
        {/* خلفية شفافة تظهر في الموبايل لقفل المنيو عند الضغط براها */}
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        {/* نمرر وظيفة الفتح للهيدر */}
        <AppHeader onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}