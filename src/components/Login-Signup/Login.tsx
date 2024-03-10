import React, { useState } from "react";

import GoogleIcon from "../../assets/icon-svgs/GoogleIcon";
import FacebookIcon from "../../assets/icon-svgs/FacebookIcon";
import LoginForm from "./Helper/LoginForm";
import BrandIcon from "./Helper/BrandIcon";
import SideSection from "./Helper/SideSection";
import { socialMediaOptionWrapper } from "./Helper/Helper";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [inputEmailFocus, setInputEmailFocus] = useState<boolean>(false);
  const [inputPasswordFocus, setInputPasswordFocus] = useState<boolean>(false);

  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  return (
    <div className="h-screen grid grid-cols-2 ">
      <div className="flex items-center justify-center">
        <div className="space-y-7">
          <BrandIcon />

          <div className="space-y-2">
            <p className="text-3xl font-bold">Log in to your Account</p>
            <p className=" text-gray-500">
              Welcome back! Select method to log in:
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
            <LoginForm
              inputFocus={inputEmailFocus}
              setInputFocusCallback={() => setInputEmailFocus(true)}
              setInputBlurCallback={() => setInputEmailFocus(false)}
              isPasswordInput={false}
              isPasswordVisible={passwordVisible}
              inputType="email"
              inputPlaceholder="Email"
              setInputCallback={(e) => {
                setEmailInput(e.target.value);
              }}
              inputValue={emailInput}
            />
            <LoginForm
              inputFocus={inputPasswordFocus}
              setInputFocusCallback={() => setInputPasswordFocus(true)}
              setInputBlurCallback={() => setInputPasswordFocus(false)}
              isPasswordInput={true}
              isPasswordVisible={passwordVisible}
              setPaswordVisibilityCallback={() =>
                setPasswordVisible(!passwordVisible)
              }
              inputType={passwordVisible ? "text" : "password"}
              inputPlaceholder="Password"
              setInputCallback={(e) => {
                console.log("assasas", e.target.value);
                setPasswordInput(e.target.value);
              }}
              inputValue={passwordInput}
            />
          </div>

          <div className="flex flex-col space-y-8">
            <button className="bg-agile_blue py-2 text-white rounded-md">
              Log in
            </button>
            <p className="text-sm text-center text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-agile_blue font-semibold cursor-pointer"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>

      <SideSection />
    </div>
  );
};

export default Login;
