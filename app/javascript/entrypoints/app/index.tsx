import React from "react";

import { AppLayout } from "../shared/layout/AppLayout";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export const App: React.FC = () => {
  return (
    <PrimeReactProvider>
      <AppLayout />
    </PrimeReactProvider>
  );
};
