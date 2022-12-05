import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import getConfig from "../../utils/getConfig";

const UserForm = ({ userInfo, setIsloading }) => {
  const { handleSubmit, register, reset } = useForm();
  const [succesfull, setSuccesfull] = useState(false);
  const URL = "https://employees-service-hnlj.onrender.com/api/v1/users/me";

  const submit = (data) => {
    setIsloading(true);
    console.log(userInfo?.birthday);
    axios
      .patch(URL, data, getConfig())
      .then((res) => setSuccesfull(res.data), setIsloading(false))
      .catch((err) => console.log(err));
    reset({});
  };

  return (
    <article className="edit__article">
      {succesfull ? (
        <div className="edit__article-div">
          <div className="edit__article-div">
            Your information has been edited succesfully!
          </div>
          <NavLink to={"/me"}>
            <button>Go to home</button>
          </NavLink>
        </div>
      ) : (
        <form onSubmit={handleSubmit(submit)} className="edit__form">
          <div className="edit__div">
            <label className="login__label" htmlFor="firstName">
              First Name
            </label>
            <input
              {...register("firstName")}
              className="login__input"
              type="text"
              id="firstName"
              defaultValue={userInfo?.firstName}
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="lastName">
              Last Name
            </label>
            <input
              {...register("lastName")}
              className="login__input"
              type="text"
              id="lastName"
              defaultValue={userInfo?.lastName}
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="phone">
              Phone
            </label>
            <input
              {...register("phone-")}
              className="login__input"
              type="text"
              id="phone"
              defaultValue={userInfo?.phone}
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="birthday">
              Birthday
            </label>
            <input
              {...register("birthday")}
              className="login__input"
              type="date"
              id="birthday"
              defaultValue={userInfo?.birthday}
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="gender">
              Gender
            </label>
            <input
              {...register("gender")}
              className="login__input"
              type="text"
              id="gender"
              defaultValue={userInfo?.gender}
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="country">
              Country
            </label>
            <input
              {...register("country")}
              className="login__input"
              type="text"
              id="country"
              defaultValue={userInfo?.country}
            />
          </div>
          <button>Update</button>
        </form>
      )}
    </article>
  );
};

export default UserForm;
