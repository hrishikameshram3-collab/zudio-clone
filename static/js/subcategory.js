const products = [

  // ================= WOMEN =================
  // Kurti (5)
  { id: 1, name: "Cotton Kurti", price: 699, category: "women", sub: "kurti" },
  { id: 2, name: "Printed Kurti", price: 799, category: "women", sub: "kurti" },
  { id: 3, name: "Rayon Kurti", price: 649, category: "women", sub: "kurti" },
  { id: 4, name: "Anarkali Kurti", price: 999, category: "women", sub: "kurti" },
  { id: 5, name: "Straight Kurti", price: 599, category: "women", sub: "kurti" },

  // Top (5)
  { id: 6, name: "Casual Top", price: 499, category: "women", sub: "top" },
  { id: 7, name: "Crop Top", price: 399, category: "women", sub: "top" },
  { id: 8, name: "Peplum Top", price: 699, category: "women", sub: "top" },
  { id: 9, name: "Formal Top", price: 799, category: "women", sub: "top" },
  { id: 10, name: "Party Top", price: 899, category: "women", sub: "top" },

  // ================= MEN =================
  // T-Shirt (5)
  { id: 11, name: "Men Casual T-Shirt", price: 599, category: "men", sub: "tshirt" },
  { id: 12, name: "Men Printed T-Shirt", price: 499, category: "men", sub: "tshirt" },
  { id: 13, name: "Men Polo T-Shirt", price: 799, category: "men", sub: "tshirt" },
  { id: 14, name: "Men Sports T-Shirt", price: 699, category: "men", sub: "tshirt" },
  { id: 15, name: "Men Oversized T-Shirt", price: 899, category: "men", sub: "tshirt" },

  // Jeans (5)
  { id: 16, name: "Men Slim Jeans", price: 999, category: "men", sub: "jeans" },
  { id: 17, name: "Men Regular Jeans", price: 899, category: "men", sub: "jeans" },
  { id: 18, name: "Men Blue Jeans", price: 1099, category: "men", sub: "jeans" },
  { id: 19, name: "Men Black Jeans", price: 1199, category: "men", sub: "jeans" },
  { id: 20, name: "Men Stretch Jeans", price: 1299, category: "men", sub: "jeans" },

  // ================= KIDS =================
  // Boys (5)
  { id: 21, name: "Boys T-Shirt", price: 299, category: "kids", sub: "boys" },
  { id: 22, name: "Boys Shorts", price: 249, category: "kids", sub: "boys" },
  { id: 23, name: "Boys Jacket", price: 699, category: "kids", sub: "boys" },
  { id: 24, name: "Boys Jeans", price: 499, category: "kids", sub: "boys" },
  { id: 25, name: "Boys Nightwear", price: 349, category: "kids", sub: "boys" },

  // Girls (5)
  { id: 26, name: "Girls Dress", price: 399, category: "kids", sub: "girls" },
  { id: 27, name: "Girls Top", price: 299, category: "kids", sub: "girls" },
  { id: 28, name: "Girls Skirt", price: 349, category: "kids", sub: "girls" },
  { id: 29, name: "Girls Jacket", price: 699, category: "kids", sub: "girls" },
  { id: 30, name: "Girls Nightwear", price: 449, category: "kids", sub: "girls" },

  // ================= BEAUTY =================
  // Makeup (5)
  { id: 31, name: "Lipstick", price: 299, category: "beauty", sub: "makeup" },
  { id: 32, name: "Foundation", price: 499, category: "beauty", sub: "makeup" },
  { id: 33, name: "Compact Powder", price: 349, category: "beauty", sub: "makeup" },
  { id: 34, name: "Eyeliner", price: 199, category: "beauty", sub: "makeup" },
  { id: 35, name: "Blush", price: 399, category: "beauty", sub: "makeup" },

  // Skincare (5)
  { id: 36, name: "Face Wash", price: 199, category: "beauty", sub: "skincare" },
  { id: 37, name: "Moisturizer", price: 299, category: "beauty", sub: "skincare" },
  { id: 38, name: "Sunscreen", price: 349, category: "beauty", sub: "skincare" },
  { id: 39, name: "Serum", price: 599, category: "beauty", sub: "skincare" },
  { id: 40, name: "Night Cream", price: 499, category: "beauty", sub: "skincare" },

  // ================= FOOTWEAR =================
  // Shoes (5)
  { id: 41, name: "Running Shoes", price: 1299, category: "footwear", sub: "shoes" },
  { id: 42, name: "Casual Shoes", price: 999, category: "footwear", sub: "shoes" },
  { id: 43, name: "Sports Shoes", price: 1499, category: "footwear", sub: "shoes" },
  { id: 44, name: "Formal Shoes", price: 1799, category: "footwear", sub: "shoes" },
  { id: 45, name: "Walking Shoes", price: 1099, category: "footwear", sub: "shoes" },

  // Slippers (5)
  { id: 46, name: "Men Slippers", price: 399, category: "footwear", sub: "slippers" },
  { id: 47, name: "Women Slippers", price: 499, category: "footwear", sub: "slippers" },
  { id: 48, name: "Flip Flops", price: 299, category: "footwear", sub: "slippers" },
  { id: 49, name: "Casual Slides", price: 599, category: "footwear", sub: "slippers" },
  { id: 50, name: "Home Slippers", price: 349, category: "footwear", sub: "slippers" }
];

// ================= FUNCTIONS =================

function displayProducts(items) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  items.forEach(p => {
    list.innerHTML += `
      <div class="product-card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
  });
}

function filterCategory(category) {
  const filtered = products.filter(
    p => p.category === category.toLowerCase()
  );
  displayProducts(filtered.slice(0, 5));
}

function filterSub(category, sub) {
  const filtered = products.filter(
    p => p.category === category && p.sub === sub
  );
  displayProducts(filtered);
}

// Page load → Women Kurti (default)
window.onload = () => {
  filterSub("women", "kurti");
};