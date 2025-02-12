//Hooks:
import { useDataContext } from '../Hooks/useDataContext';
// import { useContext } from 'react';

//import { DataContext } from '../Context/DataContext';

const Sobre = () => {

  const {nome} = useDataContext()

  return (
    <>
      {nome && <h2 style={{fontWeight: 'bold'}}>{nome}, somos da empresa Contexto API, adoramos o fato de estar conosco!</h2>}
    </>
  )
}

export default Sobre