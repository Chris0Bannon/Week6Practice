$( document ).ready(readyNow);

const budget = 25000;
let purchases = [];

function addPurchase(){
console.log('in addPurchase');
// get user input create a new object
let newPurchase = {
  name: $('#purchaseNameIn').val(),
  price: $('#purchasePriceIn').val(),
}
// push the new purchase into the array
purchases.push(newPurchase);
// empty the inputs
$('#purchaseNameIn').val('');
$('#purchasePriceIn').val('');
//calculate remainingBudget
calculateRemainingBudget()
} // end addPurchase

function calculateRemainingBudget(){
  console.log('in calculateRemainingBudget');
  // loop through the purchases array
  let totalPrices = 0;
  for (var i = 0; i < purchases.length; i++) {
    // for each purchase add up total of all prices
    totalPrices += Number(purchases[i].price);
  } // end for loop
  console.log('totalPrices', totalPrices );
  // subtract total prices from the budget remainingBudget
const remainingBudget = budget - totalPrices;
  //display remainingBudget
  let el = $('#remainingBudgetOut');
  el.empty();
  el.append(remainingBudget);
  //update DOM
  displayPurchases();
}// end calculateRemainingBudget

function displayPurchases(){
  console.log('displayPurchases');
  //target our ouput by its id
  let el = $('#PurchasesOut');
  //empty
  el.empty();
  //loop through purchases array
  for (purchase of purchases) {
    // for each purchase, create a list item
    el.append('<li>' + purchase.name + ': $' + purchase.price + '</li>');

  }// end for

}// end displayPurchases

function readyNow(){
  //Display the budget
  // target budgetOut by ID
  let el = $('#budgetOut');
  el.empty();
  el.append( budget);
  // handle click event
  $('#addPurchaseButton').on( 'click',addPurchase );
  //init Display
  calculateRemainingBudget();
}// end readyNow
