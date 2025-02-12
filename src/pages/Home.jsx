//Hooks:
import { useDataContext } from '../Hooks/useDataContext';
import { useColorContext } from '../Hooks/useColorContext';
//import { useContext } from 'react';

//import { DataContext } from '../Context/DataContext';

import ChangeNome from "../Componentes/ChangeNome";

const Home = () => {

  const { nome } = useDataContext()
  const { color, dispatch } = useColorContext()

  //Alterando state complexo:
  const setColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
      <h1 style={{color}}>Bom dia {nome}!</h1>
      <ChangeNome />
      {/*Alterando o contexto complexo */}
      <div>
        <button onClick={() => setColor("RED")}>Cor do botão</button>
      </div>
    </div>
  )
}

export default Home