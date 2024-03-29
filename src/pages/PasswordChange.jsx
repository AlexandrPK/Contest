import React from "react";
import Spin from "antd/es/spin";
import "antd/lib/spin/style/index.css";
import PasswordChangeForm from "../components/PasswordChangeForm";
import axios from "axios";

export default function PasswordChange() {

  const data = JSON.parse(localStorage.getItem("userData"));


  async function fetchPosts() {
    const response = await axios.get(
      "http://ec2-3-123-32-242.eu-central-1.compute.amazonaws.com:8080/task/allGroupsCourses",
      { headers: { Authorization: data.token } }
    );


  }

  return (
    <>
      <div className="toCenter">
        <PasswordChangeForm />
      </div>
    </>
  );
}
