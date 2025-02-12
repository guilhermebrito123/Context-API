import { createContext, useReducer } from "react";

export const ColorContext = createContext();

export const ColorReducer = (state, action) => {
    //switch
    switch(action.type){
        case "RED":
            return {...state, color: 'red'};
        case "BLUE":
            return {...state, color: 'blue'};
        default:
            return state
    }
}

export const ColorContextProvider = ({ children }) => {

  const[state, dispatch] = useReducer(ColorReducer, {color: 'purple'}) // Primeiro argumento é quem altera o estado, e o segundo é o valor do estado

  return <ColorContext.Provider value={{...state, dispatch}}>{children}</ColorContext.Provider>;
};
