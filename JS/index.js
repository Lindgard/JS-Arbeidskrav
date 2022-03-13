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
  storageItemsList.innerHTML += `<li class="new-item-storage">${newItemStorage} 
        <input
          type="button"
          value="Delete"
          id="delete-storage"
          class="btn"
          onclick="deleteItemStorage()"
        /></li>`;
  itemArrayStorage.push(newItemStorage);
}

function deleteItemStorage() {
  let checkDelete = prompt("vil du slette dette? Skriv Ja/Nei");
  for (i = 0; i < itemArrayStorage.length; i++) {
    if (checkDelete === "Ja" && i <= 100) {
      itemArrayStorage.splice(i, 1);
      let deleteItem = document.querySelector(".new-item-storage");
      deleteItem.remove();
      return;
    } else {
      return;
    }
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
  purchaseItemsList.innerHTML += `<li class="new-item-purchase">
        ${newItemPurchase}, ${newItemPrice} kr 
        <input
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
  for (i = 0; i < itemArrayPurchase.length; i++) {
    if (checkDelete === "Ja") {
      itemArrayPurchase.splice(i, 1);
      let deleteItem = document.querySelector(".new-item-purchase");
      deleteItem.remove(itemArrayPurchase[i]);
    } else {
      return;
    }
  }
}

// Low in stock
let inputLowStorage = document.getElementById("add-item-low");
let lowStorageItemsList = document.getElementById("low-storage");
const itemArrayLow = [];

function addItemLowStock() {
  let newItemLow = inputLowStorage.value;
  lowStorageItemsList.innerHTML += `<li class="new-item-low">${newItemLow} 
        <input
          type="button"
          value="Delete"
          id="delete-low"
          class="btn"
          onclick="deleteItemLow()"
        /></li>`;
  itemArrayLow.push(newItemLow);
}

function deleteItemLow() {
  let checkDelete = prompt("vil du slette dette? Skriv Ja/Nei");
  for (let i = 0; i < itemArrayLow.length; i++) {
    if (checkDelete === "Ja") {
      itemArrayLow.splice(-1, 1);
      let deleteItem = document.querySelector(".new-item-low");
      deleteItem.remove();
      return;
    } else {
      return;
    }
  }
}
