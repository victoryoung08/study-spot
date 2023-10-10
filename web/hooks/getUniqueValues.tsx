const getUniqueValues = (arr: any) => {
  const filteredArr = arr
    .flatMap((obj: any) => obj.data)
    .map((item: any) => item.attributes);

  const unique = filteredArr.reduce((result: any, item: any) => {
    const existing = result.find((el: any) => el.item === item.item);
    if (!existing) {
      result.push(item);
    }
    return result;
  }, []);

  return unique;
};

export default getUniqueValues;
