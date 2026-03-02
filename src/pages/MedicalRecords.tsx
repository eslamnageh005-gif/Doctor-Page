import { useNavigate } from "react-router-dom";
import  AppLayout  from "@/components/AppLayout";
import { Plus, FileText } from "lucide-react";

const records = [
  { patient: "Linda Milton", date: "19 Oct 2025", diagnosis: "Hypertension", treatment: "Amlodipine 5mg" },
  { patient: "Patrick Jane", date: "20 Oct 2025", diagnosis: "Asthma", treatment: "Albuterol Inhaler" },
  { patient: "Alice Morgan", date: "21 Oct 2025", diagnosis: "Type 2 Diabetes", treatment: "Metformin 500mg" },
  { patient: "David Clark", date: "22 Oct 2025", diagnosis: "Migraine", treatment: "Sumatriptan" },
  { patient: "Grace Turner", date: "23 Oct 2025", diagnosis: "Hypothyroidism", treatment: "Levothyroxine" },
];

export default function MedicalRecords() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Medical Records</h1>
          <p className="text-sm text-muted-foreground mt-1">General Documents / Medical Records</p>
        </div>
        <button
          onClick={() => navigate("/medical-records/new")}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-glow transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Record
        </button>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            <h2 className="text-base font-semibold text-foreground">Patient Records</h2>
          </div>
          <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full font-medium">
            {records.length} records
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/40">
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Patient</th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Date</th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Diagnosis</th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Treatment</th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {records.map((rec, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent">
                        {rec.patient.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="text-sm font-medium text-foreground">{rec.patient}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{rec.date}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-foreground">{rec.diagnosis}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{rec.treatment}</td>
                  <td className="px-6 py-4">
                    <button className="text-xs text-primary font-semibold hover:underline">View</button>
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
