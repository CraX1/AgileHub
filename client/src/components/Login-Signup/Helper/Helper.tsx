export const socialMediaOptionWrapper = (
  platformIcon: any,
  platform: string
) => (
  <p className="flex gap-2 items-center flex-grow  border border-solid rounded-md border-gray-200 px-12 py-3 cursor-pointer">
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
