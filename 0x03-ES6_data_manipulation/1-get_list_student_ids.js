/**
 *
 * @param {list} array is an array of objects - and this array
 * is the same format as {id, firstName, location}
 * @returns an array of ids from a list of object.
 * If the argument is not an array, the function is returning an empty array.
 */
export default function getListStudentIds(array) {
  if (array instanceof Array) {
    return array.map((student) => student.id);
  }
  return [];
}
