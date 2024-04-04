import { useState } from "react";
import {
  emailRegexValidation,
  passwordRegexValidation,
  socialMediaOptionWrapper,
} from "./Helper";
import MailIcon from "../../../assets/icon-svgs/MailIcon";
import LockIcon from "../../../assets/icon-svgs/LockIcon";
import EyePassword from "../../../assets/icon-svgs/EyePassword";
import { Link } from "react-router-dom";
import SideSection from "./SideSection";
import BrandIcon from "./BrandIcon";
import GoogleIcon from "../../../assets/icon-svgs/GoogleIcon";
import FacebookIcon from "../../../assets/icon-svgs/FacebookIcon";
import TickIcon from "../../../assets/icon-svgs/TickIcon";
import UserIcon from "../../../assets/icon-svgs/UserIcon";

const AuthForm = ({
  handleAuthentication,
  type,
}: {
  handleAuthentication: any;
  type: string;
}) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [inputUsernameFocus, setInputUsernameFocus] = useState<boolean>(false);
  const [inputEmailFocus, setInputEmailFocus] = useState<boolean>(false);
  const [inputPasswordFocus, setInputPasswordFocus] = useState<boolean>(false);

  const [usernameInput, setUsernameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const [emailValid, setEmailValidity] = useState<Boolean>(true);
  const [passwordValid, setPasswordValidity] = useState<Boolean>(true);
  const [usernameValid, setUsernameValidity] = useState<Boolean>(true);
  const isLogin = type === "login";

  const handleSubmit = () => {
    const isEmailValid = emailRegexValidation(emailInput);
    const isPasswordValid = passwordRegexValidation(passwordInput);
    const isUsernameValid = isLogin || usernameInput.length;
    if (isEmailValid && isPasswordValid && isUsernameValid) {
      handleAuthentication(emailInput, passwordInput, usernameInput);
    } else {
      !isEmailValid && setEmailValidity(false);
      !isPasswordValid && setPasswordValidity(false);
      !isUsernameValid && setUsernameValidity(false);
    }
  };

  const handleUsernameBlur = () => {
    setInputUsernameFocus(false);
    setUsernameValidity(usernameInput.length > 0);
  };

  const handleEmailBlur = () => {
    setInputEmailFocus(false);
    setEmailValidity(emailRegexValidation(emailInput));
  };

  const handlePasswordBlur = () => {
    setInputPasswordFocus(false);
    setPasswordValidity(passwordRegexValidation(passwordInput));
  };

  const handleUsernameInputChange = (e: any) => {
    setUsernameInput(e.target.value);
  };

  const handleEmailInputChange = (e: any) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordInputChange = (e: any) => {
    setPasswordInput(e.target.value);
  };
  return (
    <div className="h-screen grid grid-cols-2 ">
      <div className="flex items-center justify-center">
        <div className="space-y-7">
          <BrandIcon />

          <div className="space-y-2">
            <p className="text-3xl font-bold">
              {isLogin ? "Log in to your Account" : "Create your Account"}
            </p>
            <p className=" text-gray-500">
              {isLogin
                ? "Welcome back! Select method to log in:"
                : "Welcome! Lets sign you up:"}
            </p>
          </div>

          <div className="flex gap-4 font-semibold">
            {socialMediaOptionWrapper(<GoogleIcon />, "Google")}
            {socialMediaOptionWrapper(<FacebookIcon />, "Facebook")}
          </div>

          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <div className="text-xs px-4 text-gray-600">
              or continue with email
            </div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <div className="flex flex-col space-y-4">
            {!isLogin && (
              <div className="flex flex-col">
                <p
                  className={`flex items-center border border-solid ${
                    usernameValid ? "" : "border-red-600"
                  } rounded-md px-4 py-2 ${!inputUsernameFocus ? "" : ""}`}
                >
                  <UserIcon />
                  <input
                    onFocus={() => setInputUsernameFocus(true)}
                    onBlur={handleUsernameBlur}
                    className="w-full outline-none text-sm px-2"
                    onChange={handleUsernameInputChange}
                    placeholder="Username"
                    value={usernameInput}
                  />
                </p>
                {!usernameValid && (
                  <span className="text-xs text-red-600">
                    Username must not be empty
                  </span>
                )}
              </div>
            )}
            <div className="flex flex-col">
              <p
                className={`flex items-center border border-solid ${
                  emailValid ? "" : "border-red-600"
                } rounded-md px-4 py-2 ${!inputEmailFocus ? "" : ""}`}
              >
                <MailIcon />
                <input
                  onFocus={() => setInputEmailFocus(true)}
                  onBlur={handleEmailBlur}
                  className="w-full outline-none text-sm px-2"
                  onChange={handleEmailInputChange}
                  placeholder="Email"
                  value={emailInput}
                />
              </p>
              {!emailValid && (
                <span className="text-xs text-red-600">Invalid Email</span>
              )}
            </div>
            <div className="flex flex-col">
              <p
                className={`flex items-center border border-solid  ${
                  passwordValid ? "" : "border-red-600"
                } rounded-md px-4 py-2 ${!inputPasswordFocus ? "" : ""}`}
              >
                <LockIcon />
                <input
                  onBlur={handlePasswordBlur}
                  className="w-full outline-none text-sm px-2"
                  onChange={handlePasswordInputChange}
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  value={passwordInput}
                />
                <button onClick={() => setPasswordVisible(!passwordVisible)}>
                  <EyePassword isVisible={passwordVisible} />
                </button>
              </p>
              {!passwordValid && (
                <div className="flex flex-col gap-1 text-xs bg-agile_gray text-white shadow-md rounded p-2 mt-1">
                  <p className="gap-1 flex items-center">
                    <TickIcon isCompleted={passwordInput.length >= 8} />
                    <span>Atleast 8 characters long</span>
                  </p>
                  <p className="gap-1 flex items-center">
                    <TickIcon
                      isCompleted={
                        /[a-z]/.test(passwordInput) &&
                        /[A-Z]/.test(passwordInput)
                      }
                    />
                    Contains at least one letter (uppercase as well as
                    lowercase)
                  </p>
                  <p className="gap-1 flex items-center">
                    <TickIcon isCompleted={/\d/.test(passwordInput)} />
                    Contains at least one digit (0-9)
                  </p>
                  <p className="gap-1 flex items-center">
                    <TickIcon
                      isCompleted={
                        /[@$!%*?&]/.test(passwordInput) &&
                        !/[^a-zA-Z0-9@$!%*?&]/.test(passwordInput)
                      }
                    />
                    Contains at least one special character from the set [@ $ !
                    % * ? &]
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <button
              onClick={handleSubmit}
              className="bg-agile_blue py-2 text-white rounded-md"
            >
              {isLogin ? "Log in" : "Sign up"}
            </button>
            <p className="text-sm text-center text-gray-500">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}

              <Link
                to={isLogin ? "/signup" : "/login"}
                className="text-agile_blue font-semibold cursor-pointer"
              >
                {isLogin ? "Create an account" : "Login"}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <SideSection />
    </div>
  );
};

export default AuthForm;
