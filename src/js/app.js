/**
 * WEB222 â€“ Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Sevinj Feyziyeva
 *      Student ID: 154057194
 *      Date:       Dec-02-2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

// Create our number formatter. //TAKEN FROM ONLINE FORUM AT: https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
const formatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

/*function appendItems(rowsToPrint) {
  let productLocation = document.getElementById("category-products");
  for (let i = 0; i < rowsToPrint.length; i++) {
    let row = document.createElement("tr");
    productLocation.appendChild(row);
    row.addEventListener("click", function () {
      console.log(rowsToPrint[i].title);
    });
    let firstTd = document.createElement("td");
    firstTd.innerHTML = "<b>" + rowsToPrint[i].title + "</b>";
    row.appendChild(firstTd);
    let secondTd = document.createElement("td");
    secondTd.innerHTML = rowsToPrint[i].description;
    row.appendChild(secondTd);
    let thirdTd = document.createElement("td");
    thirdTd.innerHTML = formatter.format(rowsToPrint[i].price);
    row.appendChild(thirdTd);
  }
}*/

function appendItems(rowsToPrint) {
  let productLocation = document.getElementById("myCards");
  for (let i = 0; i < rowsToPrint.length; i++) {
    let art = document.createElement("article");
    art.setAttribute("class", "card");
    productLocation.appendChild(art);
    art.addEventListener("click", function () {
      console.log(rowsToPrint[i].title);
    });
    let prodImg = document.createElement("img");
    prodImg.src = rowsToPrint[i].imageUrl;
    art.appendChild(prodImg);
    let prodHead = document.createElement("header");
    prodHead.innerHTML =
      "<header><h4>" + rowsToPrint[i].title + "</h4></header>";
    art.appendChild(prodHead);
    //let prodCont = document.createElement("div");
    //prodCont.setAttribute("class", "content")
    //art.appendChild(prodCont);
    let prodInnerCont = document.createElement("p");
    prodInnerCont.style.fontSize = "14px";
    prodInnerCont.innerHTML = rowsToPrint[i].description;
    prodHead.appendChild(prodInnerCont);
    let prodPrice = document.createElement("footer");
    prodPrice.setAttribute("class", "card-footer");
    prodPrice.innerHTML =
      "<footer>" + formatter.format(rowsToPrint[i].price) + "</footer>";
    art.appendChild(prodPrice);
  }
}

function filterItems(arr, query) {
  let arra = arr;
  var arrra = arra.filter(function (prod) {
    return !prod.discontinued;
  });
  return arrra.filter((el) => el.categories.includes(query));
}

window.onload = function () {
  let categoryLocation = document.getElementById("selected-category");
  categoryLocation.innerHTML = categories[0].name;
  var rowsToPrint = filterItems(products, categories[0].id);
  appendItems(rowsToPrint);
};

function updateCategory(Cat) {
  let categoryLocation = document.getElementById("selected-category");
  categoryLocation.innerHTML = Cat;
  let catProducts = document.getElementById("myCards");
  catProducts.innerHTML = "";
  catProducts.setAttribute("class", "cards");
  catProducts.setAttribute("id", "myCards");
  //let prodElements = catProducts.querySelectorAll(".cards");
  //prodElements.forEach(function (tr) {
  // tr.innerHTML = "";
  // });
}

for (let i = 0; i < categories.length; i++) {
  console.log(categories[i].name);

  const insertCategory = document.createElement("input");
  insertCategory.type = "button";
  insertCategory.value = categories[i].name;
  const tempCat = categories[i].name;
  const tempCatId = categories[i].id;
  insertCategory.id = categories[i].id;
  insertCategory.style = "width: 20%;border:1px solid #1f586a";
  insertCategory.addEventListener("click", function () {
    updateCategory(tempCat);
    var rowsToPrint = filterItems(products, tempCatId);
    appendItems(rowsToPrint);
  });
  var targetMenu = document.getElementById("menu");
  targetMenu.appendChild(insertCategory);
}

/*let allTrs = document.querySelectorAll('tr');
    allTrs.forEach(e => e.addEventListener("click", function () {
        // Here, `this` refers to the element the event was hooked on
        console.log(e.firstTd);
    }));*/
