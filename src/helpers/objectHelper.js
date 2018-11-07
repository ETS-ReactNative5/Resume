export const updateObject = (oldObj, updatedProps) => ({
  ...oldObj,
  ...updatedProps,
});

// export const updateValue = (oldObj, updatedProps) => ({
//   ...oldObj
// });

export const updateArray = (oldObj, filterData, text) => ({
  ...oldObj,
  toDo: {
    ...oldObj.toDo,
    [text]: {
      text: filterData[text].text,
      state: filterData[text].state,
    }}
});

export const updateStateOfTheArray = (oldObj, filterData, key) => ({
  ...oldObj, // copy state
  toDo: {
    ...oldObj.toDo, // copy houses
    [key]: {  // update one specific house (using Computed Property syntax)
      ...oldObj.toDo[key],  // copy that specific house's properties
      state: filterData[key].state   // update its `points` property
    }
  }
});

export const deleteObject = (oldObj, filterData, key) => ({
  ...oldObj,
  toDo: {
    ...oldObj.toDo,
    [key]: [...oldObj.toDo]
      .filter((x, index) => index !== key)
  },
});

