const n={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",list:document.querySelector(".js-list"),ESCAPE:"Escape"},{KEY_FAVORITE:s,KEY_BASKET:e,list:i}=n;const{KEY_FAVORITE:l,KEY_BASKET:o,list:t}=n,a=JSON.parse(localStorage.getItem(l));if(console.log(!!a),console.log(a.length),a.length)!function(n,s){const e=n.map((({id:n,img:s,name:e})=>`\n         <li class="card js-card" data-id="${n}">\n         <img src="${s}" alt="${e}" width="200" >\n         <h2>${e}</h2>\n         <p>id: <b>${n}</b></p>\n         <p class="class_info"><a href="#" class="js-info">More information</a></p>\n         </li>\n         `)).join("");s.innerHTML=e}(a,t);else{const n="\n    <li >\n       <h2>There is nothing here</h2>\n              \n    </li>\n    ";t.innerHTML=n}
//# sourceMappingURL=favorite.53f3e6f6.js.map
