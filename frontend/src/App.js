import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home"; // Import Home Page
import Dashboard from "./pages/Dashboard/Dashboard"; // Import Dashboard Page
import SignUp from "./pages/SignUp/SignUp";
import Inventory from "./pages/Inventory/Inventory";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Orders from "./pages/Orders/Orders";
import Staff from "./pages/Staff/Staff";

// import Logistics from "./pages/Logistics/Logistics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page is first */}
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/staff" element={<Staff />} />
        {/* <Route path="/logistics" element={<Logistics />} /> */}
        {/* <Route path="/stockprediction" element={<StockPrediction />} /> */}
        {/* <Route path="/full-stock" element={<FullStock />} /> */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
