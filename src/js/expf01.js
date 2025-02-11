console.log('a');
console.log('b');
console.log('c');
console.log(null || 2 || undefined);
console.log(0 ?? 2)

//////Патерн «Об'єкт параметрів»
const books = {
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
};

function toBook({title, isPublic}) { 
  console.log(title);
  console.log(isPublic);
}
toBook(books);//The Last Kingdom true

function toBook02(books) { 
  const{numberOfPages, rating} = books
  console.log(numberOfPages);
  console.log(rating);
}
toBook02(books);//736 8.38 