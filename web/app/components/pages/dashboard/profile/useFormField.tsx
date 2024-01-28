import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Slider } from "@/app/components/ui/slider";
import { Switch } from "@/app/components/ui/switch";
import { CafeFormTypes } from "@/types/cafe";

/**
 * Cafe Form Field Component.
 *
 *
 * @param {CafeFormTypes} props - Component properties.
 * @param {import("react-hook-form").UseFormReturn} props.control - React Hook Form control.
 * @param {string} props.placeholder - Placeholder text for the input field.
 * @param {string} props.inputValue - Value of the input field.
 * @param {Function} props.handleInputChange - Input change handler function.
 * @returns {JSX.Element} React component.
 */

export default function UseFormField({
  //   cafeData,
  control,
  placeholder,
  inputValue,
  handleInputChange,
  name,
  isSelect,
}: CafeFormTypes) {
  return (
    <FormField
      control={control}
      name={name || ""}
      render={({ field }) => (
        <FormItem className=" w-full ">
          <FormControl>
            {isSelect ? (
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-grey border-white"
              />
            ) : (
              <Input
                type="text"
                {...field}
                placeholder={placeholder}
                //   value={inputValue}
                //   onChange={handleInputChange}
                className="focus-visible:ring-0 px-5 focus-visible:ring-offset-0  rounded-2xl border-2 border-white text-sm bg-[#3a3939] "
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
