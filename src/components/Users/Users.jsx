import { Component } from 'react';
import axios from 'axios';

import userPhoto from '../../assets/images/user.png';

import styles from './Users.module.css';

class Users extends Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((users) => (
          <div key={users.id}>
            <span>
              <div>
                <img
                  className={styles.userPhoto}
                  src={
                    users.photos.small != null ? users.photos.small : userPhoto
                  }
                  alt="avatar"
                />
              </div>
              <div>
                {users.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(users.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(users.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{users.Name}</div>
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
  }
}

export default Users;
