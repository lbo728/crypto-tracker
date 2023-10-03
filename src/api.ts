const BASE_URL = `https://api.coinpaprika.com/v1`;
const BASE_URL2 = `https://ohlcv-api.nomadcoders.workers.dev`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  return fetch(`${BASE_URL2}?coinId=${coinId}`).then((response) =>
    response.json()
  );
}

// export function fetchCoins() {
//   return fetch(
//     `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1  `
//   ).then((response) => response.json());
// }

// export function fetchCoinInfo(coinId: string) {
//   return fetch(
//     `https://api.coingecko.com/api/v3/coins/${coinId}?localization=ko`
//   ).then((response) => response.json());
// }

// export function fetchCoinTickers(coinId: string) {
//   return fetch(
//     `https://api.coingecko.com/api/v3/coins/${coinId}?/tickers`
//   ).then((response) => response.json());
// }

// export function fetchCoinHistory(coinId: string) {
//   return fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/history`).then(
//     (response) => response.json()
//   );
// }
