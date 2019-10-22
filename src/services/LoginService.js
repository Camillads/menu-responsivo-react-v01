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

      this.callUsersApi();

      this.callLoginApi(dados, error => {
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

  callLoginApi = (dados, callback) => {
    const url = this.montaURL(URL_BASE, "/api/login");
    setTimeout(async () => {
      const response = await this.post(dados, url);
      if (response.status === 200 && response.data === true) {
        return callback(null);
      } else {
        return callback(new Error("Dados inválidos"));
      }
    }, 1000);
  };

  callUsersApi = async () => {
    const url = this.montaURL(URL_BASE, "/api/users/2");
    const response = await this.get(url);
    console.log(response.data);
  };
}

export default new LoginService();
