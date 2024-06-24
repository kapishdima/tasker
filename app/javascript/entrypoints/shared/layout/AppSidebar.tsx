import React from "react";
import { AppMenu } from "./menu/AppMenu";

export const AppSidebar: React.FC = () => {
  return (
    <div className="w-full bg-gray-50">
      <AppMenu />
    </div>
  );
};
