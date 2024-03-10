import React, { useState } from "react";

import GoogleIcon from "../../assets/icon-svgs/GoogleIcon";
import FacebookIcon from "../../assets/icon-svgs/FacebookIcon";

import MailIcon from "../../assets/icon-svgs/MailIcon";
import LockIcon from "../../assets/icon-svgs/LockIcon";
import BrandIcon from "./Helper/BrandIcon";
import SideSection from "./Helper/SideSection";
import { socialMediaOptionWrapper } from "./Helper/Helper";
import EyePassword from "../../assets/icon-svgs/EyePassword";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  return (
    <div className="h-screen grid grid-cols-2 ">
      <div className="flex items-center justify-center">
        <div className="space-y-7">
          <BrandIcon />

          <div className="space-y-2">
            <p className="text-3xl font-bold">Create your Account</p>
            <p className=" text-gray-500">Welcome! Lets sign you up:</p>
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
            <p className="flex items-center border border-solid rounded-md px-4 py-2">
              <MailIcon />
              <input
                className="w-full outline-none text-sm px-2"
                type="email"
                placeholder="Enter an email"
                onChange={(e) => setEmailInput(e.target.value)}
                value={emailInput}
              />
            </p>
            <p className="flex items-center border border-solid rounded-md px-4 py-2">
              <LockIcon />
              <input
                className="w-full outline-none text-sm px-2"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter a password"
                onChange={(e) => setPasswordInput(e.target.value)}
                value={passwordInput}
              />
              <button onClick={() => setPasswordVisible(!passwordVisible)}>
                <EyePassword isVisible={passwordVisible} />
              </button>
            </p>
          </div>

          <div className="flex flex-col space-y-8">
            <button className="bg-agile_blue py-2 text-white rounded-md">
              Sign up
            </button>
            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-agile_blue font-semibold cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <SideSection />
    </div>
  );
};

export default SignUp;
