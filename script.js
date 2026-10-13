const cars = [
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
const menuLinksEl = menuEl.querySelectorAll("a");
const carsListEl = document.querySelector("#carsList");

hamburgerBtnEl.addEventListener("click", () => {
  menuEl.classList.toggle("active");
  hamburgerBtnEl.classList.toggle("active");

  // hide the menu after selection
  menuLinksEl.forEach((link) => {
    link.addEventListener("click", () => {
      hideMenu(menuEl, hamburgerBtnEl);
    });
  });
});

cars.forEach((p) => {
  const liEl = document.createElement("li");
  const buttonEl = document.createElement("button");
  buttonEl.id = "buyButton";
  buttonEl.textContent = "Buy";
  liEl.innerHTML = `
 <div>
 <h3>${p.make}</h3>
  <p>Model: ${p.model}</p> 
 <p>Year: ${p.year}</p>  
 <p>Price: ${p.price} € </p>  
 </div>
 `;
  liEl.appendChild(buttonEl);

  buttonEl.addEventListener("click", () => {
    toggleButtonStyle(buttonEl);
  });

  carsListEl.appendChild(liEl);
});

function hideMenu(menuEl, hamburgerBtnEl) {
  menuEl.classList.toggle("active");
  hamburgerBtnEl.classList.toggle("active");
}

function toggleButtonStyle(btn) {
  if (btn.textContent === "Buy") {
    btn.textContent = "Bought";
    btn.style.backgroundColor = "green";
  } else {
    btn.textContent = "Buy";
    btn.style.backgroundColor = "";
  }
}
