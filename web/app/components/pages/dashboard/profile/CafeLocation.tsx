import { Button } from "@/app/components/ui/button";
import UseFormField from "./useFormField";
import { useState } from "react";

export const CafeSuburb = ({ setUpCafe, cafeData, control }: any) => {
  const [editCafeSuburb, setEditCafeSuburb] = useState(true);

  const cafeSuburbHandler = () => {
    setEditCafeSuburb((current) => !current);
  };
  const [cafeSuburb, setCafeSuburb] = useState(cafeData?.suburb || "");

  // display the default value of that input field when there's data coming from the database/api
  const handleCafeSuburbChange = (event: any) => {
    setCafeSuburb(event?.target?.value);
    // console.log(event.target.value);
  };
  return (
    <div className="w-full">
      <p>Cafe Suburb</p>
      {editCafeSuburb && !setUpCafe ? (
        <div className="mt-2 xs:pl-5 flex items-center justify-between text-sm">
          {cafeData && <p>{cafeSuburb || ""}</p>}
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
              // empty string for now
              cafeData={""}
              placeholder="Cafe Suburb"
              inputValue={cafeSuburb}
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

export const CafeAddress = ({ setUpCafe, cafeData, control }: any) => {
  const [editCafeAddress, setEditCafeAddress] = useState(true);
  const cafeAddressEditHandler = () => {
    setEditCafeAddress((current) => !current);
  };

  const [cafeAddress, setCafeAddress] = useState(cafeData?.location || "");

  // display the default value of that input field when there's data coming from the database/api
  const handleCafeAddressChange = (event: any) => {
    setCafeAddress(event?.target?.value);
  };

  return (
    <div className="w-full">
      <p>Cafe Address</p>
      {editCafeAddress && !setUpCafe ? (
        <div className="mt-2 xs:pl-5 flex items-center  justify-between text-sm">
          {cafeData && <p>{cafeAddress || ""}</p>}
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
              // empty string for now
              cafeData={""}
              placeholder="Cafe Address"
              inputValue={cafeAddress}
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
