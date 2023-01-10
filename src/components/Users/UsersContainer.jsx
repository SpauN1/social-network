import { connect } from 'react-redux';

import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
} from '../../redux/reducers/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },

    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },

    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
