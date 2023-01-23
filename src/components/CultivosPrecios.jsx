const formatearCantidad = cantidad => {
  return cantidad.toLocaleString("en-us", { 
    style: "currency", 
    currency: "USD"
  })
}

const CultivosPrecios = ({ detallesPrecios }) => {
  
  return (
    <>
      {detallesPrecios && detallesPrecios.map( detalle =>
      (<tr>
        <th scope="row">{detalle.cantidadPrecio} CAJAS</th>
        <td>{detalle.cultivoPrecio} </td>
        <td>{formatearCantidad(Number(detalle.precio))}</td>
        <td>{formatearCantidad(Number(detalle.cantidadPrecio * detalle.precio))}</td>
      </tr>)
      )}
      
    </>
  );
};

export default CultivosPrecios;
