export default function appendToEachArrayValue(array, appendString) {
  const list = [];
  for (const value of array) {
    const newVar = appendString + value;
    list.push(newVar);
  }

  return list;
}
