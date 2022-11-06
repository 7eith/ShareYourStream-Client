/// <reference types="react-scripts" />

type AuthState = {
  loggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user: any;
};

type AuthAction = {
  type: string;
  payload: any;
};

type DispatchType = (args: AuthAction) => AuthAction;
export interface Action<T = any> {
  type: T;
}

/**
 * An Action type which accepts any other properties.
 * This is mainly for the use of the `Reducer` type.
 * This is not part of `Action` itself to prevent users who are extending `Action.
 */
export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any;
}
