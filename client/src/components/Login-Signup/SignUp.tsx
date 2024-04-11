import axios from "axios";
import AuthForm from "./Helper/AuthForm";
import { toast } from "react-toastify";
import { useState } from "react";
import { CustomToastOptions } from "./Helper/type";

const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const createUserHandler = (
    emailInput: string,
    passwordInput: string,
    username: string
  ) => {
    axios
      .post("http://127.0.0.1:8000/api/v1/user/signUp", {
        username,
        email: emailInput,
        password: passwordInput,
      })
      .then((res) => {
        const toastOptions: CustomToastOptions = {
          style: {
            "--toastify-color-progress-success": "#1c5470",
            "--toastify-icon-color-success": "#1c5470",
          },
        };
        toast.success("Signed up successfully!", toastOptions);
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
        const errorMessage =
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          err.message;
        toast.error(errorMessage);
        setLoading(false);
      });
  };
  return (
    <AuthForm
      handleAuthentication={createUserHandler}
      type="signup"
      loginText={loading ? "Please wait..." : "Sign up"}
    />
  );
};

export default SignUp;
