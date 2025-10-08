import React from "react";
import type { ICellRendererParams } from "ag-grid-community";
import ReuseButton from "../../components/buttons/Button";
import { ReuseContainer } from "../../components/container/ReuseContainer";
import { Eye, Trash } from "lucide-react";
import { ButtonVariantEnum } from "../../shared/enums/globalEnums";

export const ButtonCell: React.FC<ICellRendererParams> = (props) => {
  return (
    <ReuseContainer className="h-full">
      <ReuseButton
        variant={
          props.colDef?.field === "Profile"
            ? ButtonVariantEnum.primary
            : ButtonVariantEnum.danger
        }
        icon={props.colDef?.field === "Profile" ? Eye : Trash}
      />
    </ReuseContainer>
  );
};
