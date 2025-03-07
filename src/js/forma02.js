// console.log('w');
console.log('w');



const form = document.querySelector(".feedback-form");
const localStorageKey = "goit-example-message";

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});

// import { isObject02 } from './forma';
// console.log(isObject02);

// console.log(a);
