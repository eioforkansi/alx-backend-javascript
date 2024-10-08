class Student {
  constructor(id, firstName, location) {
    this.id = id;
    this.fisrtName = firstName;
    this.location = location;
  }
}

export default function getListStudents() {
  return [
    new Student(1, 'Guillaume', 'San Francisco'),
    new Student(2, 'James', 'Columbia'),
    new Student(5, 'Serena', 'San Francisco'),
  ];
}
