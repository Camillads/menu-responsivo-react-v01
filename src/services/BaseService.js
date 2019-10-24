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

  get = async (url, dados = {}, settings = {}) => {
    try {
      return await axios
        .create(settings)
        .get(url, dados)
        .then(response => {
          return response;
        })
        .catch(error => {
          return {};
        });
    } catch (e) {
      return {};
    }
  };

  post = async (
    url,
    dados = {},
    settings = {
      headers: {}
    }
  ) => {
    try {
      return await axios
        .create(settings)
        .post(url, dados)
        .then(response => {
          return response;
        })
        .catch(error => {
          return {};
        });
    } catch (e) {
      return {};
    }
  };

  put = async (
    url,
    dados = {},
    settings = {
      headers: {}
    }
  ) => {
    try {
      return await axios
        .create(settings)
        .put(url, dados)
        .then(response => {
          return response;
        })
        .catch(error => {
          return {};
        });
    } catch (e) {
      return {};
    }
  };

  delete = async (
    url,
    dados = {},
    settings = {
      headers: {}
    }
  ) => {
    try {
      return await axios
        .create(settings)
        .delete(url, dados)
        .then(response => {
          return response;
        })
        .catch(error => {
          return {};
        });
    } catch (e) {
      return {};
    }
  };
}

export default BaseService;
