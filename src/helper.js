export function getGroupElements(array, groupNumber) {
  const groupElements = [];
  const groupSizes = [
    [0, 4, 8, 11],
    [1, 5, 9, 12],
    [2, 6, 13],
    [3, 7, 10, 14],
  ];

  const selectedGroup = groupSizes[groupNumber - 1];

  for (let i of selectedGroup) {
    groupElements.push(array[i]);
  }

  return groupElements;
}

// export function convertName(inputString) {
//   return inputString.replace(/\s+/g, "-").toLowerCase();
// }

// export function convertNameOriginal(slugString) {
//   const words = slugString.split("-");
//   const originalWords = words
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");

//   return originalWords;
// }
