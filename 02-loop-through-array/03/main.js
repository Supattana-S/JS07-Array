const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

const calcNetPrice = (arr) => {
  let summary = [{}, {}, {}];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].discount) {
      summary[i]["netPrice"] = arr[i].price * (1 - arr[i].discount);
    } else {
      summary[i]["netPrice"] = arr[i].price;
    }
  }
  return summary;
};

let netPriceSales = calcNetPrice(sales);

console.log(netPriceSales);
