import { useState, useContext } from "react"
import PdfContext from "../contextos/pdfcontext"
import { app } from "../credentials/credentials"
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { PDFDownloadLink } from "@react-pdf/renderer"
import ReportePDF from "./hojasPDF/Hojas"

const db = getFirestore(app)
// console.log(app)

export default function IngresarDatos2(props){
const {datosEmpresa, setDatosEmpresa, datosPersonales} = useContext(PdfContext)
const [errores, setErrores] = useState({})
const {visible, form1, form2} = props

//console.log(datosPersonales)
//console.log(setDatosPersonales)
//console.log(props)

    function handleChange(e){
        const {value, name} = e.target        
        setDatosEmpresa({...datosEmpresa, [name]: value})        
    }

    function handleBlur(e){
        handleChange(e)
        validarDatos(datosEmpresa)
    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault() 
        const {empresa, puesto, tamanho} = datosEmpresa
        const {email, nombre, tel} = datosPersonales 
         
        validarDatos(datosEmpresa)
        let fecha = new Date()
  
        if(!datosEmpresa.puesto || !datosEmpresa.tamanho){
            alert('Por favor llena los campos correctamente')  
        }
        else{
            try {
                await addDoc(collection(db, 'reportes'),{empresa, puesto, tamanho, email, nombre, tel, form1, form2, fecha})
                visible('Compartir')
            } catch (error) {
                console.log(error)
            }
       }                            
    }

    function validarDatos(datos){
        let errors = {}        
        const {puesto, tamanho} = datos 
        // console.log('pue: '+puesto)
        // console.log('tam: '+tamanho)

        if (!puesto) {
            errors.puesto = "El campo 'Puesto' es requerido";
          };
          
        if (tamanho === '' || tamanho === "no-select") {
            errors.tamanho = "El campo 'Tamaño' es requerido";
          };         
          setErrores(errors)
          //console.log(errores)
    }
       
    console.log(datosEmpresa)
    //console.log(visible)
        
    return(
        <div className="form-div">
        <form className="datos">
            <h4>Contesta tres últimas preguntas para recibir tus resultados:</h4>
            <p>En tu centro de trabajo eres patrón o empleado?</p>
            <label htmlFor="patron">Patrón</label>
            <input type="radio" id="posicion" name="puesto" value={"patron"} onChange={handleChange}/>
            <label htmlFor="patron">Empleado</label>
            <input type="radio" id="empleado" name="puesto" value={"empleado"} onChange={handleChange} onBlur={handleBlur}/><br/>
            {errores.puesto && (errores.puesto && <span className="alerta">{errores.puesto}</span>)}<br/>
            <label htmlFor="tamanho">¿Cuánta gente hay en tu centro de trabajo?¿</label><br/>
            <select name="tamanho" id="tamanho" onChange={handleChange} defaultValue={"no-select"}>
                <option value="no-select">---</option>
                <option value="menor a 15">15 o menos</option>
                <option value="menor a 50">50 o menos</option>
                <option value="mayor a 50">más de 50</option>
            </select><br/>
            {errores.tamanho && (errores.tamanho && <span className="alerta">{errores.tamanho}</span>)}<br/>
            <label htmlFor="empresa">Nombre de tu empresa (opcional)</label><br/>
            <input type="text" id="email" name="empresa" placeholder="Nombre de tu empresa" value={datosEmpresa.empresa} onChange={handleChange}/><br/><br/>           
        </form>
        <PDFDownloadLink document={<ReportePDF valores={[form1, form2]}/>} fileName="resultados_cuestionario.pdf">
         <button onMouseDown={handleSubmit}>Enviar</button>
        </PDFDownloadLink>
        </div>
    )
}