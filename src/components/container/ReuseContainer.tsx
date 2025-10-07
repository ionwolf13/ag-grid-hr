import React from "react";

interface ReuseContainerInterface {
  children: React.ReactNode;
  className?: string;
}

export const ReuseContainer: React.FC<ReuseContainerInterface> = ({
  children,
  className
}) => {
  return (
    <div
      className={`${className} w-full flex gap-x-2 items-center justify-center`}
    >
      {children}
    </div>
  );
};
