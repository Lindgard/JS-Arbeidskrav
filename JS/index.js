function greeting() {
  alert("Hei og velkommen til din handleliste!");
}
greeting();

// Items not needed, in Storage
let inputItem = document.getElementById("add-item-storage");
let storageItemsList = document.getElementById("stored-items");
function addItemStorage() {
  let newItem = inputItem.value;
  storageItemsList.innerHTML += `<li>${newItem}</li>`;
}
// Items to purchase
let inputPurchase = document.getElementById("add-item-purchase");
let purchaseItemsList = document.getElementById("purchases");

// Low in stock
let inputLowStorage = document.getElementById("add-item-low");
let lowStorageItemsList = document.getElementById("low-storage");
