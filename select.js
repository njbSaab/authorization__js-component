"use strict"

const elSelectCustom = document.getElementsByClassName("js-selectCustom")[0];
const elSelectCustomValue = elSelectCustom.children[0];
const elSelectCustomOptions = elSelectCustom.children[1];
const defaultLabel = elSelectCustomValue.getAttribute("data-value");


// Listen for each custom option click
Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
  elOption.addEventListener("click", (e) => {
    // Update custom select text too
    elSelectCustomValue.textContent = e.target.textContent;
    // Close select
    elSelectCustom.classList.remove("isActive");
  });
});

// Toggle select on label click
elSelectCustomValue.addEventListener("click", (e) => {
  elSelectCustom.classList.toggle("isActive");
});

// close the custom select when clicking outside.
document.addEventListener("click", (e) => {
  const didClickedOutside = !elSelectCustom.contains(event.target);
  if (didClickedOutside) {
    elSelectCustom.classList.remove("isActive");
  }
});