// A function to get avarage assignment marks
function getAvarage(ass1, ass2, ass3) {
  const totalMarks = ass1 + ass2 + ass3;
  const avarageMarks = totalMarks / 3;
  return avarageMarks;
}

const assignment1Mark = 28;
const assignment2Mark = 58;
const assignment3Mark = 50;

const myAvarage = getAvarage(assignment1Mark, assignment2Mark, assignment3Mark);
console.log("my  avarage mark is : ", myAvarage.toFixed(2));
