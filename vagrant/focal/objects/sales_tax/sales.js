const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const sumSalesAndTax = function(salesArray, taxPercent) { //separate function outside of my main function to calculate total sales and the appropriate tax.
  let totalSales = 0;
  for (let number of salesArray) {
    totalSales += number; // Simple total for loop
  }
  return {totalSales, totalTaxes: totalSales * taxPercent}; // This returns a new property of totalSales that's equal to itself and totalTaxes which is equal to totalSales times the appropriate percentage
};

const calculateSalesTax = function(salesData, taxRates) {
  const results = {}; //Defining an empty results object to pass the results into

  for (let company of salesData) {
    const {totalSales, totalTaxes} = sumSalesAndTax(company.sales, taxRates[company.province]) // This is using a new concept to store the outputs from the sum function above and make them able to be referenced below
    if (results[company.name]) { //This is adding logic on what to do if there's an existing property for the company (i.e. you add the new sum to the existing value)
      results[company.name].totalSales += totalSales;
      results[company.name].totalTaxes += totalTaxes;
    }
    else { // This is the logic for what to do if the company isn't found as a property (i.e. it defines a new object for the new company).
      results[company.name] = {
        totalSales, // This is short form instead of writing "totalSales: totalSales"
        totalTaxes
      };
    }
  }
  return results;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));

/* Expected result:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
} */