import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { socialMediaOptionWrapper } from "./Helper";
import GoogleIcon from "../../../assets/icon-svgs/GoogleIcon";
import React from "react";
import { toast } from "react-toastify";
import { CustomToastOptions } from "./type";

const GoogleLoginButton = ({ isLogin }: { isLogin: boolean }) => {
  const [googleButtonWrapper, setGoogleButtonWrapper] = useState<ReturnType<
    typeof createFakeGoogleWrapper
  > | null>(null);
  const googleLoginCallback = useCallback(async (resp: any) => {
    try {
      // Get the user's ID token from the response
      const idToken = resp.credential;

      // Use Axios to send the ID token to your backend server
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/user/google-signin",
        {
          idToken,
          provider: "google",
        }
      );
      console.log("response", response);

      // Handle the response from the backend server
      if (response.data.user) {
        // The user has been successfully signed in
        // You can perform additional actions, such as storing the user's information in the session or setting up the user's authentication state
        const toastOptions: CustomToastOptions = {
          style: {
            "--toastify-color-progress-success": "#1c5470",
            "--toastify-icon-color-success": "#1c5470",
          },
        };
        toast.success("Logged in successfully!", toastOptions);
      } else {
        // There was an error signing in the user
        toast.error("Error signing in user:", response);
      }
    } catch (error: any) {
      // Handle any errors that occurred during the request
      toast.error("Error handling Google Sign-In callback:", error);
    }
  }, []);

  const createFakeGoogleWrapper = useCallback(() => {
    const googleLoginWrapper = document.createElement("div");
    // Or you can simple hide it in CSS rule for custom-google-button
    googleLoginWrapper.style.display = "none";
    googleLoginWrapper.classList.add("custom-google-button");

    // Add the wrapper to body
    document.body.appendChild(googleLoginWrapper);

    // Use GSI javascript api to render the button inside our wrapper
    // You can ignore the properties because this button will not appear
    window.google.accounts.id.renderButton(googleLoginWrapper, {
      type: "icon",
      width: "800",
    });

    const googleLoginWrapperButton = googleLoginWrapper.querySelector(
      "div[role=button]"
    ) as HTMLElement;

    return {
      click: () => {
        googleLoginWrapperButton.click();
      },
    };
  }, []);

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      // Check if the Google API is available
      if (window.google && window.google.accounts) {
        // Initialize the Google Sign-In API
        window.google.accounts.id.initialize({
          client_id: process.env.REACT_APP_CLIENT_ID || "",
          callback: googleLoginCallback,
        });
        const newGoogleButtonWrapper = createFakeGoogleWrapper();
        setGoogleButtonWrapper(newGoogleButtonWrapper);
      } else {
        // If the Google API is not available, try to load it
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.onload = initializeGoogleSignIn;
        document.head.appendChild(script);
      }
    };

    initializeGoogleSignIn();
    return () => {
      // Clean up the Google Sign-In event listener
      if (window.google && window.google.accounts) {
        window.google.accounts.id.cancel();
      }
    };
  }, [createFakeGoogleWrapper, googleLoginCallback]);

  const handleGoogleLogin = () => {
    // Use wrapper click to prevent Illegal invocation exception
    if (googleButtonWrapper) {
      googleButtonWrapper.click();
    }
    // This will open GSI login and after success you will have
    // a response on googleLoginCallback method previously created
  };
  return (
    <button className="my-awesome-button w-full" onClick={handleGoogleLogin}>
      {socialMediaOptionWrapper(
        <GoogleIcon />,
        isLogin ? "Sign in with google" : "Sign up with google"
      )}
    </button>
  );
};

export default React.memo(GoogleLoginButton);
