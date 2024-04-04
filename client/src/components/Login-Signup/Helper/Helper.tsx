export const socialMediaOptionWrapper = (
  platformIcon: any,
  platform: string
) => (
  <p className="flex gap-2 items-center flex-grow  border border-solid rounded-md border-gray-200 px-12 py-3 cursor-pointer">
    {platformIcon}
    {platform}
  </p>
);
