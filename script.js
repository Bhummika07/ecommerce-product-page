const products = [

  { name: "Phone", price: 500, rating: 4, category: "Electronics" },
  { name: "Laptop", price: 800, rating: 5, category: "Electronics" },
  { name: "Headphones", price: 100, rating: 3, category: "Electronics" },
  { name: "TV", price: 700, rating: 4, category: "Electronics" },
  { name: "Camera", price: 600, rating: 5, category: "Electronics" },

  { name: "T-Shirt", price: 1100, rating: 4, category: "Clothes" },
  { name: "Jeans", price: 1500, rating: 5, category: "Clothes" },
  { name: "Jacket", price: 4000, rating: 4, category: "Clothes" },
  { name: "Top", price: 2000, rating: 5, category: "Clothes" },
  { name: "Cap", price: 800, rating: 3, category: "Clothes" },

  { name: "Book A", price: 1250, rating: 5, category: "Books" },
  { name: "Book B", price: 1150, rating: 4, category: "Books" },
  { name: "Book C", price: 850, rating: 3, category: "Books" },
  { name: "Book D", price: 1500, rating: 5, category: "Books" },
  { name: "Book E", price: 2050, rating: 4, category: "Books" },

  { name: "Table", price: 3000, rating: 5, category: "Furniture" },
  { name: "Wardrobe", price: 5550, rating: 4, category: "Furniture" },
  { name: "Chairs", price: 1600, rating: 4, category: "Furniture" },
  { name: "Sofa", price: 30000, rating: 5, category: "Furniture" },
  { name: "Shoe Rack", price: 3500, rating: 4, category: "Furniture" }
];

let displayProducts = [...products];

function showProducts(list) {
  const div = document.getElementById("products");
  div.innerHTML = "";

  list.forEach(function (p) {
    div.innerHTML += `
      <div class="product">
        <h4>${p.name}</h4>
        <p>Price: $${p.price}</p>
        <p>Rating: ${p.rating}</p>
        <p>Category: ${p.category}</p>
      </div>
    `;
  });
}

function applySort() {
  const value = document.getElementById("sort").value;

  if (value === "priceAsc")
    displayProducts.sort(function (a, b) {
      return a.price - b.price;
    });

  if (value === "priceDesc")
    displayProducts.sort(function (a, b) {
      return b.price - a.price;
    });

  if (value === "nameAsc")
    displayProducts.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

  if (value === "nameDesc")
    displayProducts.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    });

  if (value === "ratingAsc")
    displayProducts.sort(function (a, b) {
      return a.rating - b.rating;
    });

  if (value === "ratingDesc")
    displayProducts.sort(function (a, b) {
      return b.rating - a.rating;
    });

  showProducts(displayProducts);
}

function applyFilter() {
  const cat = document.getElementById("category").value;

  if (cat === "All") {
    displayProducts = [...products];
  } else {
    displayProducts = products.filter(function (p) {
      return p.category === cat;
    });
  }

  showProducts(displayProducts);
}

showProducts(displayProducts);
