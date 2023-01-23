

const DetallesPrecioCultivo = ({ 
  detalle, 
  detallesPrecios,
  setDetallesPrecios,
  detalleprecio,
  setDetallePrecio, 
}) => {
  
  const editarDetalle = (detalle) => {
    const {id, cantidadPrecio, cultivoPrecio, precio} = detalle
    setDetallePrecio({
      id, 
      cantidadPrecio,
      cultivoPrecio,
      precio,
    })
  }
  
  const eliminarDetalle = (detalle) => {
    const {id, cantidadPrecio, cultivoPrecio, precio} = detalle
    const detallesActualizados = detallesPrecios.filter(detalles => (detalles.id !== id))
    setDetallesPrecios([...detallesActualizados])
  }
  
  return (
    <>
      <tr>
        <td>{detalle.cantidadPrecio}</td>
        <td>{detalle.cultivoPrecio}</td>
        <td>{detalle.precio}</td>
        <td className="d-flex">
          <button 
            className="btn btn-success me-2 my-2"
            onClick={()=> editarDetalle(detalle)}
          >Editar</button> 
          <button 
            className="btn btn-danger my-2"
            onClick={()=> eliminarDetalle(detalle)}
          >Eliminar</button> 
        </td>
      </tr>
    </>
  );
};

export default DetallesPrecioCultivo;
