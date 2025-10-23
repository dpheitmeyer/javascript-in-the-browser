document.addEventListener("DOMContentLoaded", function () {
  let ths = document.querySelectorAll("table.sortable thead th");
  console.log(ths);
  ths.forEach((th, i) => {
    /* add a click listener */
    th.addEventListener("click", function () {
      console.log(`${i} index of th has been clicked`);

      let trs = document.querySelectorAll("table.sortable tbody tr");

      console.log(trs);
      let trsArray = Array.from(trs);
      console.log(trsArray);
      trsArray.sort((a, b) => {
 
        let aText = a.cells[i].textContent;
        let bText = b.cells[i].textContent;

        /* try numeric */
        let aNum = Number(aText);
        let bNum = Number(bText);
        if (!isNaN(aNum) && !isNaN(bNum) ) {
            return aNum - bNum;
        } else { 
            /* we do text */
            return aText.localeCompare(bText);
        }
      });
      let tbody = document.querySelector("table.sortable tbody");
      trsArray.forEach((tr) => {
        tbody.appendChild(tr);
      });
    });
  });

})