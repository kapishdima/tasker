import React from "react";
import { MenuItem } from "primereact/menuitem";

import { GroupedMenuItem } from "./GroupedMenuItem";
import { UngroupedMenuItem } from "./UngroupedMenuItem";

type AppMenuItemProps = {
  item: MenuItem;
};

export const AppMenuItem: React.FC<AppMenuItemProps> = ({ item }) => {
  if (!item.label) {
    return null;
  }

  if (item.items?.length) {
    return <GroupedMenuItem item={item} />;
  }

  return <UngroupedMenuItem item={item} />;
};
