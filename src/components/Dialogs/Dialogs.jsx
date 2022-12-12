import { NavLink } from 'react-router-dom';

import style from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={style.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs__items}>
        <DialogItem name="Andrey" id="1" />
        <DialogItem name="Sasha" id="2" />
        <DialogItem name="Viktor" id="3" />
        <DialogItem name="Alexey" id="4" />
        <DialogItem name="Masha" id="5" />
        <DialogItem name="Sveta" id="6" />
      </div>
      <div className={style.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="yo" />
        <Message message="yo" />
        <Message message="yo" />
      </div>
    </div>
  );
};

export default Dialogs;
