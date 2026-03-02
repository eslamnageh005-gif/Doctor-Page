import { useState } from "react";
import  AppLayout  from "@/components/AppLayout";
import { StatusBadge } from "@/components/StatusBadge";

const upcoming = [
  { patient: "Linda Milton", date: "19 Oct", type: "Checkup", status: "Waiting" as const, id: "APT-10234" },
  { patient: "Carlos Rivera", date: "20 Oct", type: "Consultation", status: "Scheduled" as const, id: "APT-10235" },
  { patient: "Emma Watson", date: "21 Oct", type: "Follow-up", status: "Scheduled" as const, id: "APT-10236" },
  { patient: "Marcus Lee", date: "22 Oct", type: "Checkup", status: "Waiting" as const, id: "APT-10237" },
  { patient: "Sofia Patel", date: "23 Oct", type: "Consultation", status: "Scheduled" as const, id: "APT-10238" },
];

const past = [
  { patient: "Jane Smith", date: "12 Oct", type: "Follow-up", status: "Completed" as const, id: "APT-10220" },
  { patient: "Michael Brown", date: "13 Oct", type: "Checkup", status: "Cancelled" as const, id: "APT-10221" },
  { patient: "Sarah Johnson", date: "14 Oct", type: "Checkup", status: "Completed" as const, id: "APT-10222" },
  { patient: "Tom Harris", date: "15 Oct", type: "Consultation", status: "Completed" as const, id: "APT-10223" },
];

export default function Appointments() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const data = tab === "upcoming" ? upcoming : past;

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Appointments</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage and view all patient appointments</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-muted p-1 rounded-lg w-fit mb-6">
        {(["upcoming", "past"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 rounded-md text-sm font-medium capitalize transition-all ${
              tab === t
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t === "upcoming" ? "Upcoming" : "Past"} Appointments
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-base font-semibold text-foreground capitalize">
            {tab} Appointments
          </h2>
          <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full font-medium">
            {data.length} records
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/40">
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Patient</th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Date</th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Type</th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Status</th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Appointment ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.map((appt) => (
                <tr key={appt.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                        {appt.patient.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="text-sm font-medium text-foreground">{appt.patient}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{appt.date}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{appt.type}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={appt.status} />
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                      {appt.id}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
