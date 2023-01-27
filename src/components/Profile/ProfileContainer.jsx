import { Component } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Profile from './Profile';
import { getUserProfile } from '../../redux/reducers/profileReducer';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;

    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { getUserProfile })(
  withRouter(ProfileContainer)
);
