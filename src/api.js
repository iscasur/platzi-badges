const BASE_URL = "http://localhost:3001";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min - +1)) + min;
const simluateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simluateNetworkLatency();

  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  badges: {
    list() {
      // throw new Error('500: Server Error');
      return callApi("/badges");
    },
    create(badge) {
      return callApi(`/badges`, {
        method: "POST",
        body: JSON.stringify(badge),
      });
    },
    read(bagdeId) {
      return callApi(`/badges/${bagdeId}`);
    },
    update(bagdeId, updates) {
      return callApi(`/badges/${bagdeId}`, {
        method: "PUT",
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado 'delete', pero esta es una keyword reservada de JS
    remore(bagdeId) {
      return callApi(`/badges/${bagdeId}`, {
        method: "DELETE",
      });
    },
  },
};

export default api;
