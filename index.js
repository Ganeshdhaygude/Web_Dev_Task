// JavaScript for Interactive Features

document.addEventListener("DOMContentLoaded", () => {
    // Add to Cart button functionality
    const addToCartButton = document.querySelector(".add-to-cart");
  
    addToCartButton.addEventListener("click", () => {
      alert("Item added to cart!");
    });
  
    // Highlight the popular card on hover
    const popularCard = document.querySelector(".popular");
  
    popularCard.addEventListener("mouseenter", () => {
      popularCard.style.backgroundColor = "#ffe6f0";
    });
  
    popularCard.addEventListener("mouseleave", () => {
      popularCard.style.backgroundColor = "#fff";
    });
    
  
    // Dropdown selection interaction
    const selects = document.querySelectorAll("select");
  
    selects.forEach(select => {
      select.addEventListener("change", (event) => {
        console.log(`Selected ${event.target.value}`);
      });
    });
  });
  