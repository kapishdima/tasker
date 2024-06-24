import React from "react";
import { Menu } from "primereact/menu";

import { menu } from "../../../config";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Badge } from "primereact/badge";
import { AppMenuItem } from "./MenuItem";

export const AppMenu: React.FC = () => {
  return (
    <div className="flex flex-column w-full row-gap-2">
      {menu.map((group) => (
        <AppMenuItem item={group} />
      ))}
    </div>
  );
  // return <Menu model={menu} />;
};
