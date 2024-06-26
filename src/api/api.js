import axios from 'axios';

const API_KEY = 'cpturi1r01qnga5invbgcpturi1r01qnga5invc0'; // Replace with your Finnhub API key

export const getStockData = async (symbols) => {
  const requests = symbols.map(symbol =>
    axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`)
      .then(response => ({
        symbol,
        ...response.data,
      }))
      .catch(error => {
        console.error(`Error fetching data for ${symbol}:`, error);
        return null;
      })
  );
  const results = await Promise.all(requests);
  return results.filter(result => result !== null);
};
