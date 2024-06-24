import React from "react";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

export const AppLayout: React.FC = () => {
  return (
    <div className="grid">
      <div className="col-12">
        <AppHeader />
      </div>
      <div className="col-2">
        <AppSidebar />
      </div>
      <div className="col-10">Content</div>
    </div>
  );
};
