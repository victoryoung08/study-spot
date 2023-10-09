import uniqBy from "lodash/uniqBy";

const getUniqueValues = (arr: any) => {
  const filteredArr = arr
    .flatMap((obj: any) => obj.data)
    .map((item: any) => item.attributes);

  const unique = uniqBy(filteredArr, "item");
  return unique;
};

export default getUniqueValues;
