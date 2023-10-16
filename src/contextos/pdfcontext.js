import { createContext, useState } from "react";

const PdfContext = createContext()

function PdfProvider({children}){
    const [datosPersonales, setDatosPersonales] = useState({nombre: "", email: "", tel: ""})
    const [form1P, setForm1P] = useState({})
    const [form2P, setForm2P] = useState({})
    const [datosEmpresa, setDatosEmpresa] = useState({puesto: "", tamanho: "", empresa: ""})       

    const data = {datosPersonales, setDatosPersonales, form1P, setForm1P, form2P, setForm2P, datosEmpresa, setDatosEmpresa}    
    
    return <PdfContext.Provider value={data}>{children}</PdfContext.Provider>
}

export {PdfProvider}
export default PdfContext