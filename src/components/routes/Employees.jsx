import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getConfig from "../../utils/getConfig";
import EmployeeCard from "../employees/EmployeeCard";

const Employees = () => {
  const [employees, setEmployees] = useState();
  const [pagination, setPagination] = useState();
  const [allEmployees, setAllEmployees] = useState();
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();

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

  const numberTyping = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        "https://employees-service-xh3x.onrender.com/api/v1/employees",
        getConfig()
      )
      .then((res) => {
        setEmployees(res.data.results);
        setPagination(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(
        "https://employees-service-xh3x.onrender.com/api/v1/employees/no_pagination",
        getConfig()
      )
      .then((res) => setAllEmployees(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFilter(
      allEmployees?.filter((e) =>
        e.identificationCardNumber.toString().includes(search)
      )
    );
  }, [search]);

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Identificacion Number"
          onChange={numberTyping}
        />
      </form>
      <div className="button__container">
        <button className="prev" onClick={prevPage}>
          PrevPage
        </button>
        <button className="next" onClick={nextPage}>
          NextPage
        </button>
      </div>
      <div className="button__container">
        <NavLink to="/create_employee">
          <button>Create Employee</button>
        </NavLink>
      </div>
      <div className="employee__card">
        {filter
          ? filter?.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))
          : employees?.map((employee) => (
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
  );
};

export default Employees;
