let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").innerText = cart.length;
}

function viewCart() {
  window.location.href = "cart.html";
}

function searchProduct(value) {
  let products = document.querySelectorAll(".product");

  products.forEach(product => {
    let name = product.querySelector("h3").innerText.toLowerCase();
    product.style.display = name.includes(value.toLowerCase()) ? "block" : "none";
  });
}

window.onload = function () {
  document.getElementById("cart-count").innerText = cart.length;
};

function showDetails(name, price, rating) {
  document.getElementById("product-detail").style.display = "block";
  document.getElementById("detail-name").innerText = name;
  document.getElementById("detail-price").innerText = "Price: ₹" + price;
  document.getElementById("detail-rating").innerText = "Rating: " + rating;
}

function closeDetails() {
  document.getElementById("product-detail").style.display = "none";
      }
