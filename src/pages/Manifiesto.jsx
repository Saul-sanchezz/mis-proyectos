import Cultivo from "../components/Cultivo";
import CultivosPrecios from "../components/CultivosPrecios";
import LogoAmapasa from "../images/images.jpeg"

const formatearCantidad = cantidad => {
  return cantidad.toLocaleString("en-us", { 
    style: "currency", 
    currency: "USD"
  })
}

const fecha = Date.now();

export const formatearFecha = fecha => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }
  return fechaNueva.toLocaleDateString("es-ES", opciones)
}


const Manifiesto = ({ 
  setMostrarManifiesto,
  datosChofer,
  datosEmbarque,
  detallesPrecios,
}) => {
  const { 
    nombreChofer,
    marcaTrailer,
    placasTrailer,
    placasCaja,
    nroEconomico,
    fletera,
    horaSalida,
    nroFactura,
    celular,
    sellos,
    termografo,
    cliente,
  } = datosChofer

  const { cultivo, pallets, cantidadPallets, cajas } = datosEmbarque

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <h2 className="text-bg-info col-12 text-center"> MANIFIESTO NACIONAL NRO. 00{nroFactura}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p><strong>REMITENTE:</strong> PIMIENTOS LA RESERVA.</p>
          <p><strong>FDA NRO.:</strong> 17359104470</p>
          <p><strong>CONSIGNATORIO:</strong> ____________________________ </p>
          <p><strong>A. A. AMERICANO:</strong> ___________________________ </p>
          <p><strong>FECHA DE EMBARQUE:</strong> {formatearFecha(fecha)} </p>
          <div className="row">
            <div className="col-12">
              <h2>DETALLE EMBARQUE</h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">{pallets}</th>
                    <th scope="col">CAJAS</th>
                  </tr>
                </thead>
                <tbody>
                  <Cultivo
                    datosEmbarque={datosEmbarque}
                  />
                  <tr>
                    <th scope="row">TOTAL</th>
                    <td>{cantidadPallets}</td>
                    <td>{cajas}</td>
                  </tr>
                </tbody>
              </table>
              <p><strong>ORIGEN DEL EMBARQUE: MEXICANO</strong> </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          {/* <h1>MANIFIESO NRO: 001</h1> */}
          <div className="row">
            <div className="col-12">
              <p><strong>NOMBRE DEL CHOFER:</strong> {nombreChofer} </p>
              <p><strong>PLACAS DE LA CAJA:</strong> {placasCaja}</p>
              <p><strong>PLACAS DEL TRAILER:</strong> {placasTrailer} </p>
              <p><strong>TRAILER:</strong> {marcaTrailer}</p>
              <p><strong>Nro. ECONOMICO:</strong> {nroEconomico}</p>
              <p><strong>FLETERA:</strong> {fletera}</p>
              <p><strong>HORA DE SALIDA:</strong> {horaSalida}</p>
              <p><strong>CELULAR:</strong> {celular}</p>
              <p><strong>SELLOS:</strong> {sellos}</p>
              <p><strong>TERMOGRAFO:</strong> {termografo}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img src={LogoAmapasa} alt="logo-amapasa" width="180px"/>
        </div>
        <div className="col-6">
          <h5>PIMIENTOS LA RESERVA SA DE CV</h5>
          <h6>CARRETERA AL ALHUATE S/N C.P. 80430</h6>
          <h6>REF: PRE191104PI9 - TEL: +52 6671168282</h6>
          <a href="amapasa@amapasa.com">amapasa@amapasa.com</a>
        </div>
        <div className="col-3">
          <h6 className="text-bg-info">FACTURA COMERCIAL PARA EXPORTACION</h6>
          <h4>Nro. 00{nroFactura}</h4>
          <h5>FECHA: {formatearFecha(fecha)}</h5>
        </div>
        <div className="col-12 mt-0">
          <p><strong>CLIENTE:</strong> {cliente}</p>
        </div>
        <div className="col-12">
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">CANTIDAD</th>
                <th scope="col">DESCRIPCION</th>
                <th scope="col">PRECIO UNITARIO</th>
                <th scope="col">TOTAL</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <CultivosPrecios
                detallesPrecios={detallesPrecios}
              />
              <tr>
                <th scope="row"></th>
                <td ></td>
                <td >TOTAL:</td>
                <td>{formatearCantidad(detallesPrecios.reduce((acc, el)=> Number(acc) + Number(el.precio * el.cantidadPrecio), 0)) }</td>
              </tr>
            </tbody>
          </table>
          <p>* SE SEÑALA UN VALOR ESTIMADO PARA CUMPLIR LOS REQUISITOS</p>
          <br />
          <button 
            type="button"
            className="btn btn-info d-no-print"
            onClick={()=> setMostrarManifiesto(false)} 
          >Volver</button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Manifiesto;
