import ModalWrapper from "@/app/components/common/ModalWrapper";
import { Button } from "@/app/components/ui/button";
import { DialogClose } from "@/app/components/ui/dialog";

export default function CancelSubscription() {
  return (
    <ModalWrapper
      ButtonTrigger={
        <Button className="w-full sm:w-52 py-5 bg-primary hover:bg-primary border-2 border-white rounded-2xl">
          Cancel Subscription
        </Button>
      }
    >
      <div className="text-center">
        <div className="mx-auto">
          <h2 className="font-semibold text-3xl mb-5">Cancel Subscription</h2>
        </div>
        <p className="mt-4 text-sm">
          Do you really want to cancel your subscription?
        </p>
      </div>
      <div className="flex justify-center gap-5 ">
        <Button
          // submit form here! use onsubmit function
          className="w-24 border-2 border-white rounded-2xl bg-primary hover:bg-transparent text-white font-semibold"
        >
          Yes
        </Button>
        <DialogClose asChild>
          <Button className="w-24 border-2 border-white rounded-2xl bg-primary hover:bg-transparent text-white font-semibold">
            No
          </Button>
        </DialogClose>
      </div>
    </ModalWrapper>
  );
}
