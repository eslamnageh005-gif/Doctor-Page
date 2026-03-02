import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import MedicalRecords from "./pages/MedicalRecords";
import NewMedicalRecord from "./pages/NewMedicalRecord";
import DoctorProfile from "./pages/DoctorProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* هنا بنقول لـ React: استخدم الـ Layout لكل الصفحات اللي جاية */}
          <Route element={<AppLayout children={<Dashboard />} />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/medical-records" element={<MedicalRecords />} />
            <Route path="/medical-records/new" element={<NewMedicalRecord />} />
            <Route path="/profile" element={<DoctorProfile />} />
          </Route>
          {/* صفحة الـ 404 بتكون بره الـ Layout أو جواه براحتك */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;