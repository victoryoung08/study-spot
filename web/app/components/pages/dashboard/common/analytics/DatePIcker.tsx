"use client";

import { addDays, format } from "date-fns";

import { cn } from "@/src/lib/utils";
import { Button } from "@/app/components/ui/button";
import { Calendar } from "@/app/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function DatePIcker() {
  const [date, setDate] = useState<Date>();
  const [displayCalendar, setDisplayCalendar] = useState(false);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full sm:w-[240px] justify-start text-left font-normal border-2 border-white rounded-lg bg-grey hover:bg-grey hover:text-white",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Yesterday</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex rounded-xl  flex-col space-y-2 p-2 w-full"
      >
        <Select
          onValueChange={(value) => {
            if (value != "calendar") {
              setDate(addDays(new Date(), parseInt(value)));
              setDisplayCalendar(false);
            } else {
              setDisplayCalendar(true);
            }
          }}
          defaultValue="-1"
        >
          <SelectTrigger
            className={`bg-grey rounded-lg ${
              displayCalendar ? "w-full" : "w-[150px] xs:w-[302px]"
            }`}
          >
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="-1">Yesterday</SelectItem>
            <SelectItem value="-5">Last 5 days</SelectItem>
            <SelectItem value="-14">Last 14 days</SelectItem>
            <SelectItem value="-28">Last 28 days</SelectItem>

            {/* <SelectItem value="calendar">Custom</SelectItem> */}
            {/* <SelectItem value="7">In a week</SelectItem> */}
          </SelectContent>
        </Select>
        {/* {displayCalendar && (
          <div className="rounded-md border">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </div>
        )} */}
      </PopoverContent>
    </Popover>
  );
}
