!function(){var t={};t=function t(n,o,e){function i(c,a){if(!o[c]){if(!n[c]){var s=void 0;if(!a&&s)return s(c,!0);if(r)return r(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var u=o[c]={exports:{}};n[c][0].call(u.exports,(function(t){return i(n[c][1][t]||t)}),u,u.exports,t,n,o,e)}return o[c].exports}for(var r=void 0,c=0;c<e.length;c++)i(e[c]);return i}({1:[function(t,n,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.create=o.visible=void 0;var e=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=document.createElement("div");return o.innerHTML=t.trim(),!0===n?o.children:o.firstChild},i=function(t,n){var o=t.children;return 1===o.length&&o[0].tagName===n},r=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};o.visible=r,o.create=function(t,n){var o=function(t,n){var o=e('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=o.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return r.appendChild(t)}));var c=i(r,"IMG"),a=i(r,"VIDEO"),s=i(r,"IFRAME");return!0===c&&o.classList.add("basicLightbox--img"),!0===a&&o.classList.add("basicLightbox--video"),!0===s&&o.classList.add("basicLightbox--iframe"),o}(t=function(t){var n="string"==typeof t,o=t instanceof HTMLElement==1;if(!1===n&&!1===o)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(e(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(n)),c=function(t){return!1!==n.onClose(a)&&function(t,n){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(t)||t.parentElement.removeChild(t),n()}),410),!0}(o,(function(){if("function"==typeof t)return t(a)}))};!0===n.closable&&o.addEventListener("click",(function(t){t.target===o&&c()}));var a={element:function(){return o},visible:function(){return r(o)},show:function(t){return!1!==n.onShow(a)&&function(t,n){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),n()}))}),10),!0}(o,(function(){if("function"==typeof t)return t(a)}))},close:c};return a}},{}]},{},[1])(1);var n={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",list:document.querySelector(".js-list"),ESCAPE:"Escape"},o=[{id:1,img:"https://static.dnipro-m.ua/cache/products/4878/catalog_origin_325618.jpg",name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:"https://static.dnipro-m.ua/cache/products/10774/catalog_origin_486919.jpg",name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:"https://static.dnipro-m.ua/cache/products/1248/catalog_origin_320661.jpg",name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:"https://static.dnipro-m.ua/cache/products/4406/catalog_origin_322116.jpg",name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:"https://static.dnipro-m.ua/cache/products/2300/catalog_origin_326088.jpg",name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:"https://static.dnipro-m.ua/cache/products/6566/catalog_origin_476205.jpg",name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:"https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg",name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:"https://static.dnipro-m.ua/cache/products/2741/catalog_origin_318327.jpg",name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"}];var e,i,r=n.KEY_FAVORITE,c=n.KEY_BASKET,a=n.ESCAPE,s=n.list;e=s,i=o.map((function(t){var n=t.id,o=t.img,e=t.name;return'\n         <li class="card js-card" data-id="'.concat(n,'">\n         <img src="').concat(o,'" alt="').concat(e,'" width="200" >\n         <h2>').concat(e,"</h2>\n         <p>id: <b>").concat(n,'</b></p>\n         <p class="class_info"><a href="#" class="js-info">More information</a></p>\n         </li>\n         ')})).join(""),e.innerHTML=i;document.querySelector(".js-search");var l,u,d=null!==(l=JSON.parse(localStorage.getItem(r)))&&void 0!==l?l:[],p=null!==(u=JSON.parse(localStorage.getItem(c)))&&void 0!==u?u:[];s.addEventListener("click",(function(n){if(n.preventDefault(),n.target.classList.contains("js-info")){console.log(n.target);var e=(m=n.target,g=m.closest(".js-card").dataset.id,h=Number(g),o.find((function(t){return t.id===h}))),i=e.id,a=e.img,s=e.name,l=e.price,u=e.description,f='\n         <li class="modal js-card" data-id="'.concat(i,'">\n               <img src="').concat(a,'" alt="').concat(s,'" width="300">\n               <h2 class="boo">').concat(s,"</h2>\n               <h3>").concat(l," грн</h3>\n               <p>").concat(u,"</p>\n               <p>id: <b>").concat(i,'</b></p>\n         <div>\n<button class="js-favorite">Add to favorite</button>\n<button class="js-remove">Remove from basket</button>\n<button class="js-basket">Add to basket</button>\n         </div>\n            <i class="close js-close">&#10006</i> \n         </li>\n         ');t.create(f,{onShow:function(t){t.element().querySelector(".js-favorite").onclick=function(t){var n=d.some((function(t){return t.id===e.id}));n||(console.log(n),d.push(e),localStorage.setItem(r,JSON.stringify(d)),console.log(d))},t.element().querySelector(".js-remove").onclick=function(t){console.log("remove");var n=JSON.parse(localStorage.getItem(r));if(console.log(n),console.log(e.id),n){var o=n.filter((function(t){return t.id!==e.id}));console.log(o),localStorage.setItem(r,JSON.stringify(o))}else console.log("no")},t.element().querySelector(".js-basket").onclick=function(t){p.push(e),localStorage.setItem(c,JSON.stringify(p))},t.element().querySelector(".js-close").onclick=function(n){console.log("close"),t.close()}},onClose:function(t){}}).show()}var m,g,h})),window.addEventListener("keydown",(function(t){t.code===a&&console.log("Escape")}))}();
//# sourceMappingURL=index.b4391aee.js.map
