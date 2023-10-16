import { useState, useContext } from "react"
import PdfContext from "../contextos/pdfcontext"


export default function IngresarDatos(props){
const {datosPersonales, setDatosPersonales} = useContext(PdfContext)
const [errores, setErrores] = useState({})
const [ver, setVer] = useState([])
const [terminos, setTerminos] = useState()

//console.log(datosPersonales)
//console.log(setDatosPersonales)
//console.log(typeof(terminos))

    function handleChange(e){
        const {value, name} = e.target       
        setDatosPersonales({...datosPersonales, [name]: value})
        validarDatos(datosPersonales)
        //console.log(Object.keys(errores).length)
        }

    function handleBlur(e){
        handleChange(e)
        setVer([...ver, e.target.name])
        //console.log(ver)
    }
    
    function handleSubmit(e){
        e.preventDefault()        
        validarDatos(datosPersonales)
        //console.log(Object.keys(errores).length)
        
        if(!datosPersonales.nombre || !datosPersonales.email || !datosPersonales.tel){
          alert('Por favor llena los campos correctamente') 
        }
        else if(terminos !== 'on'){
          alert('Por favor acepta los términos y condiciones')
        }
        else{Object.keys(errores).length === 0       
        ? props.visible('Aviso')
        : alert('Por favor llena los campos correctamente')}            
    }

    function validarDatos(datos){
        let errors = {}
        let regExName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
        let regExEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
        let regExTel = /(\+52|0052|52)?[ -]*([0-9][ -]*){10}/

        const {nombre, email, tel} = datos 

        if (!nombre) {
            errors.name = "El campo 'Nombre' es requerido";
          } else if (!regExName.test(nombre)) {
            errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
          }
        if (!email) {
            errors.email = "El campo 'Email' es requerido";
          } else if (!regExEmail.test(email)) {
            errors.email = "Ingresa un Email valido";
          }
        if (!tel) {
            errors.tel = "El campo 'Telefono' es requerido";
          } else if (!regExTel.test(tel)) {
            errors.tel = "Ingresa un Telefono valido";
          }   
          
          setErrores(errors)          
        }

     function verAviso(){
      props.visible('Terminos')
     }   
    //console.log(datosPersonales)
    //console.log(errores)
        
    return(
        <>
        <form onSubmit={handleSubmit} className="datos form-div">
        <h2>Cuestionario NOM-035-STPS-2018</h2>
        <h3>Ingresa tus datos para iniciar con los cuestionarios:</h3>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" value={datosPersonales.nombre} onChange={handleChange} onBlur={handleBlur}/>
            {ver.includes('nombre') && (errores.name && <><br/><span className="alerta">{errores.name}</span></>)}<br/>
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" name="email" placeholder="Ingresa tu E-mail" value={datosPersonales.email} onChange={handleChange} onBlur={handleBlur}/>
            {ver.includes('email') && (errores.email && <><br/><span className="alerta">{errores.email}</span></>)}<br/>
            <label htmlFor="tel">Telefono</label>
            <input type="tel" id="tel" name="tel" placeholder="Ingresa tu telefono" value={datosPersonales.tel} onChange={handleChange} onBlur={handleBlur}/>
            {ver.includes('tel') && (errores.tel && <span className="alerta">{errores.tel}</span>)}<br/>
            <button type="submit" style={{marginTop: '20px'}}>Enviar</button>
        </form>
        <br/>
        <br/>
        <br/>
        <div>
            <p style={{'color': "gray"}}>He leído el <span onClick={verAviso} className="link-aviso"><b>Aviso de privacidad</b></span> y acepto los términos y condiciones: <input type="checkbox" onChange={(e)=>setTerminos(e.target.value)}></input></p>
        </div>
        </>
    )
}


