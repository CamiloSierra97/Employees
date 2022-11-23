import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const EditMyUser = () => {
  const userInfo = useSelector((state) => state.user);
  const { handleSubmit, register,  reset } = useForm();

  const submit = (data) => {
    const URL = `https://employees-service-xh3x.onrender.com/api/v1/users/${userInfo?.id}`;
    const userId = userInfo?.id;
    axios
      .patch(URL, userId, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <article className="edit__container">
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
            // onChange={userInfo?.phone}
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
            // value={userInfo?.gender}
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
            // onChange={userInfo?.country}
          />
        </div>
      </form>
    </article>
  );
};

export default EditMyUser;
