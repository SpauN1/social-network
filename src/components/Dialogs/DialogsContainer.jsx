import { connect } from 'react-redux';

import { updateNewMessageBodyActionCreator } from '../../redux/reducers/dialogsReducer';
import { sendMessageActionCreator } from '../../redux/reducers/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageActionCreator());
    },

    sendMessage: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
