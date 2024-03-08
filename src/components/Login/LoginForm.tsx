import React from "react";
import MailIcon from "../../assets/icon-svgs/MailIcon";
import EyePassword from "../../assets/icon-svgs/EyePassword";
import LockIcon from "../../assets/icon-svgs/LockIcon";

const LoginForm = ({
  inputFocus,
  isPasswordVisible,
  setInputFocusCallback,
  setInputBlurCallback,
  setPaswordVisibilityCallback,
  isPasswordInput,
  inputPlaceholder,
  inputType,
}: {
  inputFocus: boolean;
  isPasswordVisible: boolean;
  isPasswordInput: boolean;
  inputPlaceholder: string;
  inputType: string;
  setInputFocusCallback: () => void;
  setInputBlurCallback: () => void;
  setPaswordVisibilityCallback?: () => void;
}) => {
  return (
    <p
      className={`flex items-center border border-solid rounded-md px-4 py-2 
      ${!inputFocus ? "" : ""}`}
    >
      {isPasswordInput ? <LockIcon /> : <MailIcon />}
      <input
        onFocus={setInputFocusCallback}
        onBlur={setInputBlurCallback}
        className="w-full outline-none text-sm px-2 focus:bg-white"
        type={inputType}
        placeholder={inputPlaceholder}
      />
      {isPasswordInput && (
        <button onClick={setPaswordVisibilityCallback}>
          <EyePassword isVisible={isPasswordVisible} />
        </button>
      )}
    </p>
  );
};

export default LoginForm;
