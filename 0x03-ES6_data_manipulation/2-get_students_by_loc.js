/**
 * A function getStudentsByLocation that returns
 * an array of objects who are located in a specific city.
 * @param {list} students a list of students.
 * @param {string} city a city.
 * @returns an array of objects who are located in a specific city.
 */

export default function getStudentsByLocation(students, city) {
  return students.filter((object) => object.location === city);
}
