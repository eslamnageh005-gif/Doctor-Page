import { Card } from "@/components/ui/card";
import { 
  Users, 
  Clock, 
  CheckCircle2, 
  Calendar as CalendarIcon,
  ChevronRight
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "إجمالي اليوم", value: "24", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "في الانتظار", value: "8", icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50" },
    { label: "مكتمل", value: "16", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
  ];

  const appointments = [
    { id: 1, patient: "محمد أحمد", time: "10:30 ص", type: "كشف جديد", status: "completed" },
    { id: 2, patient: "سارة محمود", time: "11:00 ص", type: "استشارة", status: "pending" },
    { id: 3, patient: "علي حسن", time: "11:30 ص", type: "كشف جديد", status: "pending" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">نظرة عامة اليوم</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarIcon className="w-4 h-4" />
          <span>{new Date().toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`p-3 rounded-xl ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="font-semibold text-lg">المواعيد القادمة</h2>
          <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
            عرض الكل <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-50 text-muted-foreground text-sm">
                <th className="p-4 font-medium">المريض</th>
                <th className="p-4 font-medium">الوقت</th>
                <th className="p-4 font-medium">النوع</th>
                <th className="p-4 font-medium text-center">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {appointments.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-medium">{app.patient}</td>
                  <td className="p-4 text-muted-foreground">{app.time}</td>
                  <td className="p-4 text-muted-foreground">{app.type}</td>
                  <td className="p-4 text-center">
                    {/* استبدلنا الـ StatusBadge بـ span عادي عشان نلغي الـ Error */}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      app.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {app.status === 'completed' ? 'مكتمل' : 'منتظر'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;