import _ from "lodash";

const getUniqueValues = (arr: any) => {
  const filteredArr = arr
    .flatMap((obj: any) => obj.data)
    .map((item: any) => item.attributes);

  const unique = _.uniqBy(filteredArr, "item");
  return unique;
};

export default getUniqueValues;
