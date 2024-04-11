import { useState } from "react";
import AuthForm from "./Helper/AuthForm";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomToastOptions } from "./Helper/type";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleLogin = (emailInput: string, passwordInput: string) => {
    setLoading(true);
    axios
      .post("http://127.0.0.1:8000/api/v1/user/login", {
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
        toast.success("Logged in successfully!", toastOptions);
        setLoading(false);
      })
      .catch((err: any) => {
        const errorMessage = err?.response?.data?.message || err.message;
        toast.error(errorMessage);
        setLoading(false);
      });
  };
  return (
    <>
      <AuthForm
        handleAuthentication={handleLogin}
        type="login"
        loginText={loading ? "Please wait..." : "Log in"}
      />
    </>
  );
};

export default Login;
