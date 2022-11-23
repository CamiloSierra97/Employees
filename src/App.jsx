import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./components/routes/Home";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import { useDispatch } from "react-redux";
import { getUserInfo } from "./store/slices/user.slice";
import { useEffect } from "react";
import MyEmployees from "./components/user/MyEmployees";
import UserInfo from "./components/user/UserInfo";
import EditMyUser from "./components/user/EditMyUser";
import EditEmployee from "./components/employees/EditEmployee";
import CreateEmployee from "./components/employees/CreateEmployee";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/me" element={<UserInfo />} />
          <Route path="/me/edit" element={<EditMyUser />} />
          <Route path="/my_employees" element={<MyEmployees />} />
          <Route path="/employees/:id" element={<EditEmployee />} />
          <Route path="/create_employee" element={<CreateEmployee />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
