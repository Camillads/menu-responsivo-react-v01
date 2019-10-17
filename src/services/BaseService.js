import axios from "axios";
import qs from "qs";

class BaseService {
  montaURLParametros = params => {
    return qs.stringify({ ...params });
  };

  montaFiltro = tempFilter => {
    const filtro = this.montaURLParametros({
      filter: JSON.stringify(tempFilter)
    });
    return filtro;
  };

  montaCampos = campos => {
    const camposRetorno = {};
    campos.forEach(campo => {
      camposRetorno[campo] = true;
    });
    return camposRetorno;
  };

  montaURL = (urlBase, complementoURL = "") => {
    return `${urlBase}${complementoURL}`;
  };

  get = async (url, settings = {}) => {
    try {
      return await axios
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

  post = async (dados, url, settings = {}) => {
    try {
      return await axios
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
}

export default BaseService;
