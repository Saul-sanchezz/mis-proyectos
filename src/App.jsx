import { useState, useEffect } from "react"
import Manifiesto from "./pages/Manifiesto"
import FormManifiesto from "./pages/FormManifiesto"

const data = {
  nombreChofer: "",
  marcaTrailer: "",
  placasTrailer: "",
  placasCaja: "",
  nroEconomico: "",
  fletera: "",
  horaSalida: "",
  nroFactura: "",
  celular: "",
  sellos: "",
  termografo: "",
  cliente: "",
};

function App() {

  const [manifiestosGuardados, setmanifiestosGuardados] = useState([])
  const [numeroManifiesto, setNumeroManifiesto] = useState(manifiestosGuardados.length)
  const [mostrarManifiesto, setMostrarManifiesto] = useState(false)
  const [datosChofer, setDatosChofer] = useState(data);
  const [datosEmbarque, setDatosEmbarque] = useState({
    cultivo: "",
    pallets: "",
    cantidadPallets: "",
    cajas: "",
  });
  const [detallesPrecios, setDetallesPrecios] = useState([]);


  useEffect(() => {
    localStorage.setItem("numeroManifiesto", numeroManifiesto ?? 0)
  }, [])

  return (
    <div>
      {mostrarManifiesto ? 
      <Manifiesto
        setMostrarManifiesto={setMostrarManifiesto}
        datosChofer={datosChofer}
        datosEmbarque={datosEmbarque}
        detallesPrecios={detallesPrecios}
      /> : 
      <FormManifiesto
        datosChofer={datosChofer}
        setDatosChofer={setDatosChofer}
        setMostrarManifiesto={setMostrarManifiesto}
        datosEmbarque={datosEmbarque}
        setDatosEmbarque={setDatosEmbarque}
        detallesPrecios={detallesPrecios}
        setDetallesPrecios={setDetallesPrecios}
        numeroManifiesto={numeroManifiesto}
      />}
    </div>
  )
}

export default App
