import BaseService from "./BaseService";

import {
  URL_BASE,
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  TOKEN
} from "../constants/constants";

class LoginService extends BaseService {
  login(dados) {
    return async dispatch => {
      dispatch(this.setLoginPending(true));
      dispatch(this.setLoginSuccess(false));
      dispatch(this.setLoginError(null));

      await this.getUsersApi();

      await this.makeLoginApi(dados, error => {
        dispatch(this.setLoginPending(false));
        if (!error) {
          dispatch(this.setLoginSuccess(true));
        } else {
          dispatch(this.setLoginError(error));
        }
      });
    };
  }

  setLoginPending(isLoginPending) {
    return {
      type: SET_LOGIN_PENDING,
      isLoginPending
    };
  }

  setLoginSuccess(isLoginSuccess) {
    return {
      type: SET_LOGIN_SUCCESS,
      isLoginSuccess
    };
  }

  setLoginError(loginError) {
    return {
      type: SET_LOGIN_ERROR,
      loginError
    };
  }

  async makeLoginApi(dados, callback) {
    const url = this.montaURL(URL_BASE, "/api/login");
    const response = await this.post(url, dados);
    console.log(response);
    if (response.status === 200 && response.data.token) {
      return callback(null);
    } else {
      return callback(new Error("Dados inválidos"));
    }
  }

  async getUsersApi() {
    const url =
      "http://one-on-ones-dti.herokuapp.com/api/data_tribe/Andrômeda - MRV Comercial";
    const response = await this.get(
      url,
      {},
      {
        headers: {
          Authorization: "Bearer " + TOKEN
        }
      }
    );
    console.log(response);
  }

  async putUsersApi(dados) {
    const url = this.montaURL(URL_BASE, "/api/users/2");
    const response = await this.put(url, dados);
    console.log(response);
  }

  async deleteUsersApi() {
    const url = this.montaURL(URL_BASE, "/api/users/2");
    const response = await this.delete(url);
    console.log(response);
  }
}

export default new LoginService();
