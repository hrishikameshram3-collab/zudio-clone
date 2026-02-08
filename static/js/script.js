/* ================== PRODUCTS ================== */
const buttons = document.querySelectorAll("[data-category]");
const sections = document.querySelectorAll(".product-section");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    sections.forEach(section => {
      if (category === "all") {
        section.style.display = "block";   // 👈 ALL = sab dikhe
      } else {
        section.style.display =
          section.id === category ? "block" : "none";
      }
    });
  });
});

const products = [
  { id: 1, name: "Women Kurti", price: 699, category: "women", image: "../static/images/banner1.jpg" },
  { id: 2, name: "Women Top", price: 499, category: "women", image: "../static/images/banner2.jpeg" },
  { id: 3, name: "Women Jeans", price: 899, category: "women", image: "../static/images/banner3.jpeg" },
  { id: 4, name: "Women Dress", price: 999, category: "women", image: "../static/images/banner4.jpeg" },
  { id: 5, name: "Women Jacket", price: 1299, category: "women", image: "../static/images/banner5.jpeg" },

  { id: 6, name: "Men T-Shirt", price: 599, category: "men", image: "../static/images/banner6.jpeg" },
  { id: 7, name: "Men Shirt", price: 799, category: "men", image: "../static/images/banner7.jpeg" },
  { id: 8, name: "Men Jeans", price: 999, category: "men", image: "../static/images/banner8.jpeg" },
  { id: 9, name: "Men Jacket", price: 1499, category: "men", image: "../static/images/banner9.jpeg" },
  { id: 10, name: "Men Hoodie", price: 1199, category: "men", image: "../static/images/banner10.jpeg" },

  { id: 11, name: "Kids T-Shirt", price: 299, category: "kids", image: "../static/images/banner11.jpeg" },
  { id: 12, name: "Kids Dress", price: 699, category: "kids", image: "../static/images/banner12.jpeg" },
  { id: 13, name: "Kids Skirt", price: 249, category: "kids", image: "../static/images/banner13.jpeg" },
  { id: 14, name: "Kids Jacket", price: 499, category: "kids", image: "../static/images/banner14.jpeg" },
  { id: 15, name: "Kids Nightwear", price: 349, category: "kids", image: "../static/images/banner15.jpeg" },

  { id: 16, name: "Face Wash", price: 199, category: "beauty", image: "../static/images/banner16.jpeg" },
  { id: 17, name: "Lipstick", price: 499, category: "beauty", image: "../static/images/banner17.jpeg" },
  { id: 18, name: "Perfume", price: 599, category: "beauty", image: "../static/images/banner18.jpeg" },
  { id: 19, name: "Lip Gloss", price: 299, category: "beauty", image: "../static/images/banner19.jpeg" },
  { id: 20, name: "Hair Serum", price: 349, category: "beauty", image: "../static/images/banner20.jpeg" },

  /* ============== footwear product ================ */

  { id: 1, name: "Casual Shoes", price: 1499, category: "mens", image:"../static/images/footwear1.jpeg" },
  { id: 2, name: "Formal Shoes", price: 1299, category: "mens", image:"../static/images/footwear2.jpeg" },
  { id: 3, name: "Sports Shoes", price: 1399, category: "mens", image:"../static/images/footwear3.jpeg" },
  { id: 4, name: "Slippers", price: 699, category: "mens", image:"../static/images/footwear4.jpeg" },
  { id: 5, name: "Boots", price: 1999, category: "mens", image:"../static/images/footwear5.jpeg" },

  { id:6, name: "Casual Shoes", price: 999, category: "womens", image:"../static/images/footwear6.jpeg"},
  { id:7, name: "Heels", price: 899, category: "womens", image:"../static/images/footwear7.jpeg"},
  { id:8, name: "Sports Shoes", price: 1299, category: "womens", image:"../static/images/footwear8.jpeg"},
  { id:9, name: "Slippers", price: 499, category: "womens", image:"../static/images/footwear9.jpeg"},
  { id:10, name: "Boots", price: 1499, category: "womens", image:"../static/images/footwear10.jpeg"},

  { id:11, name: "Casual Shoes", price: 599, category: "kids", image:"../static/images/footwear11.jpeg"},
  { id:12, name: "Sport Shoes", price: 999, category: "kids", image:"../static/images/footwear12.jpeg"},
  { id:13, name: "Sandal", price: 699, category: "kids", image:"../static/images/footwear13.jpeg"},
  { id:14, name: "Slippers", price: 499, category: "kids", image:"../static/images/footwear14.jpeg"},
  { id:15, name: "School Shoes", price: 1099, category: "kids", image:"../static/images/footwear15.jpeg"},
   
];

/* ================= SHOW MENS / WOMENS / KIDS ================= */

function showFootwearCategory(category) {

  // hide all first
  document.getElementById("Mens-Banners").style.display = "none";
  document.getElementById("Womens-Banners").style.display = "none";
  document.getElementById("Kids-Banners").style.display = "none";

  // show based on category
  if (category === "mens") {
    document.getElementById("Mens-Banners").style.display = "flex";
  } 
  else if (category === "womens") {
    document.getElementById("Womens-Banners").style.display = "flex";
  } 
  else if (category === "kids") {
    document.getElementById("Kids-Banners").style.display = "flex";
  }
}


/* ================= SHOW PRODUCTS ================= */

function showShoeType(category, type) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  const filtered = footwearProducts.filter(
    p => p.category === category && p.type === type
  );

  filtered.forEach(product => {
    list.innerHTML += `
      <div class="product-card">
        <h4>${product.name}</h4>
        <p>₹${product.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
  });

  document.querySelector(".products-section")
    .scrollIntoView({ behavior: "smooth" });
}

/* ================== SHOW CATEGORY ================== */

function showCategory(category) {
  renderProducts(category);
}

/* ================== RENDER PRODUCTS ================== */

function renderProducts(category) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  // category = mens / womens / kids 
  const filtered = products.filter(p => p.category === category);

  if (filtered.length === 0) {
    list.innerHTML = "<p>No products found</p>";
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <img src="${product.image}
      alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="Add to Cart('${product.name}' , ${product.price})">Add to Cart</button>
    `;

    list.appendChild(card);
  });
}
/* ============== footwear Category =========== */

let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart 🛒");
  console.log(cart);
}


/* ================== SEARCH ================== */

document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value) ||
    p.category.toLowerCase().includes(value)
  );

  filtered.forEach(product => {
    list.innerHTML += `
      <div class="product">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
      </div>
    `;
  });
});


/* ================== DEFAULT LOAD ================== */

window.onload = () => {
  showCategory("women");
};