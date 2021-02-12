export enum ChatActionType {
  SEND_MESSAGE, 
  DELETE_MESSAGE,
  UPDATE_SESSION
}

export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
}

export interface SystemState {
  loggedIn: boolean;
  session: string;
  userName: string;
}

interface SendMessageAction {
  type: ChatActionType.SEND_MESSAGE;
  payload: Message;
}

interface DeleteMessageAction {
  type: ChatActionType.DELETE_MESSAGE;
  meta: {
    timestamp: number;
  };
}

interface UpdateSessionAction {
  type: ChatActionType.UPDATE_SESSION
  payload: SystemState
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction;
export type SystemActionTypes = UpdateSessionAction
