import React, { Component } from "react";
import { connect } from "react-redux";
import LoginService from "../../redux/LoginService";
import image from "../../images/maonaroda.png";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    //Terminou de montar o componente
  }

  componentDidUpdate() {
    //Teve update em algum componente da pagina
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
                type="text"
                name="email"
                onChange={e => this.setState({ email: e.target.value })}
                value={email}
                maxLength="50"
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
                maxLength="15"
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
    const dados = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(dados);
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
    login: dados => dispatch(LoginService.login(dados))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
