import React, { useState } from "react";
import write from "../../assets/write.png";
import officeNEW from "../../assets/boss-8595688_1280.png";

import GoogleIcon from "../../assets/icon-svgs/GoogleIcon";
import FacebookIcon from "../../assets/icon-svgs/FacebookIcon";
import LoginForm from "./LoginForm";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [inputEmailFocus, setInputEmailFocus] = useState<boolean>(false);
  const [inputPasswordFocus, setInputPasswordFocus] = useState<boolean>(false);

  const socialMediaOptionWrapper = (platformIcon: any, platform: string) => (
    <p className="flex gap-2 items-center flex-grow  border border-solid rounded-md border-gray-200 px-12 py-3">
      {platformIcon}
      {platform}
    </p>
  );

  return (
    <div className="h-screen grid grid-cols-2 ">
      {/* left section */}
      <div className="flex items-center justify-center">
        <div className="space-y-7">
          <div className="flex items-center">
            <img src={write} width={40} className="object-contain" alt="" />
            <p className="text-2xl font-bold">
              <span className=" text-agile_blue ">AgileHub</span>
            </p>
          </div>

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
            />
          </div>

          <div className="flex flex-col space-y-8">
            <button className="bg-agile_blue py-2 text-white rounded-md">
              Log in
            </button>
            <p className="text-sm text-center text-gray-500">
              Don't have an account?{" "}
              <span className="text-agile_blue font-semibold cursor-pointer">
                Create an account
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* right section */}
      <div className="bg-agile_blue">
        <div
          className=" my-16 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${officeNEW})`,
            width: "100%",
            height: "50%",
          }}
        ></div>
        <p className="text-center text-3xl font-bold text-white pt-4 pb-3">
          Track Progress
        </p>
        <p className="text-center text-md px-12 text-white">
          Plan, track, and execute your projects with ease. Break down tasks,
          set priorities, and keep your team aligned towards your project goals.
        </p>
      </div>
    </div>
  );
};

export default Login;
