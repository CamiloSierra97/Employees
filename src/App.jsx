import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./components/routes/Home";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import EditMyUser from "./components/user/EditMyUser";
import EditEmployee from "./components/employees/EditEmployee";
import CreateEmployee from "./components/employees/CreateEmployee";
import Employees from "./components/routes/Employees";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/me" element={<Employees />} />
          <Route path="/me/edit" element={<EditMyUser />} />
          <Route path="/employees/:id" element={<EditEmployee />} />
          <Route path="/create_employee" element={<CreateEmployee />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
