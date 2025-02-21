

import { common } from './common';
export { createMarkup };
const { KEY_FAVORITE, KEY_BASKET, list } = common;




function createMarkup(arr, list) {
   const markup = arr.map(({ id, img, name }) => `
         <li class="card js-card" data-id="${id}">
         <img src="${img}" alt="${name}" width="200" >
         <h2>${name}</h2>
         <p>id: <b>${id}</b></p>
         <p class="class_info"><a href="#" class="js-info">More information</a></p>
         </li>
         `).join('');
   
   list.innerHTML = markup;
}  

