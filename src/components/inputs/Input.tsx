import React from "react";
import { ReuseContainer } from "../container/ReuseContainer";
import type { LucideIconType } from "../../shared/types/globalTypes";
import { Search } from "lucide-react";

interface InputInterface {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: LucideIconType;
  iconAction?: () => void;
}

export const Input: React.FC<InputInterface> = ({
  label,
  name,
  value,
  onChange,
  placeholder = "Search",
  type = "text",
  required = false,
  disabled = false,
  icon = Search,
  iconAction,
}) => {
  const isInputPassword = name === "password";
  const Icon = icon;
  return (
    <ReuseContainer className="flex flex-col gap-1 w-xs relative">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <Icon
        className={`absolute left-2 h-5 ${
          isInputPassword ? "cursor-pointer" : ""
        }`}
        onClick={isInputPassword ? iconAction : undefined}
      />

      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className={`
      w-full pl-9 pr-4 py-1 rounded-md border 
      border-gray-300 dark:border-gray-600 
      bg-white dark:bg-[#182230] 
      text-gray-800 dark:text-white 
      placeholder-gray-400 dark:placeholder-gray-500 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
      transition duration-200
      disabled:opacity-50 disabled:cursor-not-allowed
    `}
      />
    </ReuseContainer>
  );
};
