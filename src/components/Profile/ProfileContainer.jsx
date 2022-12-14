import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Profile from './Profile';
import { setUserProfile } from '../../redux/reducers/profileReducer';

class ProfileContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
