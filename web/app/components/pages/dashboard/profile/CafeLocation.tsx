import { Button } from "@/app/components/ui/button";
import UseFormField from "./form/useFormField";
import { useState } from "react";
import { useCafeData } from "@/app/store/cafeData";

export const CafeSuburb = ({ setUpCafe, control }: any) => {
  const cafeData = useCafeData((state) => state.cafe);

  const [editCafeSuburb, setEditCafeSuburb] = useState(true);

  const cafeSuburbHandler = () => {
    setEditCafeSuburb((current) => !current);
  };
  const [cafeSuburb, setCafeSuburb] = useState(cafeData?.suburb || "");
  const handleCafeSuburbChange = (event: any) => {
    setCafeSuburb(event?.target?.value);
    // console.log(event.target.value);
  };

  return (
    <div className="w-full">
      <p>Cafe Suburb</p>
      {editCafeSuburb && !setUpCafe ? (
        <div className="mt-2 xs:pl-5 flex items-center justify-between text-sm">
          {cafeData && <p>{cafeSuburb || cafeData.suburb || ""}</p>}
          <Button
            type="button"
            onClick={cafeSuburbHandler}
            className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
          >
            Edit
          </Button>
        </div>
      ) : (
        <div className="mt-2  flex justify-between items-center gap-5 xs:gap-0">
          <div className={!setUpCafe ? "w-4/6 md:w-3/4 lg:w-8/12" : "w-full"}>
            <UseFormField
              control={control}
              name="suburb"
              placeholder="Cafe Suburb"
              handleInputChange={handleCafeSuburbChange}
            />
          </div>

          {!setUpCafe && (
            <Button
              onClick={cafeSuburbHandler}
              type="button"
              className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
            >
              Save
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export const CafeAddress = ({ setUpCafe, control }: any) => {
  const cafeData = useCafeData((state) => state.cafe);

  const [editCafeAddress, setEditCafeAddress] = useState(true);
  const cafeAddressEditHandler = () => {
    setEditCafeAddress((current) => !current);
  };

  const [cafeAddress, setCafeAddress] = useState(cafeData?.location || "");
  const handleCafeAddressChange = (event: any) => {
    setCafeAddress(event?.target?.value);
  };
  return (
    <div className="w-full">
      <p>Cafe Address</p>
      {editCafeAddress && !setUpCafe ? (
        <div className="mt-2 xs:pl-5 flex items-center  justify-between text-sm">
          {cafeData && <p>{cafeAddress || cafeData?.location || ""}</p>}
          <Button
            type="button"
            onClick={cafeAddressEditHandler}
            className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
          >
            Edit
          </Button>
        </div>
      ) : (
        <div className="mt-2  flex justify-between items-center  gap-5 xs:gap-0">
          <div className={!setUpCafe ? "w-4/6 md:w-3/4 lg:w-8/12" : "w-full"}>
            <UseFormField
              control={control}
              name="location"
              placeholder="Cafe Address"
              handleInputChange={handleCafeAddressChange}
            />
          </div>

          {!setUpCafe && (
            <Button
              type="button"
              onClick={cafeAddressEditHandler}
              className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
            >
              Save
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
