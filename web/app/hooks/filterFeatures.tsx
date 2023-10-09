const filterFeatures = (arr: any) => {
  const filteredArr = arr
    .flatMap((obj: any) => obj.data)
    .map((item: any) => item.attributes);

  // Function to extract distinct values from the 'item' field
  function getDistinctItemValues(data: any) {
    const distinctValues = new Set();
    for (const item of data) {
      distinctValues.add(item.item);
    }
    return Array.from(distinctValues);
  }

  // Get distinct item values
  const distinctItemValues = getDistinctItemValues(filteredArr);

  return { distinctItemValues };
};

export default filterFeatures;
