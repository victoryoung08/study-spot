import { Control } from "react-hook-form";
import { CafeProfileType } from "./useCafeProfileForm";
import UseFormField from "./useFormField";
import { useEffect, useState } from "react";

type CafeTagsTypes = {
  tagName: string;
  name: string;
  control: Control;
  // tagName: string;
  tags: any[];
};

export default function CafeTags({
  name,
  control,
  tagName,
  tags,
}: CafeTagsTypes) {
  const [hasTag, setHasTag] = useState(false);

  /**
   * The function checks if a specific cafe tag  is included in an array of tags.
   * @returns The function `checkTags` returns the value of the variable `tagIncluded`.
   */

  const checkTags = () => {
    if (tags !== undefined && tags !== null) {
      const tagIncluded = tags.some((tag) => tag.item === tagName);
      // setHasTag(tagIncluded);
      return tagIncluded;
    }
    return false;
  };

  const handleSwitchChange = (isChecked: boolean) => {
    setHasTag(isChecked);
  };

  useEffect(() => {
    // Update state only when necessary
    setHasTag(checkTags());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags, tagName]);

  return (
    <div className="flex flex-col xs:flex-row gap-2  xs:gap-0 justify-between">
      <p className="capitalize">{tagName}</p>
      <div>
        <UseFormField
          control={control}
          name={name}
          // empty string for now
          inputValue={hasTag}
          handleInputChange={handleSwitchChange}
          isSelect={true}
        />
      </div>
    </div>
  );
}
