import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import DespreNoi from "./pages/DespreNoi";
import Istorie from "./pages/Istorie";
import Activitati from "./pages/Activitati";
import Proiecte from "./pages/Proiecte";
import Stiri from "./pages/Stiri";
import Cariere from "./pages/Cariere";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/despre-noi" element={<DespreNoi />} />
            <Route path="/istorie" element={<Istorie />} />
            <Route path="/activitati" element={<Activitati />} />
            <Route path="/proiecte" element={<Proiecte />} />
            <Route path="/stiri" element={<Stiri />} />
            <Route path="/cariere" element={<Cariere />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
