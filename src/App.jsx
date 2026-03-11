import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ManageEvents from "./pages/ManageEvents";
import Participants from "./pages/Participants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/manage-events" element={<ManageEvents />} />
        <Route path="/participants" element={<Participants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;