import { Navigate, Route, Routes } from "react-router-dom";
import SiteShell from "./components/SiteShell";
import ConsentPage from "./pages/ConsentPage";
import DocumentsPage from "./pages/DocumentsPage";
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage";
import PaymentPage from "./pages/PaymentPage";
import RequisitesPage from "./pages/RequisitesPage";

export default function App() {
  return (
    <SiteShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/offer" element={<OfferPage />} />
        <Route path="/consent" element={<ConsentPage />} />
        <Route path="/requisites" element={<RequisitesPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteShell>
  );
}
