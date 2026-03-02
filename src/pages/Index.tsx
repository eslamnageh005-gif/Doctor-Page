import { Card } from "@/components/ui/card";
import { Users, Clock, CheckCircle, Calendar } from "lucide-react";

export default function Index() {
  return (
    <div className="space-y-8 animate-fade-in p-4 md:p-0">
      <div className="flex flex-col gap-2 text-right">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">نظرة عامة اليوم</h1>
        <p className="text-slate-500">الثلاثاء، ٣ مارس ٢٠٢٦</p>
      </div>

      {/* الكروت العلوية - التعديل هنا لضمان الرص الصحيح */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 flex items-center gap-4 border-none shadow-sm bg-white hover:shadow-md transition-shadow">
          <div className="p-3 bg-blue-50 rounded-xl">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">إجمالي اليوم</p>
            <h3 className="text-2xl font-bold">24</h3>
          </div>
        </Card>

        <Card className="p-6 flex items-center gap-4 border-none shadow-sm bg-white hover:shadow-md transition-shadow">
          <div className="p-3 bg-amber-50 rounded-xl">
            <Clock className="w-6 h-6 text-amber-600" />
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">في الانتظار</p>
            <h3 className="text-2xl font-bold">8</h3>
          </div>
        </Card>

        <Card className="p-6 flex items-center gap-4 border-none shadow-sm bg-white hover:shadow-md transition-shadow">
          <div className="p-3 bg-emerald-50 rounded-xl">
            <CheckCircle className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">مكتمل</p>
            <h3 className="text-2xl font-bold">16</h3>
          </div>
        </Card>
        
        {/* كارت إضافي عشان يملأ الـ 4 أماكن زي الصورة الأولى */}
        <Card className="p-6 flex items-center gap-4 border-none shadow-sm bg-white hover:shadow-md transition-shadow">
          <div className="p-3 bg-purple-50 rounded-xl">
            <Calendar className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">مواعيد الغد</p>
            <h3 className="text-2xl font-bold">10</h3>
          </div>
        </Card>
      </div>

      {/* جدول المواعيد */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center flex-row-reverse">
          <h2 className="font-bold text-lg">المواعيد القادمة</h2>
          <button className="text-blue-600 text-sm font-medium hover:underline">عرض الكل</button>
        </div>
        
        {/* الحاوية دي بتخلي الجدول يتحرك يمين وشمال في الموبايل */}
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-right min-w-[600px]">
            <thead className="bg-slate-50 text-slate-500 text-sm">
              <tr>
                <th className="p-4 font-semibold">المريض</th>
                <th className="p-4 font-semibold">الوقت</th>
                <th className="p-4 font-semibold">النوع</th>
                <th className="p-4 font-semibold">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-medium">محمد أحمد</td>
                <td className="p-4 text-slate-500">١٠:٣٠ ص</td>
                <td className="p-4">كشف جديد</td>
                <td className="p-4"><span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">مكتمل</span></td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-medium">سارة محمود</td>
                <td className="p-4 text-slate-500">١١:٠٠ ص</td>
                <td className="p-4">استشارة</td>
                <td className="p-4"><span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">منتظر</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}