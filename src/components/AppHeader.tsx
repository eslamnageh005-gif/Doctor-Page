import { Search, Globe, ChevronDown, Bell } from "lucide-react";
import { useEffect, useRef } from "react";
import doctorImg from "@/assets/doctor-profile.jpg";

export function AppHeader() {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "e") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="h-16 bg-card border-b border-border flex items-center px-6 gap-4 shrink-0">
      {/* Search */}
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          ref={searchRef}
          type="text"
          placeholder="Search patients, records…"
          className="w-full pl-9 pr-16 py-2 text-sm bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all placeholder:text-muted-foreground"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground bg-background border border-border rounded px-1.5 py-0.5 font-mono">
          Ctrl+E
        </kbd>
      </div>

      <div className="flex items-center gap-3 ml-auto">
        {/* Language */}
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-muted transition-colors">
          <Globe className="w-4 h-4" />
          <span className="font-medium">English US</span>
          <ChevronDown className="w-3 h-3" />
        </button>

        {/* Notifications */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-muted transition-colors">
          <Bell className="w-4.5 h-4.5 text-muted-foreground" size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        </button>

        {/* Doctor info */}
        <div className="flex items-center gap-3 pl-3 border-l border-border">
          <div className="text-right">
            <p className="text-sm font-semibold text-foreground leading-none">Dr. John Doe</p>
            <p className="text-xs text-muted-foreground mt-0.5">Cardiologist</p>
          </div>
          <img
            src={doctorImg}
            alt="Dr. John Doe"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/20"
          />
        </div>
      </div>
    </header>
  );
}
