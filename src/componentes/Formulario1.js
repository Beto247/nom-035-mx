import { useState, useContext } from "react"
import PdfContext from "../contextos/pdfcontext"
import { preguntasIniciales } from "../objetos/preguntas1"
import Header from "./header"


export default function Formulario1(props){
    const {form1P, setForm1P} = useContext(PdfContext)
    const [index, setIndex] = useState(0)
    let formLenght = Object.values(form1P).length
    // console.log(bloques)
    // console.log(secciones)

    function handleChange(e){
        setForm1P({...form1P,[e.target.name]: e.target.value})        
    }
    
    function handleSubmit(e){
        e.preventDefault()
        props.visible('F2')
        props.setForm1({...form1P})
        //console.log(form1P)
    }
    
    function botonSiguiente(){  
        if( 
            (index === 1 && formLenght !==6)||
            (index === 2 && formLenght !==8)||
            (index === 3 && formLenght !==15)||
            (index === 4 && formLenght !==20)){
            alert('Por favor llena todos los campos')
        }        
        else{if(formLenght === 6 && !Object.values(form1P).includes('1')){
            setIndex(5)
        }
        else{
        setIndex(index +1)
        document.querySelectorAll('.seccion').forEach(seccion => seccion.style.display = 'none')
        document.getElementById(`bloque${index}`).style.display = 'block'}}           
    }
    // console.log(index)
    // console.log(formLenght)
    
    return(
        
        <form className="form-div">
            <Header msj="ACONTECIMIENTOS TRAUMÁTICOS SEVEROS" />  
            {index === 0 && <>
                                <p>Primer cuestionario</p>
                                <p>Tiempo de respuesta: 5 min.</p>
                            </>}
            {index === 5    
                ?   <p>Haz finalizado el Cuestionario</p> 
                :   Object.values(preguntasIniciales).map((bloque, i) =>                    
                    <div className="seccion" id={'bloque'+i} style={{display : 'none'}}>
                    {Object.keys(preguntasIniciales)[i]}
                    {bloque.tema && <p className="tema">{bloque.tema}</p>}
                    <table onChange={handleChange}>
                        <thead>
                            <tr>
                            <th></th>
                            <th>Pregunta</th>
                            <th>Sí</th>
                            <th>No</th>
                        </tr>
                        </thead> 
                        <tbody>
                        {Object.entries(bloque.items).map((item, i) => 
                        <>
                        <tr>
                        <td className="num">{item[0]}</td> 
                        <td className="pregunta">{item[1]}</td>
                        <td className="opcion"><input  type="radio" name={item[0]} value={1} className="td"/></td>
                        <td className="opcion"><input type="radio" name={item[0]} value={0} className="tf"/></td>
                        </tr>
                        </>
                        )}
                        </tbody>
                    </table>  
                    </div>)} 
                    <div className="box-boton">                             
                        {index === 5
                            ?   <button type="button" onClick={handleSubmit}>Enviar</button>
                            :   <button type="button" onClick={botonSiguiente}>{index === 0 ? 'Iniciar' : 'Siguiente'}</button>}
                    </div> 
        </form>
        
    )
}