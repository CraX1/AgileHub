import { ToastOptions } from "react-toastify";

export interface CustomToastOptions extends ToastOptions {
  style?: {
    backgroundColor?: string;
    color?: string;
    "--toastify-color-progress-success"?: string;
    "--toastify-icon-color-success"?: string;
    "--toastify-color-progress-error"?: string;
    "--toastify-icon-color-error"?: string;
    fontSize?: string;
  };
}
