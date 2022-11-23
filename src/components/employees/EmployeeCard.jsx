import React from "react";
import { NavLink } from "react-router-dom";

const EmployeeCard = ({ employee }) => {
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
    </div>
  );
};

export default EmployeeCard;
