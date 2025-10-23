document.addEventListener("DOMContentLoaded", function () {
  console.log("the document is loaded");
  let fruits = ["apples", "pears", "bananas", "oranges"];

  /*
    createElement
    createTextNode
    appendChild
    */
  let fruitList = document.createElement("ul");
  fruits.forEach((f) => {
    /* create text node, create li, append 
           append li to ul */
    let fruitTextNode = document.createTextNode(f);
    let fruitListItem = document.createElement("li");
    fruitListItem.appendChild(fruitTextNode);
    fruitList.appendChild(fruitListItem);
  });
  console.log(fruitList);
  document.querySelector("#fruit-list").appendChild(fruitList);
});
