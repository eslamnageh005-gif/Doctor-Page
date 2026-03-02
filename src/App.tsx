// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Appointments from "./pages/Appointments";
// import MedicalRecords from "./pages/MedicalRecords";
// import NewMedicalRecord from "./pages/NewMedicalRecord";
// import DoctorProfile from "./pages/DoctorProfile";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/appointments" element={<Appointments />} />
//           <Route path="/medical-records" element={<MedicalRecords />} />
//           <Route path="/medical-records/new" element={<NewMedicalRecord />} />
//           <Route path="/profile" element={<DoctorProfile />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
///////////////////////////////////
import AppLayout from "./components/AppLayout";
import Index from "./pages/Index";

function App() {
  return (
    <AppLayout>
      <Index />
    </AppLayout>
  );
}
export default App;