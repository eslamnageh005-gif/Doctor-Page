import { Card } from "@/components/ui/card";
import { Users, Clock, CheckCircle, Calendar } from "lucide-react";

export default function Index() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">نظرة عامة اليوم</h1>
        <p className="text-slate-500">الثلاثاء، ٣ مارس ٢٠٢٦</p>
      </div>

      {/* الكروت العلوية */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6 flex items-center gap-4 border-none shadow-sm bg-white">
          <div className="p-3 bg-blue-50 rounded-xl">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-slate-500">إجمالي اليوم</p>
            <h3 className="text-2xl font-bold">24</h3>
          </div>
        </Card>

        <Card className="p-6 flex items-center gap-4 border-none shadow-sm bg-white">
          <div className="p-3 bg-amber-50 rounded-xl">
            <Clock className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <p className="text-sm text-slate-500">في الانتظار</p>
            <h3 className="text-2xl font-bold">8</h3>
          </div>
        </Card>

        <Card className="p-6 flex items-center gap-4 border-none shadow-sm bg-white">
          <div className="p-3 bg-emerald-50 rounded-xl">
            <CheckCircle className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <p className="text-sm text-slate-500">مكتمل</p>
            <h3 className="text-2xl font-bold">16</h3>
          </div>
        </Card>
      </div>

      {/* جدول المواعيد */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center">
          <h2 className="font-bold text-lg">المواعيد القادمة</h2>
          <button className="text-blue-600 text-sm font-medium">عرض الكل</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-50 text-slate-500 text-sm">
              <tr>
                <th className="p-4 font-semibold">المريض</th>
                <th className="p-4 font-semibold">الوقت</th>
                <th className="p-4 font-semibold">النوع</th>
                <th className="p-4 font-semibold">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr>
                <td className="p-4 font-medium">محمد أحمد</td>
                <td className="p-4 text-slate-500">١٠:٣٠ ص</td>
                <td className="p-4">كشف جديد</td>
                <td className="p-4"><span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">مكتمل</span></td>
              </tr>
              <tr>
                <td className="p-4 font-medium">سارة محمود</td>
                <td className="p-4 text-slate-500">١١:٠٠ ص</td>
                <td className="p-4">استشارة</td>
                <td className="p-4"><span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">منتظر</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
