import React from "react";
import { ReuseText } from "../text/ReuseText";
import type { ButtonVariantType } from "../../shared/types/globalTypes";

interface ReuseButtonProps {
  name?: string;
  onClick?: () => void;
  variant?: ButtonVariantType; //    | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const ReuseButton: React.FC<ReuseButtonProps> = ({
  name,
  onClick,
  variant = "primary",
  className,
  disabled = false,
  icon
}) => {
  const baseStyles =
    "flex justify-center items-center gap-x-2 rounded-lg border-2 cursor-pointer px-2 py-1 shadow-[0_0_4px] shadow-gray-600 hover:shadow-[0_0_16px] hover:shadow-[#1976d2]";

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
        ${disabled && "cursor-not-allowed opacity-70"}
        ${className}`}
    >
      {IconElement && <IconElement className="w-4" />}
      {name && <ReuseText variant="button">{name}</ReuseText>}
    </button>
  );
};

export default ReuseButton;
