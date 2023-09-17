var names = ["Me", "Tom", "Jane", "Peter", "John"];
var scores = [85, 66, 95, 56, 40];
var grades = [];
var score;
var i, j;

for (i = 0; i < 5; i++) {
  score = scores[i];

  if (score >= 80) {
    grades.push("A");
  } else if (score >= 60 && score < 80) {
    grades.push("B");
  } else if (score >= 50 && score < 60) {
    grades.push("C");
  } else if (score >= 40 && score < 50) {
    grades.push("D");
  } else {
    grades.push("F");
  }
}
for (j = 0; j < 5; j++) {
  console.log("Name :", names[j]);
  console.log("Grade :", grades[j]);
}
