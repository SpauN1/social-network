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
                    props.unfollow(users.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(users.id);
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
