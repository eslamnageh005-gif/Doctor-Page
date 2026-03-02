import AppLayout from "@/components/AppLayout"; // بدون أقواس {}
import { Calendar, Users, Clock, CheckCircle2 } from "lucide-react";

const appointments = [
  { patient: "John Doe", time: "09:00 AM", type: "Checkup", status: "Waiting" as const },
  { patient: "Jane Smith", time: "10:30 AM", type: "Follow-up", status: "Completed" as const },
  { patient: "Michael Brown", time: "12:00 PM", type: "Consultation", status: "Cancelled" as const },
  { patient: "Sarah Connor", time: "02:00 PM", type: "Checkup", status: "Waiting" as const },
  { patient: "Robert Mills", time: "03:30 PM", type: "Follow-up", status: "Scheduled" as const },
];

const stats = [
  { label: "Total Today", value: "12", icon: Calendar, color: "bg-primary/10 text-primary" },
  { label: "Waiting", value: "4", icon: Clock, color: "bg-[hsl(var(--status-waiting-bg))] text-[hsl(var(--status-waiting))]" },
  { label: "Completed", value: "7", icon: CheckCircle2, color: "bg-[hsl(var(--status-completed-bg))] text-[hsl(var(--status-completed))]" },
  { label: "Total Patients", value: "248", icon: Users, color: "bg-accent/10 text-accent" },
];

export default function Dashboard() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <AppLayout>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Today's Overview</h1>
        <p className="text-sm text-muted-foreground mt-1">{today}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl border border-border p-5 flex items-center gap-4">
            <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Appointments Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-base font-semibold text-foreground">Today's Appointments</h2>
          <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full font-medium">
            {appointments.length} appointments
          </span>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-muted/40">
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Patient</th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Time</th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Type</th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {appointments.map((appt, i) => (
              <tr key={i} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                      {appt.patient.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className="text-sm font-medium text-foreground">{appt.patient}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{appt.time}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{appt.type}</td>
                <td className="px-6 py-4">
                // امسح السطر اللي فيه StatusBadge وحط ده مكانه:
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                    appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                    {appointment.status === 'completed' ? 'مكتمل' :
                      appointment.status === 'pending' ? 'منتظر' : 'ملغي'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}
