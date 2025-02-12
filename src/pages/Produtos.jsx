import { useContext } from "react";
import { useState } from "react";

import { DataContext } from "../Context/DataContext";

import { Data } from '../Componentes/Data'

import styles from '../pages/Produtos.module.css'

const Produtos = () => {
  const { nome } = useContext(DataContext);
  const [produtos] = useState(Data)


  return (
  <div>
      {nome && <h1>Confira nossos produtos {nome}</h1>}
      <ul className={styles.ul}>
        {produtos.map((produto) => (
          <div key={produto.id} className={styles.li}>
            <li>{produto.nome}</li>
            <li>{produto.valor}</li>
            {produto.disponivel ? (<button className={styles.visitar}>Adquira</button>) : (<button disabled className={styles.visitar}>Esgotado</button>)}
          </div>
        ))}
      </ul>
  </div>
  )
};

export default Produtos;
