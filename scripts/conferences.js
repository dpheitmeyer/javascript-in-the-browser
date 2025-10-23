/* collapse all on load */
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll("ul.collapsible > li")
    .forEach((item) => item.classList.add("collapsed"));

  /* add click listeners to expand (remove collapsed) */
  document.querySelectorAll("ul.collapsible > li").forEach((n) =>
    n.addEventListener("click", function (event) {
      conferenceItem = event.target;
      conferenceItem.classList.toggle("collapsed");
    })
  );
});
