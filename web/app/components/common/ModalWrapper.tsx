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
      <DialogContent className="bg-[#181818] w-[90%] md:max-w-[450px] p-10 ">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ModalWrapper;
