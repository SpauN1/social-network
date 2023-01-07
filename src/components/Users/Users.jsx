import styles from './Users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://krasivosti.pro/uploads/posts/2021-10/1634681353_26-krasivosti-pro-p-svinki-zhivotnie-krasivo-foto-30.jpg',
        followed: false,
        fullName: 'Andrei',
        status: 'I am a boss',
        location: { city: 'Vitebsk', country: 'Belarus' },
      },
      {
        id: 2,
        photoUrl:
          'https://krasivosti.pro/uploads/posts/2021-10/1634681353_26-krasivosti-pro-p-svinki-zhivotnie-krasivo-foto-30.jpg',
        followed: true,
        fullName: 'Sasha',
        status: 'I am a boss too',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 3,
        photoUrl:
          'https://krasivosti.pro/uploads/posts/2021-10/1634681353_26-krasivosti-pro-p-svinki-zhivotnie-krasivo-foto-30.jpg',
        followed: false,
        fullName: 'Alexei',
        status: 'I am a boss too',
        location: { city: 'Minsk', country: 'Belarus' },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((users) => (
        <div key={users.id}>
          <span>
            <div>
              <img
                className={styles.userPhoto}
                src={users.photoUrl}
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
              <div>{users.fullName}</div>
              <div>{users.status}</div>
            </span>
            <span>
              <div>{users.location.country}</div>
              <div>{users.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
