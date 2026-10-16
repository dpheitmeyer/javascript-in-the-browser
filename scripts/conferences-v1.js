/* collapse all on load */
document.addEventListener("DOMContentLoaded", function () {

  /* collapse all on load */
  let nestedItems = document.querySelectorAll("ul.collapsible > li");
  console.log(nestedItems);
   
  for ( item of nestedItems ) {
    console.log(item);
    item.classList.add('collapsed');
  }

  /* add click listeners to expand (remove collapsed) */
  for (item of nestedItems) {
    item.addEventListener("click", function(event) {
      let clickedItem = event.target;
      console.log(clickedItem);
      clickedItem.classList.toggle("collapsed");
    })}

});
