import { useState } from "react";
import { emailRegexValidation, passwordRegexValidation } from "./Helper";
import MailIcon from "../../../assets/icon-svgs/MailIcon";
import LockIcon from "../../../assets/icon-svgs/LockIcon";
import EyePassword from "../../../assets/icon-svgs/EyePassword";
import { Link } from "react-router-dom";
import SideSection from "./SideSection";
import BrandIcon from "./BrandIcon";
import TickIcon from "../../../assets/icon-svgs/TickIcon";
import UserIcon from "../../../assets/icon-svgs/UserIcon";
import GoogleLoginButton from "./GoogleLoginButton";

const AuthForm = ({
  handleAuthentication,
  type,
  loginText,
}: {
  handleAuthentication: any;
  type: string;
  loginText?: string;
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
  };

  const handleEmailBlur = () => {
    setInputEmailFocus(false);
  };

  const handlePasswordBlur = () => {
    setInputPasswordFocus(false);
  };

  const handleUsernameInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsernameInput(e.target.value);
    !usernameValid && setUsernameValidity(e.target.value.length > 0);
  };

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
    !emailValid && setEmailValidity(emailRegexValidation(e.target.value));
  };

  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordInput(e.target.value);
    !passwordValid &&
      setPasswordValidity(passwordRegexValidation(e.target.value));
  };
  return (
    <div className="h-screen grid grid-cols-2 ">
      <div className="flex items-center justify-center">
        <div className="space-y-7 min-w-[350px]">
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

          <div className="flex justify-center font-semibold">
            <GoogleLoginButton isLogin={isLogin} />
            {/* <div>{socialMediaOptionWrapper(<FacebookIcon />, "Facebook")}</div> */}
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
                    usernameValid ? "" : "border-exp_red"
                  } rounded-md px-4 py-2 ${
                    !inputUsernameFocus ? "" : "border-exp_gray border-exp_sm"
                  }`}
                >
                  <UserIcon />
                  <input
                    onFocus={() => {
                      setInputUsernameFocus(true);
                    }}
                    onBlur={handleUsernameBlur}
                    className="w-full outline-none text-sm px-2"
                    onChange={handleUsernameInputChange}
                    placeholder="Username"
                    value={usernameInput}
                  />
                </p>
                {!usernameValid && (
                  <span className="text-xs text-exp_red">
                    Username must not be empty
                  </span>
                )}
              </div>
            )}
            <div className="flex flex-col">
              <p
                className={`flex items-center border border-solid ${
                  emailValid ? "" : "border-exp_red"
                } rounded-md px-4 py-2 ${
                  !inputEmailFocus ? "" : "border-exp_gray border-exp_sm"
                }`}
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
                <span className="text-xs text-exp_red">Invalid Email</span>
              )}
            </div>
            <div className="flex flex-col">
              <p
                className={`flex items-center border border-solid  ${
                  passwordValid ? "" : "border-exp_red"
                } rounded-md px-4 py-2 ${
                  !inputPasswordFocus ? "" : "border-exp_gray border-exp_sm"
                }`}
              >
                <LockIcon />
                <input
                  onBlur={handlePasswordBlur}
                  onFocus={() => setInputPasswordFocus(true)}
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
                <div className="flex flex-col gap-1 text-xs bg-exp_dark_gray text-white shadow-md rounded p-2 mt-1">
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
              className="bg-exp_blue py-2 text-white rounded-md"
            >
              {loginText}
            </button>
            <p className="text-sm text-center text-gray-500">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}

              <Link
                to={isLogin ? "/signup" : "/login"}
                className="text-exp_blue font-semibold cursor-pointer"
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
