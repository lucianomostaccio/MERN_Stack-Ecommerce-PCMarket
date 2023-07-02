// Crea los componentes Item.js e ItemList.js para mostrar algunos productos en tu ItemListContainer.js. Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red

// Es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder a los detalles (los desarrollaremos más adelante)

import { Link } from 'react-router-dom'
import { toCapital } from '../helpers/toCapital'


const Item = ({producto}) => {
  return (
    <div className="producto">
       <img src={producto.imagen} alt={producto.title} />
       <div>             
           <h4>{producto.titulo}</h4>
           <p>Precio: ${producto.precio}</p>
           <p>Marca: {toCapital(producto.marca)}</p>
           <Link className="ver-mas" to={`/item/${producto.id}`}>Ver producto</Link>
        </div>
    </div>
  )
}

export default Item;
//ok