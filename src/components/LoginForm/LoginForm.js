import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/reducer";
import image from "../../images/maonaroda.png";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <div className="container">
        <div className="divImagem">
          <img src={image} className="imagem" />
        </div>
        <form name="loginForm" onSubmit={this.onSubmit}>
          <div className="form-group-collection">
            <div className="form-group">
              <input
                type="email"
                name="email"
                onChange={e => this.setState({ email: e.target.value })}
                value={email}
                maxlength="50"
                placeholder="Email"
                className="input"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                onChange={e => this.setState({ password: e.target.value })}
                value={password}
                maxlength="15"
                placeholder="Senha"
                className="input"
              />
            </div>
          </div>

          <input type="submit" value="Login" className="submit" />
          <div className="message">
            {isLoginPending && <div>Verificando dados...</div>}
            {isLoginSuccess && <div>Logado.</div>}
            {loginError && <div>{loginError.message}</div>}
          </div>
        </form>
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: "",
      password: ""
    });
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
