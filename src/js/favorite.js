import { common } from './common';
import { createMarkup } from './markUp';
// import { img } from '../img/logo.png';

const { KEY_FAVORITE, KEY_BASKET, list } = common;

const allFavorites = JSON.parse(localStorage.getItem(KEY_FAVORITE));
console.log(!!(allFavorites));
console.log(allFavorites.length);

if (allFavorites.length) {
    createMarkup(allFavorites, list);
}
else {
    const markup = `
    <li >
       <h2>There is nothing here</h2>
              
    </li>
    `
    list.innerHTML = markup;    
}

