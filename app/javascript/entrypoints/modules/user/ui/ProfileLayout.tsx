import React from "react";
import { Avatar } from "primereact/avatar";

export const ProfileLayout: React.FC = () => {
  return (
    <div className="flex align-items-center column-gap-2">
      <div className="flex flex-column justify-items-end row-gap-1.7 ">
        <span className="text-xs text-400">KapishDima</span>
        <div className="flex align-items-center column-gap-2 text-red-500 cursor-pointer">
          <span className="text-base font-medium">Выйти</span>
          <i className="pi pi-sign-out"></i>
        </div>
      </div>
      <Avatar label="KD" shape="circle" size="large" />
    </div>
  );
};
