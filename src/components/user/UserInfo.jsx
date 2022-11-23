import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../loader/Loader.jsx";
import Employees from "../routes/Employees.jsx";

const UserInfo = () => {
  const userInfo = useSelector((state) => state.user);

  return (
    <article className="article__container-main">
      {userInfo ? (
        <>
          <article className="article__container-user">
            <div className="article_container-user-div">
              <article className="article__container-user-info">
                <p className="article__container-text">
                  Welcome {userInfo.firstName}
                </p>
                <p className="article__container-text">
                  Here's your information
                </p>
                <ul className="article__container-info">
                  <li className="article__container-item">
                    Full name: {userInfo.firstName} {userInfo.lastName}
                  </li>
                  <li className="article__container-item">
                    Email: {userInfo.email}
                  </li>
                  <li className="article__container-item">
                    Phone: {userInfo.phone}
                  </li>
                  <li className="article__container-item">
                    Status: {userInfo.status}
                  </li>
                </ul>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link__active" : "link"
                  }
                  to="/me/edit"
                >
                  <button className="article_container-btn">
                    <small>Update</small>
                    <i className="bx bx-edit"></i>
                  </button>
                </NavLink>
              </article>
            </div>
            <Employees />
          </article>
        </>
      ) : (
        <Loader />
      )}
    </article>
  );
};

export default UserInfo;
