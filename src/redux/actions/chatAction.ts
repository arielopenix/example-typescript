import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';
import { Message, ChatActionType, SystemState, SystemActionTypes, ChatActionTypes } from './types/chatTypes';

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: ChatActionType.SEND_MESSAGE,
    payload: newMessage
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: ChatActionType.DELETE_MESSAGE,
    meta: {
      timestamp
    }
  }
}

export function updateSession(newSession: SystemState): SystemActionTypes {
    return {
      type: ChatActionType.UPDATE_SESSION,
      payload: newSession
    }
}

export const thunkSendMessage = (
  message: string
): ThunkAction<void, RootState, unknown, Action<any>> => async (
  dispatch
) => {
  const asyncResp = await exampleAPI();
  dispatch(
    sendMessage({
      user: asyncResp,
      message,
      timestamp: new Date().getTime(),
    })
  );
};

function exampleAPI() {
  return Promise.resolve("Async Chat Bot");
}
