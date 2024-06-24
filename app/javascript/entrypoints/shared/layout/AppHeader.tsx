import React from "react";
import { AppLogo } from "./AppLogo";
import { InputText } from "primereact/inputtext";
import { ProfileLayout } from "../../modules/user";

export const AppHeader: React.FC = () => {
  return (
    <div className="flex align-items-center justify-content-between px-4 py-2">
      <AppLogo />
      <HeaderEnd />
    </div>
  );
};

const HeaderEnd = () => {
  return (
    <div className="flex align-items-center column-gap-4">
      <InputText
        placeholder="Поиск..."
        type="text"
        className="p-inputtext-sm w-25rem"
        // variant="filled"
      />
      <ProfileLayout />
    </div>
  );
};
