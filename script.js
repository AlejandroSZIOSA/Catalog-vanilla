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
];

const menuHamburgerBtnEl = document.querySelector("#menuHamburger");
const menuDesktopEl = document.querySelector("#navMenu");
const productListEl = document.querySelector("#carsStockList");

menuHamburgerBtnEl.addEventListener("click", () => {
  console.log("click");
  menuDesktopEl.classList.toggle("active");
  menuHamburgerBtnEl.classList.toggle("active");

  if (menuDesktopEl.classList.contains("active")) {
    setTimeout(() => {
      menuDesktopEl.classList.remove("active");
      menuHamburgerBtnEl.classList.remove("active");
    }, 2000);
  }
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
 <p>Price: ${p.price} euros</p>  
 </div>
 `;
  li.appendChild(button);

  button.addEventListener("click", () => {
    toggleButton(button);
  });

  productListEl.appendChild(li);
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
