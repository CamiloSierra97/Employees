import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import getConfig from "../../utils/getConfig";

const EditEmployee = () => {
  const { handleSubmit, register, reset } = useForm();

  const employee = useParams();

  const submit = (data) => {
    const URL = `https://employees-service-xh3x.onrender.com/api/v1/employees/${employee.id}`;
    axios
      .patch(URL, data, getConfig())
      .then((res) => console.log(res.data))
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
              {...register("phone-")}
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
          <button>Update</button>
        </form>
      </article>
    </div>
  );
};

export default EditEmployee;
