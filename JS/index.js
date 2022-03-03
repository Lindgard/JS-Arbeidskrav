function greeting() {
  alert("Hei og velkommen til din handleliste!");
}
greeting();

// Items not needed, in Storage
let inputItem = document.getElementById("add-item-storage");
let storageItemsList = document.getElementById("stored-items");
let itemArrayStorage = [];

function addItemStorage() {
  let newItemStorage = inputItem.value;
  storageItemsList.innerHTML += `<li>${newItemStorage}</li>`;
  itemArrayStorage.push(newItemStorage);
}

// Items to purchase
let inputPurchase = document.getElementById("add-item-purchase");
let inputPrice = document.getElementById("price-add");
let purchaseItemsList = document.getElementById("purchases");
let itemArrayPurchase = [];

function addItemPurchase() {
  let newItemPurchase = inputPurchase.value;
  let newItemPrice = parseInt(inputPrice.value);
  // console.log(newItemPrice);
   if (newItemPrice === 0) {
    alert("ERROR! Price cannot be 0!")
    return
  } else if (isNaN(newItemPrice)) {
    alert("ERROR! Input has to be a number!")
    return
  }
  purchaseItemsList.innerHTML += `<li>${newItemPurchase}, ${newItemPrice} kr</li>`;
  itemArrayPurchase.push({
    name: newItemPurchase,
    price: newItemPrice,
  });
}

function deleteItemPurchase () {
  itemArrayPurchase.splice(0,1) = prompt ("vil du slette dette? skriv Ja");
}
// Low in stock
let inputLowStorage = document.getElementById("add-item-low");
let lowStorageItemsList = document.getElementById("low-storage");
let itemArrayLow = [];

function addItemLowStock() {
  let newItemLow = inputLowStorage.value;
  lowStorageItemsList.innerHTML += `<li>${newItemLow}</li>`;
  itemArrayLow.push(newItemLow);
}
