import "./App.css";
import Aside from "./components/shared/Aside";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./components/routes/Home";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/employees" element={<Aside />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
