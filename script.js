// Cart Load
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  
  let count = document.getElementById("cart-count");
  if (count) {
    count.innerText = cart.length;
  }
}

// Go to Cart Page
function viewCart() {
  window.location.href = "cart.html";
}

// Search Function
function searchProduct(value) {
  let products = document.querySelectorAll(".product");

  products.forEach(product => {
    let name = product.querySelector("h3").innerText.toLowerCase();
    product.style.display = name.includes(value.toLowerCase()) ? "block" : "none";
  });
}

// Page Load (safe)
window.onload = function () {
  let count = document.getElementById("cart-count");
  if (count) {
    count.innerText = cart.length;
  }
};

// 🔥 NEW: Go to Product Page
function goToProduct(name, price, rating) {
  localStorage.setItem("product", JSON.stringify({ name, price, rating }));
  window.location.href = "product.html";
}
