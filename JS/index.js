function greeting() {
  alert("Hei og velkommen til din handleliste!");
}
greeting();

// Items not needed, in Storage
let inputItem = document.getElementById("add-item-storage");
let storageItemsList = document.getElementById("stored-items");
function addItemStorage() {
  let newItemStorage = inputItem.value;
  storageItemsList.innerHTML += `<li>${newItemStorage}</li>`;
}
// Items to purchase
let inputPurchase = document.getElementById("add-item-purchase");
let purchaseItemsList = document.getElementById("purchases");
function addItemPurchase() {
  let newItemPurchase = inputPurchase.value;
  purchaseItemsList.innerHTML += `<li>${newItemPurchase}</li>`;
}
// Low in stock
let inputLowStorage = document.getElementById("add-item-low");
let lowStorageItemsList = document.getElementById("low-storage");
function addItemLowStock() {
  let newItemLow = inputLowStorage.value;
  lowStorageItemsList.innerHTML += `<li>${newItemLow}</li>`;
}
