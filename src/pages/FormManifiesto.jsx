
import { useState } from "react";
import DetallesPrecioCultivo from "../components/DetallesPrecioCultivo";
import ColumImput from "../components/ColumImput";
import generarId from "../helpers/helpers";


const FormManifiesto = ({ 
  datosChofer, 
  setDatosChofer,
  setMostrarManifiesto, 
  datosEmbarque,
  setDatosEmbarque,
  detallesPrecios,
  setDetallesPrecios,
  numeroManifiesto,
}) => {
  
  // const [datosEmbarque, setDatosEmbarque] = useState({
  //   cultivo: "",
  //   pallets: "",
  //   cantidadPallets: "",
  //   cajas: "",
  // });

  // const [detallesPrecios, setDetallesPrecios] = useState([]);

  const [detalleprecio, setDetallePrecio] = useState({
    cantidadPrecio: "",
    cultivoPrecio: "",
    precio: "",
  });

  const handleChangeChofer = (e) => {
    setDatosChofer((datosChofer) => ({
      ...datosChofer,
      [e.target.name]: (e.target.value).toUpperCase(),
    }));
  };

  const handleChangeDatosEmbarque = (e) => {
    setDatosEmbarque((datosEmbarque) => ({
      ...datosEmbarque,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeDetalleprecio = (e) => {
    setDetallePrecio((detalleprecio) => ({
      ...detalleprecio,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAgregarCulivosPrecio = () => {
    if(detalleprecio.id) {
      //actualizar detalles
      const detallesPreciosAct = detallesPrecios.map(detalleState => 
      detalleState.id === detalleprecio.id ? detalleprecio : detalleState)
      setDetallesPrecios(detallesPreciosAct)

      setDetallePrecio({
        cantidadPrecio: "",
        cultivoPrecio: "",
        precio: "",
      })
    } else {
      // nuevo detalle
      const { id, cantidadPrecio, cultivoPrecio, precio } = detalleprecio
      if (![cantidadPrecio, cultivoPrecio, precio].includes("")) {
        setDetallesPrecios([
          ...detallesPrecios,
          {
            id: generarId(),
            ...detalleprecio,
          },
        ]);
  
        setDetallePrecio({
          cantidadPrecio: "",
          cultivoPrecio: "",
          precio: "",
        })
      } 
    }
  };

  return (
    <div 
      className="container d-flex justify-content-between gap-2"
    >
      <div className="">
        <form>
          <h1>Datos del chofer</h1>
          <div className="row">
            <ColumImput
              classname="col-12 col-sm-12"
              label="Nombre del chofer"
              type="text"
              name="nombreChofer"
              value={datosChofer.nombreChofer}
              onChange={handleChangeChofer}
            />
            <ColumImput
              classname="col-7 col-md-4 col-sm-7"
              label="Trailer"
              type="text"
              name="marcaTrailer"
              value={datosChofer.marcaTrailer}
              onChange={handleChangeChofer}
            />
            <ColumImput
              classname="col-5 col-md-3 col-sm-5"
              label="Placas"
              type="text"
              name="placasTrailer"
              value={datosChofer.placasTrailer}
              onChange={handleChangeChofer}
            />
            <ColumImput
              classname="col-7 col-md-3 col-sm-7"
              label="Placas de la caja"
              type="text"
              name="placasCaja"
              value={datosChofer.placasCaja}
              onChange={handleChangeChofer}
            />
            <ColumImput
              classname="col-5 col-md-2 col-sm-5"
              label="Nro. Economico"
              type="text"
              name="nroEconomico"
              value={datosChofer.nroEconomico}
              onChange={handleChangeChofer}
            />
            <ColumImput
              classname="col-6 col-md-5 col-sm-12"
              label="Fletera"
              type="text"
              name="fletera"
              value={datosChofer.fletera}
              onChange={handleChangeChofer}
            />
            <ColumImput
              classname="col-3 col-md-2 col-sm-7"
              label="Salida"
              type="text"
              name="horaSalida"
              value={datosChofer.horaSalida}
              onChange={handleChangeChofer}
            />
            <ColumImput
              classname="col-3 col-md-2 col-sm-5"
              label="Factura"
              type="number"
              name="nroFactura"
              value={datosChofer.nroFactura}
              // value={numeroManifiesto}
              onChange={handleChangeChofer}
            />
            <ColumImput
              classname="col-4 col-md-3 col-sm-6"
              label="Celular"
              type="number"
              name="celular"
              value={datosChofer.celular}
              onChange={handleChangeChofer}
            />
            <ColumImput
              classname="col-4 col-md-4 col-sm-6"
              label="Sellos"
              type="text"
              name="sellos"
              value={datosChofer.sellos}
              onChange={handleChangeChofer}
            />
            <ColumImput
              classname="col-4 col-md-4 col-sm-12"
              label="Termografo"
              type="text"
              name="termografo"
              value={datosChofer.termografo}
              onChange={handleChangeChofer}
            />
            <ColumImput
              classname="col-12 col-md-4 col-sm-12"
              label="Cliente"
              type="text"
              name="cliente"
              value={datosChofer.cliente}
              onChange={handleChangeChofer}
            />
          </div>

          <h1>Detalle embarque</h1>
          <div className="row">
            <div className="col-6 col-md-4 col-sm-12">
              <label htmlFor="">Cultivo</label>
              <div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="cultivo"
                  value={datosEmbarque.cultivo}
                  onChange={handleChangeDatosEmbarque}
                >
                  <option defaultValue>------</option>
                  <option value="BELL PEPPER">BELL PEPPER</option>
                  <option value="CALABAZA">CALABAZA</option>
                  <option value="JALAPEÑO">JALAPEÑO</option>
                </select>
              </div>
            </div>
            <div className="col-6 col-md-3 col-sm-12">
              <label htmlFor="">Empaque</label>
              <div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="pallets"
                  value={datosEmbarque.pallets}
                  onChange={handleChangeDatosEmbarque}
                >
                  <option>-----</option>
                  <option value="BINS">BINS</option>
                  <option value="PALLETS">PALLETS</option>
                </select>
              </div>
            </div>
            <div className="col-6 col-md-3 col-sm-6">
              <label htmlFor="">Cantidad</label>
              <div>
                <input
                  type="number"
                  className="form-control"
                  name="cantidadPallets"
                  value={datosEmbarque.cantidadPallets}
                  onChange={handleChangeDatosEmbarque}
                />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <label htmlFor="">Cajas</label>
              <div>
                <input
                  type="number"
                  className="form-control"
                  name="cajas"
                  value={datosEmbarque.cajas}
                  onChange={handleChangeDatosEmbarque}
                />
              </div>
            </div>
          </div>

          <h1>Detalle precio</h1>
          <div className="row">
            <div className="col-3 col-md-2 col-sm-12">
              <label htmlFor="">Cantidad</label>
              <div>
                <input
                  type="number"
                  className="form-control"
                  name="cantidadPrecio"
                  value={detalleprecio.cantidadPrecio}
                  onChange={handleChangeDetalleprecio}
                />
              </div>
            </div>
            <div className="col-9 col-md-5">
              <label htmlFor="">Tamaño</label>
              <div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="cultivoPrecio"
                  value={detalleprecio.cultivoPrecio}
                  onChange={handleChangeDetalleprecio}
                >
                  <option defaultValue>-----</option>
                  <option value="JUMBO">JUMBO</option>
                  <option value="X-LARGE">X-LARGE</option>
                  <option value="LARGE">LARGE</option>
                  <option value="MEDIUM">MEDIUM</option>
                  <option value="SMALL">SMALL</option>
                  <option value="X-SMALL">X-SMALL</option>
                  <option value="CH-JUMBO NACIONAL">CH-JUMBO NACIONAL</option>
                  <option value="CH-XL NACIONAL">CH-XL NACIONAL</option>
                  <option value="CH-L NACIONAL">CH-L NACIONAL</option>
                  <option value="CH-M NACIONAL">CH-M NACIONAL</option>
                  <option value="CH-S NACIONAL">CH-S NACIONAL</option>
                  <option value="CH-XS NACIONAL">CH-XS NACIONAL</option>
                </select>
              </div>
            </div>
            <div className="col-6 col-md-3 col-sm-6">
              <label htmlFor="">Precio</label>
              <div>
                <input
                  type="number"
                  className="form-control"
                  name="precio"
                  value={detalleprecio.precio}
                  onChange={handleChangeDetalleprecio}
                />
              </div>
            </div>
            <div className="col-6 col-md-2 col-sm-6">
              <label></label>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAgregarCulivosPrecio}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <input
              disabled 
              className="col-12 btn btn-primary" 
              type="submit" />
          </div>
          <br />
          <br />
        </form>
      </div>
      {/*  aqui termina el block 1*/}

      <div className="">
        <h1>Detalles de embarque</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <h5 className="card-header">Manifiesto Nro. 001</h5>
              <div className="card-body">
                <h5 className="card-title">Detalles</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Descripcion</th>
                      <th scope="col">Precio</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    { detallesPrecios.map( detalle => (
                      <DetallesPrecioCultivo
                        detallesPrecios={detallesPrecios}
                        setDetallesPrecios={setDetallesPrecios}
                        detalleprecio={detalleprecio}
                        setDetallePrecio={setDetallePrecio}
                        detalle={detalle}
                        key={generarId()}
                      />
                    ))}
                  </tbody>
                </table>
                <buttun 
                  type="button"
                  className="btn btn-primary"
                  onClick={()=> setMostrarManifiesto(true)} 
                >Ver Manifiesto</buttun>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    
  );
};

export default FormManifiesto;
