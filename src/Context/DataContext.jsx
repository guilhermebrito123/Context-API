import { createContext, useState } from "react"

//Criando contexto:
export const DataContext = createContext()

//Criando provider, para prover o contexto a qualquer componente:
export const DataContextProvider = ({children}) => {
    const [nome, setNome] = useState()

    return (
        <DataContext.Provider value={{nome, setNome}}>
            {children}
        </DataContext.Provider>
    )
}