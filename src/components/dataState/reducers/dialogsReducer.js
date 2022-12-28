const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
  if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
    state.newMessageBody = action.body;
  } else if (action.type === 'SEND-MESSAGE') {
    const body = state.newMessageBody;
    state.newMessageBody = '';
    state.messagesData.push({ id: 6, message: body });
  }

  return state;
};

export default dialogsReducer
