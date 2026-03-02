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
export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
     <div className={`
  /* 1. الإعدادات الأساسية للموبايل */
  fixed inset-y-0 left-0 z-50 w-64 bg-sidebar transition-transform duration-300 ease-in-out
  
  /* 2. السطر السحري اللي سألت عليه */
  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
  
  /* 3. الإعدادات للاب توب (عشان يظهر ثابت) */
  md:relative md:translate-x-0 md:flex
`}>
  <AppSidebar />
</div>

      {/* الخلفية الشفافة (Overlay) - تظهر فقط لما المنيو تتفتح في الموبايل */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <AppHeader onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}