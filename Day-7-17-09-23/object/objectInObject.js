const student = {
  name: "David",
  id: 532,
  address: "Dhaka, Bangladesh",
  isSingle: true,
  freinds: ["Sam", "Rony", "Robin", "Antoni"],
  movies: [
    { name: "Ava-Deva", release: "April, 2001" },
    { name: "Aven-Oven", release: "June, 1970" },
    { name: "Titanic-2", rease: "January, 2030" },
  ],
  count: function () {
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
  },
  car: {
    brand: "Toyota",
    price: 50000000,
    model: "T-100MX-2022",
    manufacture: {
      name: "Toyota",
      ceo: "Akio  Toyoda",
      place: "Japan",
    },
  },
};
// console.log(student);
// console.log(student.freinds);
// console.log(student.movies[0]);
// console.log(student.car);
// console.log(student.car.model);
// console.log(student.car.manufacture.place);
// console.log(student.movies[1].name);
// student.count();
