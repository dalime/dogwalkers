import React, { Component } from 'react';
import { login } from '../actions/OwnerActions'
import { connect } from 'react-redux'

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      password: this.props.password
    }
    this._onInputChange = this._onInputChange.bind(this);
    this._submit = this._submit.bind(this);
  }

  _onInputChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;

    this.setState({
      [key]: value
    });
  }

  _submit(e) {
    e.preventDefault();

    this.props.login(this.state);
  }

  render() {
    let { username, password } = this.state;

    return (
      <div>
        <form onSubmit={this._submit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" required data-statekey='username' onChange={this._onInputChange}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" required data-statekey='password' onChange={this._onInputChange}/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.owner.username,
  password: state.owner.password
})

const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(login(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
