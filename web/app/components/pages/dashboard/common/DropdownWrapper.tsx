import React, { ReactNode } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

type dropdownWrapper = {
  ButtonTrigger: ReactNode;
  children: ReactNode;
};

const DropdownWrapper = ({ ButtonTrigger, children }: dropdownWrapper) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{ButtonTrigger}</DropdownMenuTrigger>
      <DropdownMenuContent>{children}</DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownWrapper;
