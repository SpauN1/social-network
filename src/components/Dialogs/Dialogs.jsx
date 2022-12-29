import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyActionCreator } from '../../redux/reducers/dialogsReducer';
import { sendMessageActionCreator } from '../../redux/reducers/dialogsReducer';

import styles from './Dialogs.module.css';

const Dialogs = (props) => {
  const state = props.store.getState().dialogsPage;

  const dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = state.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Введите свое сообщение"
              name="textarea"
              id=""
              cols="40"
              rows="4"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
