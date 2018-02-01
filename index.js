var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObject = {};
 var itemPrice = Math.floor(Math.random() * 101);
 itemObject[item] = itemPrice;
 cart.push(itemObject);
 console.log (item + " has been added to your cart.");
 return cart;
}

function viewCart() {
  if (cart.length === 0){
      console.log("Your shopping cart is empty.");
    }else {
    const itemsAndPrices = [];
    const l = cart.length;
      for (let i = 0; i< l; i++){
        let itemAndPrice = cart[i];
        let item = Object.keys(itemAndPrice)[0];
        let price = itemAndPrice[item];
        itemsAndPrices.push(`${item} at \$${price}`);
      }
      console.log(itemsAndPrices)
      if (cart.length == 1){
          console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
      }else if (cart.length == 2){
          console.log(`In your cart, you have ${itemsAndPrices.join(' and ')}.`);
      }else if (cart.length >= 3){
        itemsAndPrices[l-1]= (`and ${itemsAndPrices[l-1]}`);
      console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
      }
    }
}

function total() {
  let itemPrices = 0;
  const l = cart.length;
  const itemsAndPrices = [];
  for (let i = 0; i < l; i++){
  let itemAndPrice = cart[i];
  let item = Object.keys(itemAndPrice)[0];
  let price = itemAndPrice[item];
  itemPrices = itemPrices + price;
  }
  return (itemPrices);
}

function removeFromCart(item) {
  const l = cart.length;
  for (let i = 0; i < l; i++){
    if (cart.[i]hasOwnProperty){
       cart = [...cart.slice(0,i),...cart.slice(i+1)];
    }
  }
  console.log("That item is not in your cart.");
  return (cart);
}


function placeOrder(cardNumber) {
  // write your code here
}
