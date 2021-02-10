export const messageActions = {
    SEND_MESSAGE: "SEND_MESSAGE",
    DELETE_MESSAGE: "DELETE_MESSAGE"
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
  type: typeof messageActions.SEND_MESSAGE;
  payload: Message;
}

interface DeleteMessageAction {
  type: typeof messageActions.DELETE_MESSAGE;
  meta: {
    timestamp: number;
  };
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction;
