import { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { getAuthUserData } from '../../redux/reducers/auth-reducer';

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
