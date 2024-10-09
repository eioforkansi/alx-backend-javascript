/**
 * A function getStudentIdsSum that returns the sum of all the student ids.
 * @param {list} studentsa list of students
 * @returnsthe sum of all the student ids.
 */

export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
