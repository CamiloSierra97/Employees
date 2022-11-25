import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
import UserForm from "./UserForm";

const EditMyUser = () => {
  const userInfo = useSelector((state) => state.user);
  const [isloading, setIsloading] = useState(false);

  return (
    <div className="edit__container">
      {isloading ? (
        <Loader />
      ) : (
        <UserForm userInfo={userInfo} setIsloading={setIsloading} />
      )}
    </div>
  );
};

export default EditMyUser;
