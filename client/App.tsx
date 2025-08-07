import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Tests from "./pages/Tests";
import Protocols from "./pages/Protocols";
import ProtocolSport from "./pages/ProtocolSport";
import ProtocolNutrition from "./pages/ProtocolNutrition";
import ProtocolSleep from "./pages/ProtocolSleep";
import ProtocolAdditionals from "./pages/ProtocolAdditionals";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Questionnaires from "./pages/Questionnaires";

const queryClient = new QueryClient();

const App = () => {
  console.log("App component is rendering...");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/overview" element={<Index />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/questionnaires" element={<Questionnaires />} />
            <Route path="/protocols" element={<Protocols />} />
            <Route path="/protocols/sport" element={<ProtocolSport />} />
            <Route path="/protocols/nutrition" element={<ProtocolNutrition />} />
            <Route path="/protocols/sleep" element={<ProtocolSleep />} />
            <Route path="/protocols/additionals" element={<ProtocolAdditionals />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
