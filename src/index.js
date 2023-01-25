// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span")
  let quantity = product.querySelector(".quantity input")
  let priceValue = price.innerText
  let quantityValue = quantity.value
  //console.log(priceValue)
  //console.log(quantityValue)
  let subtotalPrice = priceValue * quantityValue
  product.querySelector(".subtotal span").innerText = subtotalPrice
  console.log(subtotalPrice)
  return subtotalPrice
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let callingTheOther = document.getElementsByClassName("product")
  let total = 0;
  for (let i = 0; i < callingTheOther.length; i++){
    total += updateSubtotal(callingTheOther[i])
  } 
 
  //

  // ITERATION 3

  let totalDeTotal = document.querySelector("#total-value span")
  totalDeTotal.innerText = total
  console.log(total)
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let removeButtons = document.querySelectorAll(".btn btn-remove")
  removeButtons.forEach((eachBtn) => {
    eachBtn.addEventListener("click", removeProduct)
  })
  //... your code goes here
});
