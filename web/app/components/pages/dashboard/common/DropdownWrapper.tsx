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
      <DropdownMenuContent className="mx-5 rounded-xl">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownWrapper;
