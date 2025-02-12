import { useContext } from 'react'

import { ColorContext } from '../Context/ColorContext'

export const useColorContext = () =>{
    const context = useContext(ColorContext)

    if(!context){
        console.log("Contexto não encontrado!")
    }

    return context
}