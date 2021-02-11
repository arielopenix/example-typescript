import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';
import { Message, SEND_MESSAGE, DELETE_MESSAGE, ChatActionTypes, UPDATE_SESSION, SystemState, SystemActionTypes } from './types/chatTypes'

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp
    }
  }
}

export function updateSession(newSession: SystemState): SystemActionTypes {
    return {
      type: UPDATE_SESSION,
      payload: newSession
    }
}

export const thunkSendMessage = (
  message: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
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
