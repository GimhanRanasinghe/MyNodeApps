//object property short hand

const name = "Gimhan";
const userAge = 22;

const user = {
  name,
  age: userAge,
  location: "Sri Lanka",
};

console.log(user);

//object destructuring

const product = {
  label: "Book",
  price: 3,
  stock: 201,
  rating: 4.2,
};

// const label = product.label
// const price = product.price

// const { label: product_label, price, rating = 5 } = product;

// console.log(product_label);
// console.log(price);
// console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("oder", { label, stock });
