const cars = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2019,
  },
  {
    make: "Ford",
    model: "Focus",
    year: 2018,
  },
  {
    make: "Chevrolet",
    model: "Malibu",
    year: 2021,
  },
  {
    make: "Nissan",
    model: "Altima",
    year: 2022,
  },
];

const menuHamburgerBtnEl = document.querySelector("#menuHamburger");

menuHamburgerBtnEl.addEventListener("click", () => {
  console.log("click");
});
