// Este componente es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de ItemListContainer de la primera pre-entrega del Proyecto Final)

import { toCapital } from "../helpers/toCapital";
import Item from "./Item";
// además: Implementar un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item { id, title, description, price, pictureUrl } en dos segundos (setTimeout), para emular retrasos de red.

const ItemList = ({productos, titulo}) => {

  return (
    <div className="container">
        <h1 className="main-title">{toCapital(titulo)}</h1>
        <div className="productos">
          { productos.map((prod)=> <Item producto={prod} key={prod.id}/>)}
        </div>
    </div>
  );
};

export default ItemList;

//ok
