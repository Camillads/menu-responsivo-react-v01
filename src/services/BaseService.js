import axios from "axios";
import qs from "qs";

export const montaURLParametros = params => {
  return qs.stringify({ ...params });
};

export const montaFiltro = tempFilter => {
  const filtro = montaURLParametros({
    filter: JSON.stringify(tempFilter)
  });
  return filtro;
};

export const montaCampos = campos => {
  const camposRetorno = {};
  campos.forEach(campo => {
    camposRetorno[campo] = true;
  });
  return camposRetorno;
};

export const montaURL = (urlBase, complementoURL = "") => {
  return `${urlBase}${complementoURL}`;
};

export const get = (url, settings = {}) => {
  try {
    return axios
      .create(settings)
      .get(url)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
        return {};
      });
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const post = (dados, url, settings = {}) => {
  try {
    return axios
      .create(settings)
      .post(url, dados)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
        return {};
      });
  } catch (e) {
    console.log(e);
    return {};
  }
};
