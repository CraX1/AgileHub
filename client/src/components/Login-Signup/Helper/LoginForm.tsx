import React, { ChangeEvent } from "react";
import MailIcon from "../../../assets/icon-svgs/MailIcon";
import EyePassword from "../../../assets/icon-svgs/EyePassword";
import LockIcon from "../../../assets/icon-svgs/LockIcon";

const LoginForm = ({
  inputFocus,
  isPasswordVisible,
  setInputFocusCallback,
  setInputBlurCallback,
  setPaswordVisibilityCallback,
  isPasswordInput,
  inputPlaceholder,
  inputType,
  setInputCallback,
  inputValue,
}: {
  inputFocus: boolean;
  isPasswordVisible: boolean;
  isPasswordInput: boolean;
  inputPlaceholder: string;
  inputType: string;
  setInputFocusCallback: () => void;
  setInputBlurCallback: () => void;
  setPaswordVisibilityCallback?: () => void;
  setInputCallback?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
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
        className="w-full outline-none text-sm px-2"
        type={inputType}
        onChange={setInputCallback}
        placeholder={inputPlaceholder}
        value={inputValue}
      />
      {isPasswordInput && (
        <button onClick={setPaswordVisibilityCallback}>
          <EyePassword isVisible={isPasswordVisible} />
        </button>
      )}
    </p>
  );
};

export default React.memo(LoginForm);
