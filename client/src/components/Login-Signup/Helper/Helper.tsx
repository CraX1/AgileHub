declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          cancel: any;
          initialize: (options: {
            client_id: string;
            callback: (response: any) => void;
            [key: string]: any;
          }) => void;
          renderButton: (
            parent: HTMLElement,
            options: {
              type: string;
              size?: string;
              [key: string]: any;
            }
          ) => void;
        };
      };
    };
  }
}

export const socialMediaOptionWrapper = (
  platformIcon: any,
  platform: string
) => (
  <p className="flex gap-2 justify-center items-center flex-grow border border-solid rounded-md border-gray-200 px-12 py-3 cursor-pointer hover:bg-proj_light_blue hover:border-proj_light_blue-border transition-colors">
    {platformIcon}
    {platform}
  </p>
);

export const emailRegexValidation = (emailInput: string) => {
  console.log("computingEMAIL", emailInput);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailInput);
};

export const passwordRegexValidation = (passwordInput: string) => {
  console.log("computingpass", passwordInput);

  const passwordRegex = //NOTE:1
    // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return passwordRegex.test(passwordInput);
};

export const debounceHandler = (callback: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
