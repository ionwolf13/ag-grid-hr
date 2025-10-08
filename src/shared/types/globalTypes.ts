import React from "react";
import {
  ButtonVariantEnum,
  TextVariantEnum,
  DarkLightEnum
} from "../enums/globalEnums";

export type LucideIconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export type ButtonVariantType = `${ButtonVariantEnum}`;
export type TextVariantType = `${TextVariantEnum}`;
export type DarkLightType = `${DarkLightEnum}`;
