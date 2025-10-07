import React from "react";
import { ReuseText } from "../text/ReuseText";

interface ReuseButtonProps {
  name?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger"; //    | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const ReuseButton: React.FC<ReuseButtonProps> = ({
  name = "Button",
  onClick,
  variant = "primary",
  className,
  disabled = false,
  icon
}) => {
  const baseStyles =
    "flex justify-center items-center gap-x-2 rounded-md border-2 cursor-pointer p-2 ";

  const variantStyles: Record<typeof variant, string> = {
    primary: "border-[#1976d2] hover:border-[#155a9c] hover:bg-[#1976d2]",
    secondary: "border-green-500 hover:border-green-700 hover:bg-green-700",
    danger: "border-red-500 hover:border-red-700 hover:bg-red-700"
  };

  const IconElement = icon;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles}
      ${variantStyles[variant]}
      ${disabled && "cursor-not-allowed opacity-70"})
      }
        ${className}`}
    >
      {IconElement && <IconElement />}
      {name && <ReuseText variant="button">{name}</ReuseText>}
    </button>
  );
};

export default ReuseButton;
