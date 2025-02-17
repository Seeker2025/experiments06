import { common } from './common';
import { createMarkup } from './markUp';


const { KEY_FAVORITE, list } = common;

const allFavorites = JSON.parse(localStorage.getItem(KEY_FAVORITE));
console.log(allFavorites);

if (allFavorites) {
    createMarkup(allFavorites, list);
}
else {
    const markup = `
    <li >
       <h2>There is nothing here</h2>
       <img src="https://kurtrees.wordpress.com/wp-content/uploads/2013/04/black-and-white-empty-empty-heart-heart-favim-com-501667.jpg" alt="empty">
    `
    list.innerHTML = markup;    
}
