import { Checkbox } from "@/app/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { CafeFormTypes } from "@/types/cafe";

export default function UseFormFieldCheckbox({
  control,
  placeholder,
  name,
  handleInputChange,
  isChecked,
}: CafeFormTypes) {
  return (
    <FormField
      control={control}
      name={name || ""}
      render={({ field }) => (
        <FormItem className="  ">
          <FormControl>
            <div className="flex gap-2 items-center">
              <Checkbox
                {...field}
                onCheckedChange={(e) => {
                  field.onChange(e);
                  if (handleInputChange) {
                    handleInputChange(e);
                  }
                }}
                checked={isChecked}
                className="bg-transparent data-[state=checked]:bg-primary"
              />
              <FormLabel>{placeholder}</FormLabel>
            </div>

            {/* <Input
                type="text"
                {...field}
                placeholder={placeholder}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  if (handleInputChange) {
                    handleInputChange(e);
                  }
                }}
                className={`focus-visible:ring-0 px-5 focus-visible:ring-offset-0  rounded-2xl  border-white text-sm bg-[#3a3939] ${
                  setUpCafe ? "border rounded-lg" : "border-2"
                }`}
              /> */}
          </FormControl>
          <FormMessage className="mt-1" />
        </FormItem>
      )}
    />
  );
}
