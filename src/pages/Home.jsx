//Hooks:
import { useDataContext } from '../Hooks/useDataContext';
//import { useContext } from 'react';

//import { DataContext } from '../Context/DataContext';

import ChangeNome from "../Componentes/ChangeNome";

const Home = () => {

  const {nome} = useDataContext()

  return (
    <div>
      <h1>Bom dia {nome}!</h1>
      <ChangeNome />
    </div>
  )
}

export default Home