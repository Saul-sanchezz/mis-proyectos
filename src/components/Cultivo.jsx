
const Cultivo = ({datosEmbarque}) => {

  const { cultivo, pallets, cantidadPallets, cajas } = datosEmbarque

  return (
    <>
      <tr>
        <th scope="row">{cultivo}</th>
        <td>{cantidadPallets}</td>
        <td>{cajas}</td>
      </tr>
    </>
  );
};

export default Cultivo;
