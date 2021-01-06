/* exported getStudentNames */
function getStudentNames(students) {
  var i = 0;
  var answer = [];
  while (i < students.length) {
    answer.push(students[i].name);
    i++;
  }
  return answer;
}
