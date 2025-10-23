function validateNetid(i) {
  let netidInput = i;
  let netidValue = netidInput.value;

  let netidValidates = false;

  if (netidValue.match(/^[a-zA-Z]{3}\d{3,4}$/)) {
    netidValidates = true;
    netidInput.closest("label").classList.remove("error");
    netidInput.closest("label").classList.add("validates");
  } else {
    netidValidates = false;
    netidInput.closest("label").classList.add("error");
    netidInput.closest("label").classList.remove("validates");
  }
  return netidValidates;
}
function validateName(i) {
  let nameInput = i;
  let nameValue = nameInput.value;

  let nameValidates = false;

  if (nameValue.length > 0) {
    nameValidates = true;
    nameInput.closest("label").classList.remove("error");
    nameInput.closest("label").classList.add("validates");
  } else {
    nameValidates = false;
    nameInput.closest("label").classList.add("error");
    nameInput.closest("label").classList.remove("validates");
  }
  return nameValidates;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector('form input[name="netid"]')
    .addEventListener("input", function (ev) {
      validateNetid(ev.target);
    });
  document
    .querySelector('form input[name="name"]')
    .addEventListener("input", function (ev) {
      validateName(ev.target);
    });
  document.querySelector("form").addEventListener("submit", function (ev) {
    let myForm = ev.target;

    let nameInput = myForm.querySelector('input[name="name"]');
    let netidInput = myForm.querySelector('input[name="netid"]');

    let nameValidates = validateName(nameInput);
    let netidValidates = validateNetid(netidInput);

    if (nameValidates && netidValidates) {
      return true;
    } else {
      ev.preventDefault();
      return false;
    }
  });
});
