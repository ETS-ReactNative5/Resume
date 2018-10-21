export const updateObject = (oldObj, updatedProps) => ({
  ...oldObj,
  ...updatedProps,
});

export const updateArray = (oldObj, filterData) => ({
    ...oldObj.slice(0, filterData.index),
    filterData,
    ...oldObj.slice(filterData.index)
});

