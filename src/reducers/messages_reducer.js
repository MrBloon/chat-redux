import { FETCH_MESSAGES, MESSAGE_POSTED, CHANNEL_SELECTED } from '../actions';


const messagesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch(action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case MESSAGE_POSTED:
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    case CHANNEL_SELECTED:
      return [];
    default:
      return state;
  }

};

export default messagesReducer;
