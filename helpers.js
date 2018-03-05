const Table = require('cli-table');

const toTable = ({ from, to, coins, investmentOfEach, totalInvestment, totalReturn, returnRate }) => {
  const table = new Table({
    head: [
      '#',
      'Coin',
      `${from}`,
      'Profit/Loss Rate',
      `${to}`,
      '#'
    ],
  });

  coins.forEach(({ symbol, name, lastIndex, lastPrice, lastMarketCap, index, price, marketCap }) => {
    table.push([
      lastIndex,
      `${symbol} - ${name}`,
      lastPrice,
      price ? Math.round(price / lastPrice) : 'N/A',
      price ? price : 'N/A',
      index ? index : 'N/A',
    ]);
  });
  
  table.push([
    '',
    'Total Investment',
    totalInvestment,
    Math.round(returnRate),
    totalReturn,
    '',
  ]);

  return table.toString();
}

module.exports = {
  toTable,
};
