import { CafeFormTypes } from "@/types/cafe";

import CafeImages from "./CafeImage";
import { CafeAddress, CafeSuburb } from "./CafeLocation";
import { CafeName } from "./CafeName";
import { useCafeData } from "@/app/store/cafeData";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import UseFormField from "./form/useFormField";

export default function UserInformation({ setUpCafe, control }: CafeFormTypes) {
  const cafeData = useCafeData((state) => state.cafe);
  const [editOwnerName, setEditOwnerName] = useState(true);

  const cafeNameHandler = () => {
    setEditOwnerName((current) => !current);
  };

  const [ownerName, setOwnerName] = useState(cafeData?.cafe_name || "");
  // display the default value of that input field when there's data coming from the database/api
  const handlecafenameChange = (event: any) => {
    setOwnerName(event?.target?.value);
  };
  return (
    <div className="lg:w-3/4">
      <div className="my-10">
        <h3 className="text-xl font-bold">Owner Information</h3>
        <div className="w-32 h-1.5 mt-2 bg-primary rounded-lg" />
      </div>
      <div className="grid md:grid-cols-2 gap-10 lg:w-3/4">
        <div>
          <p className="font-bold text-xl">Owner Name</p>
          {editOwnerName && !setUpCafe ? (
            <div className="mt-2 xs:pl-5 flex items-center  justify-between text-sm">
              {cafeData && <p>{ownerName || cafeData?.cafe_name || ""}</p>}
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
              <div
                className={!setUpCafe ? "w-4/6 md:w-3/4 lg:w-8/12" : "w-full"}
              >
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
        <div>
          <p className="font-bold text-xl">Email</p>
          {editOwnerName && !setUpCafe ? (
            <div className="mt-2 xs:pl-5 flex items-center  justify-between text-sm">
              {cafeData && <p>{ownerName || cafeData?.cafe_name || ""}</p>}
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
              <div
                className={!setUpCafe ? "w-4/6 md:w-3/4 lg:w-8/12" : "w-full"}
              >
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
        <div>
          <p className="font-bold text-xl">Contact</p>
          {editOwnerName && !setUpCafe ? (
            <div className="mt-2 xs:pl-5 flex items-center  justify-between text-sm">
              {cafeData && <p>{ownerName || cafeData?.cafe_name || ""}</p>}
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
              <div
                className={!setUpCafe ? "w-4/6 md:w-3/4 lg:w-8/12" : "w-full"}
              >
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
      </div>
    </div>
  );
}
