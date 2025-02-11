import { useContext } from "react";

import { DataContext } from "../Context/DataContext";

const ChangeNome = () => {
  const { setNome } = useContext(DataContext);

  return (
    <div>
      <h2>Altere seu nome escrevendo no campo abaixo:</h2>
      <input style={{fontSize: '25px'}} type="text" onChange={(e) => setNome(e.target.value)} />
    </div>
  );
};

export default ChangeNome;
