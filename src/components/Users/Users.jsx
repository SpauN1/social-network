import { NavLink } from 'react-router-dom';
import axios from 'axios';

import userPhoto from '../../assets/images/user.png';
import styles from './Users.module.css';

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(page);
              }}
              className={props.currentPage === page && styles.selectedPage}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((users) => (
        <div key={users.id}>
          <span>
            <div>
              <NavLink to={'/profile' + users.id}>
                <img
                  className={styles.userPhoto}
                  src={
                    users.photos.small != null ? users.photos.small : userPhoto
                  }
                  alt="avatar"
                />
              </NavLink>
            </div>
            <div>
              {users.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === users.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, users.id);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${users.id}`,
                        {
                          witchCredentials: true,
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'b50ff112-96c4-431a-ab15-f4985de0e9b7',
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(users.id);
                        }
                        props.toggleFollowingProgress(false, users.id);
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === users.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, users.id);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${users.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'b50ff112-96c4-431a-ab15-f4985de0e9b7',
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(users.id);
                        }
                        props.toggleFollowingProgress(false, users.id);
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{users.name}</div>
              <div>{users.status}</div>
            </span>
            <span>
              <div>{'users.location.country'}</div>
              <div>{'users.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
