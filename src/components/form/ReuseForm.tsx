import React from "react";
import { Input } from "../inputs/Input";
import type { LucideIconType } from "../../shared/types/globalTypes";

type FormInputType = {
  placeholder: string;
  name: string;
  value: string;
  onChange: () => void;
  icon?: LucideIconType;
  inputType?: "text" | "email" | "number" | "password";
  iconAction?: () => void;
};

interface ReuseFormInterface {
  data: FormInputType[];
  onSubmitForm: (e: any) => void;
}

export const ReuseForm: React.FC<ReuseFormInterface> = ({
  data,
  onSubmitForm
}) => {
  return (
    <form
      className="flex flex-col gap-2"
      name="Sign In"
      onSubmit={onSubmitForm}
    >
      {data.map((inputData) => (
        <Input
          key={`input-form-type-${inputData.name}`}
          name={inputData.name}
          placeholder={inputData.placeholder}
          value={inputData.value}
          onChange={inputData.onChange}
          icon={inputData.icon}
          iconAction={inputData.iconAction}
          type={inputData.inputType}
        />
      ))}
      <Input
        className={`w-min pr-10 cursor-pointer`}
        type="submit"
        name="Submit"
        value="Submit"
      />
    </form>
  );
};
