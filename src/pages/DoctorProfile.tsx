import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { Edit, Mail, Phone, Building2, Award, FileText } from "lucide-react";
import doctorImg from "@/assets/doctor-profile.jpg";

export default function DoctorProfile() {
  const [editing, setEditing] = useState(false);

  const infoSections = [
    {
      icon: Award,
      label: "Medical License",
      value: "123456789",
      color: "text-primary bg-primary/10",
    },
    {
      icon: Mail,
      label: "Contact Email",
      value: "johndoe@example.com",
      color: "text-accent bg-accent/10",
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: "+1 (555) 234-5678",
      color: "text-primary bg-primary/10",
    },
    {
      icon: Building2,
      label: "Affiliated Hospital",
      value: "City General Hospital",
      color: "text-accent bg-accent/10",
    },
    {
      icon: FileText,
      label: "Specialty",
      value: "Cardiology — Board Certified",
      color: "text-primary bg-primary/10",
    },
  ];

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Doctor Profile</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your professional information</p>
      </div>

      <div className="max-w-3xl space-y-6">
        {/* Profile Card */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {/* Banner */}
          <div className="h-28 bg-gradient-to-r from-primary to-primary-glow relative" />

          {/* Profile Info */}
          <div className="px-6 pb-6">
            <div className="flex items-end justify-between -mt-14 mb-4">
              <div className="relative">
                <img
                  src={doctorImg}
                  alt="Dr. John Doe"
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-card shadow-lg"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-[hsl(var(--status-completed))] rounded-full border-2 border-card" />
              </div>
              <button
                onClick={() => setEditing(!editing)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  editing
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-secondary"
                }`}
              >
                <Edit className="w-4 h-4" />
                {editing ? "Save Profile" : "Edit Profile"}
              </button>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground">Dr. John Doe</h2>
              <p className="text-sm text-primary font-semibold mt-0.5">Cardiology</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-semibold">
                  Board Certified
                </span>
                <span className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full font-medium">
                  12 Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">About</h3>
          {editing ? (
            <textarea
              defaultValue="Dr. John Doe is a board-certified cardiologist with over 12 years of experience in diagnosing and treating cardiovascular conditions. He specializes in interventional cardiology and heart failure management, serving patients at City General Hospital with a patient-centered approach."
              rows={4}
              className="w-full px-3 py-2.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          ) : (
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dr. John Doe is a board-certified cardiologist with over 12 years of experience in diagnosing and treating cardiovascular conditions. He specializes in interventional cardiology and heart failure management, serving patients at City General Hospital with a patient-centered approach.
            </p>
          )}
        </div>

        {/* Info Sections */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="text-sm font-semibold text-foreground mb-4">Professional Information</h3>
          <div className="space-y-4">
            {infoSections.map((info) => (
              <div key={info.label} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${info.color}`}>
                  <info.icon className="w-4.5 h-4.5" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-medium">{info.label}</p>
                  {editing ? (
                    <input
                      type="text"
                      defaultValue={info.value}
                      className="mt-0.5 w-full text-sm font-semibold text-foreground bg-background border border-border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  ) : (
                    <p className="text-sm font-semibold text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
