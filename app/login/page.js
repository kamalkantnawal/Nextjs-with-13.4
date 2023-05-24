"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@app/components/LoginForm";

const page = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({ name: "", pass: "" });
  const isFormValid = userDetails;

  const loginDataHandle = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // console.log("inside the cretepromt function");
    router.push("/dashboard");
    const userData = {
      username: userDetails.name,
      password: userDetails.pass,
    };
    // console.log("-->", userData);
    axios
      .post("http://localhost:3000/api/LoginData", userData)
      .then((response) => {
        // console.log(response.status, response.userData);
      });
  };

  return (
    <div>
      login window
      <LoginForm
        type="Login to AI-2.O"
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        isFormValid={isFormValid}
        handleSubmit={loginDataHandle}
      />
    </div>
  );
};

export default page;
