import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import getConfig from "../../utils/getConfig";

const CreateEmployee = () => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    const URL = `https://employees-service-xh3x.onrender.com/api/v1/employees/my_employees/`;
    console.log(data);
    axios
      .post(URL, data, getConfig())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    reset({});
  };

  return (
    <div className="edit__container">
      <article className="edit__article">
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
              {...register("phone")}
              className="login__input"
              type="text"
              id="phone"
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
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="identificationCardType">
              Identification Card Type
            </label>
            <input
              {...register("identificationCardType")}
              className="login__input"
              type="text"
              id="identificationCardType"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="identificationCardNumber">
              Identification Card Number
            </label>
            <input
              {...register("identificationCardNumber")}
              className="login__input"
              type="text"
              id="identificationCardNumber"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="address">
              Address
            </label>
            <input
              {...register("address")}
              className="login__input"
              type="text"
              id="address"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="userId">
              User Id
            </label>
            <input
              {...register("userId")}
              className="login__input"
              type="text"
              id="userId"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="address">
              Area Id
            </label>
            <input
              {...register("areaId")}
              className="login__input"
              type="text"
              id="areaId"
            />
          </div>
          <div className="edit__div">
            <label className="login__label" htmlFor="address">
              Subarea Id
            </label>
            <input
              {...register("subareaId")}
              className="login__input"
              type="text"
              id="subareaId"
            />
          </div>

          <button>Create</button>
        </form>
      </article>
    </div>
  );
};

export default CreateEmployee;
