import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";

import { common } from './js/common';
import { instruments } from './js/inst';

// console.log('Hello, world!');
console.log(common);
console.log(instruments);




// console.log(instruments);

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
// console.log(search);
// console.log(list);
const favoriteArr = [];
const basketArr = [];


function createMarkup(arr) {
   const markup = arr.map(({ id, img, name}) => `<li class="card js-card" data-id="${id}">
        <img src="${img}" alt="${name}" width="200" >
        <h2>${name}</h2>
      <p class="class_info"><a href="#" class="js-info">More information</a></p>
            <div>
<button>Add to favorite</button>
<button>Add to basket</button>
            </div>
        </li>
  
 <li>`).join('');
   
   list.innerHTML = markup;
}  

list.addEventListener('click', onClick)

function onClick(event) {
   event.preventDefault();
   // console.log(event.target)
   if (event.target.classList.contains('js-info')) {
      // const { id } = event.target.closest('.js-card').dataset;
      // console.log('This is id:', id);
      console.log(event.target)
      const product = findProduct(event.target);
      // console.log(product);
      const { img, name, price, description } = product;
// modalka
      const instance = basicLightbox.create(`
         <div class="box">
               <img src="${img}" alt="${name}" width="400">
               <h2 class="boo">${name}</h2>
               <h3>${price} грн</h3>
               <p>${description}</p>
               <div>
<button class="js-favorite">Add to favorite</button>
<button class="js-basket">Add to basket</button>
<div >Close</div>
               </div>
         </div>

         `);
      instance.show();
   }

   if (event.target.classList.contains('js-favorite')) {
     console.log('dddds');
     console.log(event.target);

   }
   if (event.target.classList.contains('js-basket')) {
      console.log(event.target);
      const product = findProduct(event.target);
      basketArr.push(product);
      localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
   }
   
} 
createMarkup(instruments);


 
function findProduct(elem) {
   const { id } = elem.closest('.js-card').dataset;
   const productId = Number(id);
   return instruments.find(({ id }) => id === productId);
}

console.log(favoriteArr);

