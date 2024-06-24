import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Badge } from "primereact/badge";

import { MenuItem } from "../../../config";
import { UngroupedMenuItem } from "./UngroupedMenuItem";

import "./styles.scss";

type GroupedMenuItemProps = {
  item: MenuItem;
};

export const GroupedMenuItem: React.FC<GroupedMenuItemProps> = ({
  item: group,
}) => {
  return (
    <Accordion activeIndex={0} className="group-menu-items">
      <AccordionTab
        header={
          <span className="flex align-items-center gap-2 w-full">
            <span className="font-bold white-space-nowrap">{group.label}</span>
            <Badge value="3" className="ml-auto" />
          </span>
        }
      >
        {group.items!.map((item: MenuItem) => (
          <UngroupedMenuItem item={item} />
        ))}
      </AccordionTab>
    </Accordion>
  );
};
