import React, {ReactNode, useReducer} from 'react';

export default (reducer: any, action: any, defaultValue: any) => {
  const Context = React.createContext({
    state: {
      token: null,
    },
    signin(values) {},
  });

  interface Props {
    children: ReactNode;
  }
  const Provider = ({children}: Props) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions: any = {};

    Object.keys(action).map((key: string) => {
      boundActions[key] = action[key](dispatch);
      return 0;
    });

    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};
