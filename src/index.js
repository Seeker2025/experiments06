import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";

import { common } from './js/common';
import { instruments } from './js/inst';
import { createMarkup } from './js/markUp';


export { onClick };

const { KEY_FAVORITE, KEY_BASKET, ESCAPE, list } = common;
createMarkup(instruments, list);

const search = document.querySelector('.js-search');
// console.log(search);
// console.log(list);
const favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE))??[];
const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET))??[];

list.addEventListener('click', onClick);

function onClick(event) {
   event.preventDefault();
   // console.log(event.target)
   if (event.target.classList.contains('js-info')) {
      // const { id } = event.target.closest('.js-card').dataset;
      // console.log('This is id:', id);
      console.log(event.target)
      const product = findProduct(event.target);
      // console.log(product.id);
      const { id, img, name, price, description } = product;
      // modalka
      const markup = `
         <li class="modal js-card" data-id="${id}">
               <img src="${img}" alt="${name}" width="300">
               <h2 class="boo">${name}</h2>
               <h3>${price} грн</h3>
               <p>${description}</p>
               <p>id: <b>${id}</b></p>
         <div>
<button class="js-favorite">Add to favorite</button>
<button class="js-remove">Remove from basket</button>
<button class="js-basket">Add to basket</button>
         </div>
            <i class="close js-close">&#10006</i> 
         </li>
         `
         basicLightbox.create(markup, {
         onShow: (instance) => {
            instance.element().querySelector('.js-favorite').onclick = (event) => {
               // console.log(event.target);
               const inStorage = favoriteArr.some(({ id }) => id === product.id);
               if (inStorage) { 
                  return;
               }
               console.log(inStorage)
               favoriteArr.push(product);
               localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
               console.log(favoriteArr);
               }
////// remove item               
               instance.element().querySelector('.js-remove').onclick = (event) => {
                  console.log('remove');
                  const listInstr = JSON.parse(localStorage.getItem(KEY_FAVORITE));
                  console.log(listInstr);
                  console.log(product.id);
                  // listInstr.some(({ id }) => id === product.id);
   if (listInstr) {
      const newArr01 = listInstr.filter(({ id }) => id !== product.id);
      console.log(newArr01);
      localStorage.setItem(KEY_FAVORITE, JSON.stringify(newArr01));
   }
                  else {
                     console.log('no');
                  }
               }

            instance.element().querySelector('.js-basket').onclick = (e) => {
               basketArr.push(product);
               localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
               }
             instance.element().querySelector('.js-close').onclick = (e) => {
               console.log('close');
               instance.close();
               }   
                   
            },
            onClose: (instance) => {
            
            }
        
      }).show();
   }
} 

// const el = document.querySelector('.js-card');
// console.log(el.dataset.id);
// console.log(el);

function findProduct(elem) {
   const { id } = elem.closest('.js-card').dataset;
   const productId = Number(id);
   return instruments.find(({ id }) => id === productId);
}

//////Closing by pressing escape
window.addEventListener('keydown', keyEsc);
function keyEsc(event) {
   if (event.code === ESCAPE) {
      console.log('Escape'); 
      };
   }

// const btnOne = document.querySelector('.js_btn_01');
// console.log(btnOne);
// console.log(btnOne.closest('.js-card').dataset.id);
// const { id } = btnOne.closest('.js-card').dataset;
// console.log(id);

// console.log(findProduct(btnOne).id);

// const allFavorites = JSON.parse(localStorage.getItem(KEY_FAVORITE));
// console.log(allFavorites);


// console.log('a');

// const arr01 = instruments.filter(({ id }) => id !== 1);
// console.log(arr01);

// instruments.splice(0, 1);
// console.log(instruments);






