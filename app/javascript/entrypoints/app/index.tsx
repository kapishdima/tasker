import React from "react";

import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { AppLayout } from "../shared/ui/layout/AppLayout";
import { HttpProvider } from "./http";

export const App: React.FC = () => {
  return (
    <PrimeReactProvider>
      <HttpProvider>
        <AppLayout />
      </HttpProvider>
    </PrimeReactProvider>
  );
};
