import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import getConfig from "../../utils/getConfig";

const EmployeeCard = ({ employee, setEmployees, setPagination }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
    if (userInfo?.role == "admin") {
      setIsAdmin(true);
    }
  }, []);

  const deleteEmployee = () => {
    const URL = `https://employees-service-hnlj.onrender.com/api/v1/employees/${employee?.id}`;
    axios
      .delete(URL, getConfig())
      .then(
        (res) => console.log(res),
        axios
          .get(
            "https://employees-service-hnlj.onrender.com/api/v1/employees",
            getConfig()
          )
          .then((res) => {
            setEmployees(res.data.results);
            setPagination(res.data);
          })
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="employee__card-container">
      <article className="employee__card-article">
        <ul className="employee__card-list">
          <li className="employee__card-items">
            <p>Full Name</p>
            {employee?.firstName} {employee?.lastName}
          </li>
          <li className="employee__card-items">
            <p>Number</p>
            {employee?.phone}
          </li>
          <li className="employee__card-items">
            <p>Birthday</p> {employee?.birthday}
          </li>
          <li className="employee__card-items">
            {employee?.identificationCardType}
          </li>
          <li className="employee__card-items">
            {employee?.identificationCardNumber}
          </li>
          <li className="employee__card-items">
            <p>Gender:</p>
            {employee?.gender ? employee.gender : "null"}
          </li>
          <li className="employee__card-items">{employee?.country}</li>
          <li className="employee__card-items">
            <p>Adress:</p>
            {employee?.address}
          </li>
          <li className="employee__card-items">
            <p>Status</p>
            {employee?.status}
          </li>
        </ul>
      </article>
      <NavLink to={`/employees/${employee.id}`}>
        <button>Update</button>
      </NavLink>
      {isAdmin ? (
        <NavLink>
          <button onClick={deleteEmployee}>Delete</button>
        </NavLink>
      ) : (
        <></>
      )}
    </div>
  );
};

export default EmployeeCard;
