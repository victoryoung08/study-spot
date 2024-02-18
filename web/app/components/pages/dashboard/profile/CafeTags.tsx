import { Control } from "react-hook-form";
import { CafeProfileType } from "./form/useCafeProfileForm";
import UseFormField from "./form/useFormField";
import { useEffect, useState } from "react";

type CafeTagsTypes = {
  tagName: string;
  name: string;
  control: Control;
  // tagName: string;
};

export default function CafeTags({ name, control, tagName }: CafeTagsTypes) {
  const [hasTag, setHasTag] = useState(false);

  /**
   * The function checks if a specific cafe tag  is included in an array of tags.
   * @returns The function `checkTags` returns the value of the variable `tagIncluded`.
   */
  const handleSwitchChange = () => {
    setHasTag((current) => !current);
  };

  return (
    <div className="flex flex-col xs:flex-row gap-2  xs:gap-0 justify-between">
      <p className="capitalize">{tagName}</p>
      <div>
        <UseFormField
          control={control}
          name={name}
          // empty string for now
          // inputValue={hasTag}
          handleInputChange={handleSwitchChange}
          isSelect={true}
        />
      </div>
    </div>
  );
}
