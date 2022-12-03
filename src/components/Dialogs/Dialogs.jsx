import { NavLink } from 'react-router-dom';

import style from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs__items}>
        <div className={style.dialog}>
          <NavLink to="/dialogs/1">Andrey</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/2">Sveta</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/3">Sasha</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/4">Viktor</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/5">Alexey</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/6">Masha</NavLink>
        </div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi</div>
        <div className={style.message}>How are you?</div>
        <div className={style.message}>yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
