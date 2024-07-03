import React from "react";
import { Button } from "primereact/button";
import { MenuItem } from "../../../../config";

type UngroupedMenuItemProps = {
  item: MenuItem;
};

export const UngroupedMenuItem: React.FC<UngroupedMenuItemProps> = ({
  item,
}) => {
  return (
    <div className="flex align-items-center justify-content-between">
      <div className="flex align-items-center column-gap-2">
        <Button
          text
          size="small"
          iconPos="left"
          severity={item.severity || "secondary"}
          icon={item.icon}
          label={item.label}
        />
      </div>
    </div>
  );
};
