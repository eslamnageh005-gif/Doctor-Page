import { NavLink } from "react-router-dom";
import { LayoutDashboard, Calendar, FileText, User, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Appointments", url: "/appointments", icon: Calendar },
  { title: "Medical Records", url: "/medical-records", icon: FileText },
  { title: "Doctor Profile", url: "/profile", icon: User },
];

// export function AppSidebar() {
//   return (
// { <aside className="hidden md:flex w-64 min-h-screen bg-sidebar flex-col shrink-0">      Logo 
  
//       <div className="flex items-center gap-3 px-6 py-6 border-b border-sidebar-border">
//         <div className="w-9 h-9 rounded-lg bg-sidebar-primary flex items-center justify-center">
//           <Stethoscope className="w-5 h-5 text-sidebar-primary-foreground" />
//         </div>
//         <div>
//           <p className="text-sm font-bold text-sidebar-foreground font-display">MediDash</p>
//           <p className="text-xs text-sidebar-muted">Healthcare Portal</p>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-3 py-5 space-y-1">
//         <p className="text-xs font-semibold uppercase tracking-widest text-sidebar-muted px-4 mb-3">
//           Main Menu
//         </p>
//         {navItems.map((item) => (
//           <NavLink
//             key={item.url}
//             to={item.url}
//             end={item.url === "/"}
//             className={({ isActive }) =>
//               cn("sidebar-nav-item", isActive && "active")
//             }
//           >
//             <item.icon className="w-4.5 h-4.5 shrink-0" size={18} />
//             <span>{item.title}</span>
//           </NavLink>
//         ))}
//       </nav>

//       {/* Footer */}
//       <div className="px-4 py-4 border-t border-sidebar-border">
//         <div className="flex items-center gap-3 px-2">
//           <div className="w-8 h-8 rounded-full bg-sidebar-primary flex items-center justify-center text-xs font-bold text-sidebar-primary-foreground">
//             JD
//           </div>
//           <div>
//             <p className="text-xs font-semibold text-sidebar-foreground">Dr. John Doe</p>
//             <p className="text-xs text-sidebar-muted">Cardiologist</p>
//           </div>
//         </div>
//       </div>
//     </aside>g
// }
export function AppSidebar() {
  return (
    // شيل hidden md:flex من هنا لأننا بنتحكم فيها من الـ Layout
    <aside className="w-full h-full bg-sidebar flex flex-col border-r">
      {/* محتوى السايد بار */}
    </aside>
  );
}