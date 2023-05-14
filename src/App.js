import { Routes, Route } from "react-router-dom";
import CreateInvoice from "./pages/CreateInvoice";
import DeletePrompt from "./pages/DeletePrompt";
import EditInvoice from "./pages/EditInvoice";
import Invoice from "./pages/Invoice";
import ViewInvoice from "./pages/ViewInvoice";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Invoice />} />
        <Route path="/view-invoice" element={<ViewInvoice />} />
        <Route path="/edit-invoice" element={<EditInvoice />} />
        <Route path="/create-invoice" element={<CreateInvoice />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/delete-prompt" element={<DeletePrompt />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
