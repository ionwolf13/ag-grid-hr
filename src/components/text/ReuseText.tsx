import React from "react";
import type { TextVariantType } from "../../shared/types/globalTypes";

interface ReuseTextProps {
  variant?: TextVariantType;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<TextVariantType, string> = {
  header1: "text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100",
  header2:
    "text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100",
  header3:
    "text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-100",
  subtitle1: "text-lg font-medium text-gray-700 dark:text-gray-300",
  subtitle2: "text-base font-medium text-gray-600 dark:text-gray-400",
  body: "text-base text-gray-800 dark:text-gray-300",
  caption: "text-sm text-gray-500 dark:text-gray-400",
  button:
    "text-sm font-semibold uppercase tracking-wide text-gray-50 dark:text-gray-200"
};

export const ReuseText: React.FC<ReuseTextProps> = ({
  variant = "body",
  children,
  className
}) => {
  return <p className={`${variantStyles[variant]} ${className}`}>{children}</p>;
};

export default ReuseText;
