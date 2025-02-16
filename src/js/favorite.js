import { common } from './common';
import { createMarkup } from './markUp';

const { KEY_FAVORITE } = common;

const allFavorites = JSON.parse(localStorage.getItem(KEY_FAVORITE));
console.log(allFavorites);

if (allFavorites) {
    createMarkup(allFavorites);
}
else {
    
}