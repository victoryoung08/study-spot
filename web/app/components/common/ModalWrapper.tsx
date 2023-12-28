import React, { ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

type ModalWrapperTypes = {
  ButtonTrigger?: ReactNode;
  children: ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalWrapper = ({
  ButtonTrigger,
  children,
  open,
  setOpen,
}: ModalWrapperTypes) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{ButtonTrigger}</DialogTrigger>
      <DialogContent className="bg-white w-[90%] md:max-w-[600px]">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ModalWrapper;
