export const filterFunc = (jsonCopy, min, max, col) => {
  var jsonFltered = jsonCopy;
  var newJson = [];
  jsonFltered.map((row, index) => {
    if (row[col] >= min && row[col] <= max) {
      newJson.push(row);
    }
    return newJson;
  });
  return newJson;
};
