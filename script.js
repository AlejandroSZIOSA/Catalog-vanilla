const carsInStock = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    price: 20000,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2019,
    price: 18000,
  },
  {
    make: "Ford",
    model: "Focus",
    year: 2018,
    price: 15000,
  },
  {
    make: "Chevrolet",
    model: "Malibu",
    year: 2021,
    price: 25000,
  },
  {
    make: "Nissan",
    model: "Altima",
    year: 2022,
    price: 27000,
  },
  {
    make: "Mercedez",
    model: " S-Class",
    year: 2022,
    price: 90000,
  },
  {
    make: "BMW",
    model: "X5",
    year: 2023,
    price: 80000,
  },
];

const hamburgerBtnEl = document.querySelector("#menuHamburger");
const menuEl = document.querySelector("#navMenu");
const carsListEl = document.querySelector("#carsList");

hamburgerBtnEl.addEventListener("click", () => {
  console.log("click");
  menuEl.classList.toggle("active");
  hamburgerBtnEl.classList.toggle("active");

  // close the menu after selection of an item
  const menuLinksEl = menuEl.querySelectorAll("a");

  menuLinksEl.forEach((link) => {
    link.addEventListener("click", () => {
      menuEl.classList.remove("active");
      hamburgerBtnEl.classList.remove("active");
    });
  });
});

carsInStock.forEach((p) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.id = "buyButton";
  button.textContent = "Buy";
  li.innerHTML = `
 <div>
 <h3>${p.make}</h3>
  <p>Model: ${p.model}</p> 
 <p>Year: ${p.year}</p>  
 <p>Price: ${p.price} € </p>  
 </div>
 `;
  li.appendChild(button);

  button.addEventListener("click", () => {
    toggleButton(button);
  });

  carsListEl.appendChild(li);
});

function toggleButton(button) {
  if (button.textContent === "Buy") {
    button.textContent = "Bought";
    button.style.backgroundColor = "green";
  } else {
    button.textContent = "Buy";
    button.style.backgroundColor = "";
  }
}
