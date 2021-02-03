export type Action = { type: "setEmail"; payload: string } 
| { type: "setPassword"; payload: string }
| { type: "setButtonDisabled"; payload: boolean }
| { type: "loginSuccess"; payload: string }
| { type: "loginFailed"; payload: string }
| { type: "setIsError"; payload: boolean } 

