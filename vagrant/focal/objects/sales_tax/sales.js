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

const sumSalesAndTax = function(salesArray, taxPercent) {
  let totalSales = 0;
  for (let number of salesArray) {
    totalSales += number;
  }
  return {totalSales, totalTaxes: totalSales * taxPercent};
};

const calculateSalesTax = function(salesData, taxRates) {
  const results = {};

  for (let company of salesData) {
    const {totalSales, totalTaxes} = sumSalesAndTax(company.sales, taxRates[company.province])
    if (results[company.name]) {
      results[company.name].totalSales += totalSales;
      results[company.name].totalTaxes += totalTaxes;
    }
    else {
      results[company.name] = {
        totalSales,
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