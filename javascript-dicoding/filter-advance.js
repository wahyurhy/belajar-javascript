const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

console.log('Daftar Siswa Beasiswa');
eligibleForScholarshipStudents.forEach((currentValue, index) => console.log(`${index + 1}. ${currentValue.name.padEnd(10, ' ')} | ${currentValue.score}`));