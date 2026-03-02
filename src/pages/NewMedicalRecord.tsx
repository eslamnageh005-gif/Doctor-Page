import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  AppLayout  from "@/components/AppLayout";
import { Search, Upload, ArrowLeft } from "lucide-react";

interface FormField {
  label: string;
  id: string;
  placeholder: string;
  withSearch?: boolean;
}

const idFields: FormField[] = [
  { label: "Patient ID", id: "patientId", placeholder: "Search patient ID…", withSearch: true },
  { label: "Doctor ID", id: "doctorId", placeholder: "Search doctor ID…", withSearch: true },
  { label: "Appointment ID", id: "appointmentId", placeholder: "Search appointment ID…", withSearch: true },
];

const textFields: FormField[] = [
  { label: "Chief Complaint", id: "complaint", placeholder: "Describe the patient's chief complaint…" },
  { label: "Diagnosis", id: "diagnosis", placeholder: "Enter diagnosis…" },
  { label: "Clinical Notes", id: "notes", placeholder: "Add clinical notes and observations…" },
  { label: "Treatment", id: "treatment", placeholder: "Describe treatment plan…" },
];

export default function NewMedicalRecord() {
  const navigate = useNavigate();
  const [prescriptionFile, setPrescriptionFile] = useState<string>("");
  const [radiologyFile, setRadiologyFile] = useState<string>("");

  return (
    <AppLayout>
      <div className="mb-6">
        <button
          onClick={() => navigate("/medical-records")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Medical Records
        </button>
        <h1 className="text-2xl font-bold text-foreground">New Medical Record</h1>
        <p className="text-sm text-muted-foreground mt-1">Fill in the details to create a new medical record</p>
      </div>

      <div className="max-w-3xl">
        <div className="bg-card rounded-xl border border-border p-6 space-y-6">

          {/* ID Fields */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">
              Reference IDs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {idFields.map((field) => (
                <div key={field.id}>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                    {field.label}
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      id={field.id}
                      placeholder={field.placeholder}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Fields */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">
              Medical Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {textFields.map((field) => (
                <div key={field.id} className={field.id === "notes" ? "md:col-span-2" : ""}>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                    {field.label}
                  </label>
                  <textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    rows={field.id === "notes" ? 4 : 3}
                    className="w-full px-3 py-2.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground resize-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* File Uploads */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">
              Attachments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Prescription */}
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                  Prescription
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                  <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-2">
                    {prescriptionFile || "No file chosen"}
                  </p>
                  <label className="cursor-pointer">
                    <span className="text-xs font-semibold text-primary hover:underline">Choose File</span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => setPrescriptionFile(e.target.files?.[0]?.name || "")}
                    />
                  </label>
                </div>
              </div>

              {/* Radiology */}
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                  Radiology
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                  <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-2">
                    {radiologyFile || "No file chosen"}
                  </p>
                  <label className="cursor-pointer">
                    <span className="text-xs font-semibold text-primary hover:underline">Choose File</span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => setRadiologyFile(e.target.files?.[0]?.name || "")}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-2 border-t border-border">
            <button
              onClick={() => navigate("/medical-records")}
              className="px-5 py-2.5 text-sm font-semibold text-muted-foreground bg-muted rounded-lg hover:bg-secondary transition-colors"
            >
              Cancel
            </button>
            <button className="px-6 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary-glow transition-colors shadow-sm flex items-center gap-2">
              Add Record
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
