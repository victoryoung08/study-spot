import { Button } from "@/app/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { useState } from "react";

export const LongitudeAndLatitude = ({ setUpCafe, cafeData, control }: any) => {
  const [editCafeLatitude, setEditCafeLatitude] = useState(true);
  const [cafeLatitude, setCafeLatitude] = useState(cafeData?.Latitute || "");

  const [editCafeLongitude, setEditCafeLongitude] = useState(true);

  const [cafeLongitude, setCafeLongitude] = useState(cafeData?.Longitude || "");

  const cafeLatitudeEditHandler = () => {
    setEditCafeLatitude((current) => !current);
  };
  const cafeLongitudeEditHandler = () => {
    setEditCafeLongitude((current) => !current);
  };

  // display the default value of that input field when there's data coming from the database/api
  const handleCafeLatitudeChange = (event: any) => {
    setCafeLatitude(event?.target?.value);
  };

  const handleCafeLongitudeChange = (event: any) => {
    setCafeLongitude(event?.target?.value);
  };
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="w-full">
        <p>Address Latitude</p>
        {editCafeLatitude && !setUpCafe ? (
          <div className="mt-2 xs:pl-5 flex items-center  justify-between text-sm">
            {cafeData && <p className="w-3/4">{cafeLatitude || ""}</p>}
            <Button
              onClick={cafeLatitudeEditHandler}
              type="button"
              className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
            >
              Edit
            </Button>
          </div>
        ) : (
          <div className="mt-2  flex justify-between items-center gap-5 ">
            <div className={!setUpCafe ? "w-4/6 md:w-3/4 lg:w-8/12" : "w-full"}>
              <FormField
                control={control}
                name="Latitute"
                render={({ field }) => (
                  <FormItem className=" w-full ">
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        placeholder="Latitude"
                        value={
                          cafeLatitude !== undefined
                            ? cafeLatitude
                            : field.value
                        }
                        onChange={(e) => {
                          field.onChange(Number(e.target.value));
                          handleCafeLatitudeChange(e);
                        }}
                        className="focus-visible:ring-0 px-5 focus-visible:ring-offset-0  rounded-2xl border-2 border-white text-sm bg-[#3a3939] "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {!setUpCafe && (
              <Button
                type="button"
                onClick={cafeLatitudeEditHandler}
                className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
              >
                Save
              </Button>
            )}
          </div>
        )}
      </div>
      <div className="w-full">
        <p>Address Longitude</p>
        {editCafeLongitude && !setUpCafe ? (
          <div className="mt-2 xs:pl-5 flex items-center justify-between text-sm">
            {cafeData && <p className="w-3/4">{cafeLongitude || ""}</p>}
            <Button
              type="button"
              onClick={cafeLongitudeEditHandler}
              className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
            >
              Edit
            </Button>
          </div>
        ) : (
          <div className="mt-2  flex justify-between items-center gap-5 ">
            <div className={!setUpCafe ? "w-4/6 md:w-3/4 lg:w-8/12" : "w-full"}>
              <FormField
                control={control}
                name="Longitude"
                render={({ field }) => (
                  <FormItem className=" w-full ">
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        placeholder="Longitude"
                        value={
                          cafeLongitude !== undefined
                            ? cafeLongitude
                            : field.value
                        }
                        onChange={(e) => {
                          field.onChange(Number(e.target.value));
                          handleCafeLongitudeChange(e);
                        }}
                        className="focus-visible:ring-0 px-5 focus-visible:ring-offset-0  rounded-2xl border-2 border-white text-sm bg-[#3a3939] "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {!setUpCafe && (
              <Button
                type="button"
                onClick={cafeLongitudeEditHandler}
                className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
              >
                Save
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
