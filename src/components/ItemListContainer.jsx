import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../helpers/pedirDatos";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const marca = useParams().marca;

  useEffect(() => {
    pedirDatos().then((res) => {
      if (marca) {
        setProductos(res.filter((prod) => prod.marca === marca));
        setTitulo(marca);
      } else {
        setProductos(res);
        setTitulo("Productos");
      }
    });
  }, [marca]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;

//ok
