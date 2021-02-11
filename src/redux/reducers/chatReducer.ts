import {
    ChatState,
    SystemState,
    ChatActionTypes,
    SEND_MESSAGE,
    DELETE_MESSAGE,
    SystemActionTypes,
    UPDATE_SESSION
  } from '../actions/types/chatTypes'
  
  const initialStateChat: ChatState = {
    messages: []
  }

  const initialStateSystem: SystemState = {
    loggedIn: false,
    session: '',
    userName: ''
  }
  
  export function chatReducer(
    state = initialStateChat,
    action: ChatActionTypes
  ): ChatState {
    switch (action.type) {
      case SEND_MESSAGE:
        return {
          messages: [...state.messages, action.payload]
        }
      case DELETE_MESSAGE:
        return {
          messages: state.messages.filter(
            message => message.timestamp !== action.meta.timestamp
          )
        }
      default:
        return state
    }
  }

  export function systemReducer(
    state = initialStateSystem,
    action: SystemActionTypes
  ): SystemState {
    switch (action.type) {
      case UPDATE_SESSION: {
        return {
          ...state,
          ...action.payload
        }
      }
      default:
        return state
    }
  }