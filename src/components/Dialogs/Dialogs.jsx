import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import styles from './Dialogs.module.css';

const Dialogs = (props) => {
  const dialogsData = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Alexey'},
    {id: 5, name: 'Masha'},
    {id: 6, name: 'Sveta'},
  ];
  const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'yo'},
    {id: 4, message: 'yo'},
    {id: 5, message: 'yo'},
  ];

  const dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  const messagesElements = messagesData.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
