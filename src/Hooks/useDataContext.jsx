import { useContext } from 'react'

//Contexto:
import { DataContext } from '../Context/DataContext'

export const useDataContext = () =>{
    const context = useContext(DataContext)

    if(!context){
        console.log("Contexto não encontrado")
    }

    return context
}