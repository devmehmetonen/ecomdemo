import axios from "axios";

const configs = {
  apiUrl: import.meta.env.VITE_BASE_API_URL,
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
   
    if (error.response) {
      if (error.response.status === 404) {
        console.error("Hata");
      }else if (error.response.status === 500) {
        console.error("Hata");
      }
    }

    return Promise.reject(error);
  }
);

const url = (endpoint) => {
  return `${configs.apiUrl}${endpoint}`;
};

export async function post(endpoint, data) {
  const reqUrl = url(endpoint);
  return axios
    .post(reqUrl, data)
    .then((res) => res)
    .catch((error) => error.response);
}
export async function get(endpoint) {
  const reqUrl = url(endpoint);
  return await axios
    .get(reqUrl)
    .then((res) => res)
    .catch((error) => error.response);
}
export async function put(endpoint, data) {
  const reqUrl = url(endpoint);
  return await axios
    .put(reqUrl, data)
    .then((res) => res)
    .catch((error) => error.response);
}
export async function deletereq(endpoint, data) {
  const reqUrl = url(endpoint);
  return axios
    .delete(reqUrl, data)
    .then((res) => res)
    .catch((error) => error.response);
}
