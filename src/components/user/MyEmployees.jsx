import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getConfig from "../../utils/getConfig";

const MyEmployees = () => {
  const [employees, setEmployees] = useState();
  const [pagination, setPagination] = useState();

  const prevPage = () => {
    axios
      .get(pagination.previous, getConfig())
      .then((res) => {
        setEmployees(res.data.results);
        setPagination(res.data);
      })
      .catch((err) => console.log(err));
  };

  const nextPage = () => {
    axios
      .get(pagination.next, getConfig())
      .then((res) => {
        setEmployees(res.data.results);
        setPagination(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(
        "https://employees-service-xh3x.onrender.com/api/v1/employees/my_employees",
        getConfig()
      )
      .then((res) => {
        setEmployees(res.data.results);
        setPagination(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(employees);
  return (
    <article className="employees__container">
      <>
        <NavLink to={"/create_employee"}>
          <button className="create__btn">New Employee</button>
        </NavLink>
        <div className="button__container">
          <button className="prev" onClick={prevPage}>
            PrevPage
          </button>
          <button className="next" onClick={nextPage}>
            NextPage
          </button>
        </div>
        <div className="employee__card">
          {employees?.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
        <div className="button__container">
          <button className="prev" onClick={prevPage}>
            PrevPage
          </button>
          <button className="next" onClick={nextPage}>
            NextPage
          </button>
        </div>
      </>
    </article>
  );
};

export default MyEmployees;
