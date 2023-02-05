const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
  dialogsData: [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Sasha' },
    { id: 3, name: 'Viktor' },
    { id: 4, name: 'Alexey' },
    { id: 5, name: 'Masha' },
    { id: 6, name: 'Sveta' },
  ],
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'yo' },
    { id: 4, message: 'yo' },
    { id: 5, message: 'yo' },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case SEND_MESSAGE:
      const body = state.newMessageBody;

      return {
        ...state,
        newMessageBody: '',
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
