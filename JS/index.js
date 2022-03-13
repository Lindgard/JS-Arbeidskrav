function greeting() {
  alert("Hei og velkommen til din handleliste!");
}
greeting();

// Items not needed, in Storage
let inputItem = document.getElementById("add-item-storage");
let storageItemsList = document.getElementById("stored-items");
const itemArrayStorage = [];

function addItemStorage() {
  let newItemStorage = inputItem.value;
  storageItemsList.innerHTML += `<li>${newItemStorage}</li>`;
  itemArrayStorage.push(newItemStorage);
}

function deleteItemStorage() {
  let checkDelete = prompt("vil du slette dette? Skriv Ja/Nei");
  if (checkDelete === "Ja") {
    itemArrayStorage.splice(-1, 1);
    storageItemsList.removeChild(storageItemsList.lastChild);
    return;
  } else {
    return;
  }
}

// Items to purchase
let inputPurchase = document.getElementById("add-item-purchase");
let inputPrice = document.getElementById("price-add");
let purchaseItemsList = document.getElementById("purchases");
const itemArrayPurchase = [];
const priceArray = [];

// legge til vare
function addItemPurchase() {
  let newItemPurchase = inputPurchase.value;
  let newItemPrice = parseInt(inputPrice.value);
  if (newItemPrice === 0) {
    alert("ERROR! Price cannot be 0!");
    return;
  } else if (isNaN(newItemPrice)) {
    alert("ERROR! Input has to be a number!");
    return;
  }
  purchaseItemsList.innerHTML += `<li>${newItemPurchase}, ${newItemPrice} kr <input
          type="button"
          value="Delete"
          id="delete-purchase"
          class="btn"
          onclick="deleteItemPurchase()"
        /></li>`;
  itemArrayPurchase.push({
    name: newItemPurchase,
    price: newItemPrice,
  });
  priceArray.push(newItemPrice);
  sumPrices();
  return;
}

// Sum av pris for varer
function sumPrices() {
  let sumPurchase = 0;
  for (let i = 0; i < priceArray.length; i++) {
    sumPurchase += priceArray[i];
  }
  sumOutput = document.getElementById("sum-output");
  sumOutput.innerHTML = `Total kostnad: ${sumPurchase}`;
}
// fjerne vare
function deleteItemPurchase() {
  let checkDelete = prompt("vil du slette dette? Skriv Ja/Nei");
  if (checkDelete === "Ja") {
    itemArrayPurchase.splice(1, 1);
    purchaseItemsList.removeChild(purchaseItemsList.lastChild);
    return;
  } else {
    return;
  }
}

// Low in stock
let inputLowStorage = document.getElementById("add-item-low");
let lowStorageItemsList = document.getElementById("low-storage");
const itemArrayLow = [];

function addItemLowStock() {
  let newItemLow = inputLowStorage.value;
  lowStorageItemsList.innerHTML += `<li>${newItemLow}</li>`;
  itemArrayLow.push(newItemLow);
}

function deleteItemLow() {
  let checkDelete = prompt("vil du slette dette? Skriv Ja/Nei");
  if (checkDelete === "Ja") {
    itemArrayLow.splice(-1, 1);
    lowStorageItemsList.removeChild(lowStorageItemsList.lastChild);
    return;
  } else {
    return;
  }
}
