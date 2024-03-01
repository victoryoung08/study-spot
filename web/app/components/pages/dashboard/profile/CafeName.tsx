import { Button } from "@/app/components/ui/button";
import { useState } from "react";
import UseFormField from "./form/useFormField";
import { useCafeData } from "@/app/store/cafeData";

export const CafeName = ({ setUpCafe, control }: any) => {
  const cafeData = useCafeData((state) => state.cafe);
  const [editCafeName, setEditCafeName] = useState(true);

  const cafeNameHandler = () => {
    setEditCafeName((current) => !current);
  };

  const [cafeName, setCafeName] = useState(cafeData?.cafe_name || "");
  // display the default value of that input field when there's data coming from the database/api
  const handlecafenameChange = (event: any) => {
    setCafeName(event?.target?.value);
  };
  return (
    <div className="w-full">
      <p className="font-bold text-xl">Cafe Name</p>
      {editCafeName && !setUpCafe ? (
        <div className="mt-2 xs:pl-5 flex items-center  justify-between text-sm">
          {cafeData && <p>{cafeName || cafeData?.cafe_name || ""}</p>}
          <Button
            type="button"
            onClick={cafeNameHandler}
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
              name="cafe_name"
              placeholder="Cafe Name"
              handleInputChange={handlecafenameChange}
            />
          </div>

          {!setUpCafe && (
            <Button
              onClick={cafeNameHandler}
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
