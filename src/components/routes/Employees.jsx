import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getConfig from "../../utils/getConfig";

const Employees = () => {
  const [employees, setEmployees] = useState();

  useEffect(() => {
    axios
      .get(
        "https://employees-service-xh3x.onrender.com/api/v1/employees",
        getConfig()
      )
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  }, [employees]);
  console.log(employees);
  return (
    <div>
      Employees
      <NavLink to="/my_employees/edit">
        <button>Edit</button>
      </NavLink>
    </div>
  );
};

export default Employees;
