/**
 * A function updateStudentGradeByCity that returns an array of students
 * for a specific city with their new grade
 * @param {list} students a list of students.
 * @param {string} city a city.
 * @param {*} grades an array of “grade” objects.
 * @returns an array of students for a specific city with their new grade.
 */

export default function updateStudentGradeByCity(students, city, grades) {
  return students.filter((student) => student.location === city).map((student) => {
    let grade = 'N/A';
    for (const object of grades) {
      if (object.studentId === student.id) {
        grade = object.grade;
        break;
      }
    }
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade,
    };
  });
}
