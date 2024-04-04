import AuthForm from "./Helper/AuthForm";
import axios from "axios";

const Login = () => {
  const handleLogin = (
    emailInput: string,
    passwordInput: string,
    username?: string
  ) => {
    axios
      .post("http://127.0.0.1:8000/api/v1/user/login", {
        email: emailInput,
        password: passwordInput,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return <AuthForm handleAuthentication={handleLogin} type="login" />;
};

export default Login;
