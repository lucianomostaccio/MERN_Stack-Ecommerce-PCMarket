import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Contacto = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('¡Formulario enviado con éxito!');
  };

  return (
    <div>
      <main className="formpage">
        <div className="content">
          <div className="form">
            <form
              onSubmit={handleSubmit}
              name="contacto"
              method="post"
              action="#"
            >
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="pais">País:</label>
              <select id="pais" name="pais" required>
                <option value="">Seleccione un país</option>
                <option value="Argentina">Argentina</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cuba">Cuba</option>
                <option value="Ecuador">Ecuador</option>
                <option value="El Salvador">El Salvador</option>
                <option value="España">España</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Honduras">Honduras</option>
                <option value="México">México</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Panamá">Panamá</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Perú">Perú</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="República Dominicana">
                  República Dominicana
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Venezuela">Venezuela</option>
              </select>

              <label htmlFor="Motivo">Motivo de consulta:</label>
              <div className="checks">
                <input
                  type="checkbox"
                  name="Motivo"
                  value="Soporte compra realizada"
                />
                <label className="checkboxes" htmlFor="Soporte_compra_realizada">
                  Soporte compra realizada
                </label>

                <input
                  type="checkbox"
                  name="Motivo"
                  value="Consulta producto"
                />
                <label className="checkboxes" htmlFor="Consulta_producto">
                  Consulta producto
                </label>

                <input
                  type="checkbox"
                  name="Motivo"
                  value="Otra consulta"
                />
                <label
                  className="checkboxes"
                  htmlFor="Otra_consulta"
                >
                  Otra consulta
                </label>
              </div>
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                required
              ></textarea>
              <input type="submit" value="Enviar" />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacto;