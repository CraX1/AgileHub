import axios from "axios";
import AuthForm from "./Helper/AuthForm";

const SignUp = () => {
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
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return <AuthForm handleAuthentication={createUserHandler} type="signup" />;
};

export default SignUp;
