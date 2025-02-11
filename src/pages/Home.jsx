import { useContext } from 'react';

import { DataContext } from '../Context/DataContext';

import ChangeNome from "../Componentes/ChangeNome";

const Home = () => {

  const {nome} = useContext(DataContext)

  return (
    <div>
      <h1>Bom dia {nome}!</h1>
      <ChangeNome />
    </div>
  )
}

export default Home