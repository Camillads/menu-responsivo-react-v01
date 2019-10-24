import BaseService from "./BaseService";

import {
  URL_BASE,
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR
} from "../constants/constants";

class LoginService extends BaseService {
  login(dados) {
    return dispatch => {
      dispatch(this.setLoginPending(true));
      dispatch(this.setLoginSuccess(false));
      dispatch(this.setLoginError(null));

      this.getUsersApi();
      this.putUsersApi();
      this.deleteUsersApi();

      this.makeLoginApi(dados, error => {
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

  makeLoginApi = (dados, callback) => {
    const url = this.montaURL(URL_BASE, "/api/login");
    setTimeout(async () => {
      const response = await this.post(url, dados);
      if (response.status === 200 && response.data.token) {
        return callback(null);
      } else {
        return callback(new Error("Dados inválidos"));
      }
    }, 1000);
  };

  getUsersApi = async () => {
    const url = this.montaURL(URL_BASE, "/api/users?page=2");
    const response = await this.get(url);
    console.log(response.data);
  };

  putUsersApi = async () => {
    const dados = {
      name: "morpheus",
      job: "zion resident"
    };
    const url = this.montaURL(URL_BASE, "/api/users/2");
    const response = await this.put(url, dados);
    console.log(response);
  };

  deleteUsersApi = async () => {
    const url = this.montaURL(URL_BASE, "/api/users/2");
    const response = await this.delete(url);
    console.log(response);
  };
}

export default new LoginService();
