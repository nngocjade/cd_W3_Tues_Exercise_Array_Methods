let startAmount = 1000;
let transactions = [
  { currency: "USD", amount: 12, type: "withdrawal" },
  { currency: "USD", amount: 104, type: "withdrawal" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 250, type: "withdrawal" },
  { currency: "USD", amount: 500, type: "deposit" },
  { currency: "USD", amount: 447, type: "withdrawal" },
  { currency: "USD", amount: 120, type: "deposit" },
  { currency: "USD", amount: 58, type: "withdrawal" },
  { currency: "USD", amount: 90, type: "withdrawal" },
];
const usdToVND = 23000;
let startingBalance = 1000;

//forEach doesnt return anything
//forEach is like the for loop, just loops through the element
// map(), will loop through each element of the array looking to returns something. If we dont defien any value to return in the return statement, it will return undefined.
transactions.forEach((item) => {
  if (item.type === "withdrawal") {
    startingBalance = startingBalance - item.amount;
    console.log(
      ` you withdrew ${item.amount}. the new balance is ${startingBalance}`
    );
  } else if (item.type === "deposit") {
    startingBalance = startingBalance + item.amount;
    console.log(
      ` you deposited ${item.amount}. the new balance is ${startingBalance}`
    );
  }
});
console.log("---------------------------------");
const balance = transactions.reduce((totalAvailableBalance, item) => {
  if (item.type === "withdrawal") {
    return totalAvailableBalance - item.amount;
  } else if (item.type === "deposit") {
    return totalAvailableBalance + item.amount;
  }
}, 1000);
console.log(`The total available balance is ${balance}`);
console.log("---------------------------------");
