var t={};t=function t(e,o,n){function i(c,s){if(!o[c]){if(!e[c]){var a=void 0;if(!s&&a)return a(c,!0);if(r)return r(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var d=o[c]={exports:{}};e[c][0].call(d.exports,(function(t){return i(e[c][1][t]||t)}),d,d.exports,t,e,o,n)}return o[c].exports}for(var r=void 0,c=0;c<n.length;c++)i(n[c]);return i}({1:[function(t,e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.create=o.visible=void 0;var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=document.createElement("div");return o.innerHTML=t.trim(),!0===e?o.children:o.firstChild},i=function(t,e){var o=t.children;return 1===o.length&&o[0].tagName===e},r=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};o.visible=r,o.create=function(t,e){var o=function(t,e){var o=n('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=o.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return r.appendChild(t)}));var c=i(r,"IMG"),s=i(r,"VIDEO"),a=i(r,"IFRAME");return!0===c&&o.classList.add("basicLightbox--img"),!0===s&&o.classList.add("basicLightbox--video"),!0===a&&o.classList.add("basicLightbox--iframe"),o}(t=function(t){var e="string"==typeof t,o=t instanceof HTMLElement==1;if(!1===e&&!1===o)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(n(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),c=function(t){return!1!==e.onClose(s)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(t)||t.parentElement.removeChild(t),e()}),410),!0}(o,(function(){if("function"==typeof t)return t(s)}))};!0===e.closable&&o.addEventListener("click",(function(t){t.target===o&&c()}));var s={element:function(){return o},visible:function(){return r(o)},show:function(t){return!1!==e.onShow(s)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(o,(function(){if("function"==typeof t)return t(s)}))},close:c};return s}},{}]},{},[1])(1);const e={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",list:document.querySelector(".js-list"),ESCAPE:"Escape"},o=[{id:1,img:"https://static.dnipro-m.ua/cache/products/4878/catalog_origin_325618.jpg",name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:"https://static.dnipro-m.ua/cache/products/10774/catalog_origin_486919.jpg",name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:"https://static.dnipro-m.ua/cache/products/1248/catalog_origin_320661.jpg",name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:"https://static.dnipro-m.ua/cache/products/4406/catalog_origin_322116.jpg",name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:"https://static.dnipro-m.ua/cache/products/2300/catalog_origin_326088.jpg",name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:"https://static.dnipro-m.ua/cache/products/6566/catalog_origin_476205.jpg",name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:"https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg",name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:"https://static.dnipro-m.ua/cache/products/2741/catalog_origin_318327.jpg",name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"}],{KEY_FAVORITE:n,KEY_BASKET:i,list:r}=e;const{KEY_FAVORITE:c,KEY_BASKET:s,ESCAPE:a,list:l}=e;!function(t,e){const o=t.map((({id:t,img:e,name:o})=>`\n         <li class="card js-card" data-id="${t}">\n         <img src="${e}" alt="${o}" width="200" >\n         <h2>${o}</h2>\n         <p>id: <b>${t}</b></p>\n         <p class="class_info"><a href="#" class="js-info">More information</a></p>\n         </li>\n         `)).join("");e.innerHTML=o}(o,l);document.querySelector(".js-search");const d=JSON.parse(localStorage.getItem(c))??[],u=JSON.parse(localStorage.getItem(s))??[];l.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-info")){console.log(e.target);const n=function(t){const{id:e}=t.closest(".js-card").dataset,n=Number(e);return o.find((({id:t})=>t===n))}(e.target),{id:i,img:r,name:a,price:l,description:p}=n,m=`\n         <li class="modal js-card" data-id="${i}">\n               <img src="${r}" alt="${a}" width="300">\n               <h2 class="boo">${a}</h2>\n               <h3>${l} грн</h3>\n               <p>${p}</p>\n               <p>id: <b>${i}</b></p>\n         <div>\n<button class="js-favorite">Add to favorite</button>\n<button class="js-remove">Remove from basket</button>\n<button class="js-basket">Add to basket</button>\n         </div>\n            <i class="close js-close">&#10006</i> \n         </li>\n         `;t.create(m,{onShow:t=>{t.element().querySelector(".js-favorite").onclick=t=>{const e=d.some((({id:t})=>t===n.id));e||(console.log(e),d.push(n),localStorage.setItem(c,JSON.stringify(d)),console.log(d))},t.element().querySelector(".js-remove").onclick=t=>{console.log("remove");const e=JSON.parse(localStorage.getItem(c));if(console.log(e),console.log(n.id),e){const t=e.filter((({id:t})=>t!==n.id));console.log(t),localStorage.setItem(c,JSON.stringify(t))}else console.log("no")},t.element().querySelector(".js-basket").onclick=t=>{u.push(n),localStorage.setItem(s,JSON.stringify(u))},t.element().querySelector(".js-close").onclick=e=>{console.log("close"),t.close()}},onClose:t=>{}}).show()}})),window.addEventListener("keydown",(function(t){t.code===a&&console.log("Escape")}));
//# sourceMappingURL=index.c65959a1.js.map
