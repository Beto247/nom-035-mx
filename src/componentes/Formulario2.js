import { useState, useContext } from "react"
import { preguntas, arreglo } from "../objetos/preguntas2"
import PdfContext from "../contextos/pdfcontext"
import Header from "./header"


export default function Formulario2(props){
    const {datosPersonales, form2P, setForm2P} = useContext(PdfContext)
    const [index, setIndex] = useState(0) 
    const [invertir] = useState(arreglo)  
    const [eleccion, setEleccion] = useState('')
    const [mostrar, setMostrar] = useState(false)
    let formLenght = Object.values(form2P).length
   
    function handleChange(e){
        setForm2P({...form2P,[e.target.name]: e.target.value})  
    }

    function handleSubmit(e){
        e.preventDefault()
        props.visible('Empresa')
        props.setForm2({...form2P})
        //console.log(form2P)        
    } 
    
    const botonSiguiente = () => { 
        if(
            (index ===1 && formLenght !==5)||
            (index ===2 && formLenght !==8)||
            (index ===3 && formLenght !==12)||
            (index ===4 && formLenght !==16)||
            (index ===5 && formLenght !==22)||
            (index ===6 && formLenght !==28)||
            (index ===7 && formLenght !==30)||
            (index ===8 && formLenght !==36)||
            (index ===9 && formLenght !==41)||
            (index ===10 && formLenght !==46)||
            (index ===11 && formLenght !==56)||
            (index ===12 && formLenght !==64)||
            (index ===13 && formLenght !==68 && mostrar)||
            (index ===14 && mostrar && formLenght === 68 && form2P[65] && formLenght !==72)||
            (index ===14 && mostrar && formLenght !== 68 && !form2P[65] && formLenght !==72)){                
            alert('Por favor llena todos los campos')
        }   
        else{setIndex(index +1)
        document.querySelectorAll('.seccion').forEach(seccion => seccion.style.display = 'none')
        document.getElementById(`bloque${index}`).style.display = 'block'   
        setMostrar(false)}           
    }

    const botonSiNo = (e) =>{       
        e.preventDefault()
        eleccion === 'no' && botonSiguiente()           
        eleccion === 'si' && setMostrar(true)
        //eleccion === '' && alert('Por favor selecciona una opción')  
        setEleccion('')                    
    }
    

    if(index === 13 || index === 14){
        if(mostrar){
            document.querySelectorAll('.clase').forEach(el => el.style.display = 'block')  
            document.querySelectorAll('.op').forEach(el => el.style.display = 'none') 
        }
        else {
            document.querySelectorAll('.clase').forEach(el => el.style.display = 'none')
            document.querySelectorAll('.op').forEach(el => el.style.display = 'block') 
        }                           
    }
    else    {document.querySelectorAll('.clase').forEach(el => el.style.display = 'block')
            }
    //console.log('index fuera '+ index)    
    //console.log(formLenght)
    //console.log(Object.entries(form2))
    //console.log('65 '+!form2P[65])  
    //console.log('mos '+mostrar)  
    
    return(
        
        <form /*action="https://formsubmit.co/909176d203ff2aff7a7d2ef5aca9c811" method="POST"*/ className="form-div">
            <input type="hidden" name="_subject" value="formulario NOM-035"></input>
            <input type="hidden" name="_cc" value="delmurolh@gmail.com"></input>
            <input type="hidden" name="_template" value="table"></input>
            <input type="hidden" name="nombre" value={datosPersonales.nombre}></input>
            <input type="hidden" name="correo" value={datosPersonales.email}></input>
            <input type="hidden" name="telefono" value={datosPersonales.tel}></input>
            {Object.entries(form2P).map((el) => <input type="hidden" name={'pregunta '+el[0]} value={el[1]}></input>)}
            <input type="hidden" name="_next" value="http://localhost:3000/resultados"></input>
            <Header msj="FACTORES DE RIESGO PSICOSOCIAL Y ENTORNO ORGANIZACIONAL"/>
            {index === 0 && <>
                                <p>Segundo cuestionario</p>
                                <p>Tiempo de respuesta: 15 min.</p>
                            </>}
            {index === 15    
                ?   <p>Haz finalizado el Cuestionario</p> 
                :   Object.values(preguntas).map((valor, i) =>  
                    <div className="seccion" id={'bloque'+i} style={{display : 'none'}}>
                    <p className="tema">{valor.tema}</p>
                    {index === 13 && <div className="op" style={{display : 'block'}} onChange={(e)=>setEleccion(e.target.value)}>
                                            <p className="tema">En mi trabajo debo brindar servicio a clientes o usuarios:</p>
                                            <div className="box-boton" style={{margin: '15px'}}>
                                                <label htmlFor="si">Si</label>
                                                <input id="si" type="radio" name="opcion" value={'si'} style={{marginRight: '15px'}}/>
                                                <label htmlFor="no">No</label>
                                                <input id="no" type="radio" name="opcion" value={'no'}/>
                                            </div>
                                            <div className="box-boton" style={{marginTop: '20px'}}>
                                                <button onClick={botonSiNo}>siguiente</button>
                                            </div>
                                        </div>}
                    {index === 14 && <div className="op" style={{display : 'block'}} onChange={(e)=>setEleccion(e.target.value)}>
                                            <p className="tema">Soy Jefe de otros trabajadores:</p>
                                            <div className="box-boton" style={{margin: '15px'}}>
                                                <label htmlFor="si">Si</label>
                                                <input id="si" type="radio" name="opcion" value={'si'} style={{marginRight: '15px'}}/>
                                                <label htmlFor="no" style={{marginLeft: '15px'}}>No</label>
                                                <input id="no" type="radio" name="opcion" value={'no'} />
                                            </div>
                                            <div className="box-boton" style={{marginTop: '20px'}}>
                                                <button onClick={botonSiNo}>siguiente</button>
                                            </div>
                                        </div>}                                    
                    <table onChange={handleChange} className="clase">
                        <thead>
                            <tr>
                            <th></th>
                            <th>Pregunta</th>
                            <th>Siempre</th>
                            <th>Casi Siempre</th>
                            <th>A Veces</th>
                            <th>Casi Nunca</th>
                            <th>Nunca</th>
                            </tr>
                        </thead>
                        <tbody>                                
                            {Object.entries(valor.items).map(item =>             
                                <tr>
                                    <td className="num">{item[0]}</td> 
                                    <td className="pregunta">{item[1]}</td>
                                    <td className="opcion"><input type="radio" name={item[0]} value={invertir.includes(parseInt(item[0])) ? 4 : 0}></input></td>
                                    <td className="opcion"><input type="radio" name={item[0]} value={invertir.includes(parseInt(item[0])) ? 3 : 1}></input></td>
                                    <td className="opcion"><input type="radio" name={item[0]} value="2"></input></td>
                                    <td className="opcion"><input type="radio" name={item[0]} value={invertir.includes(parseInt(item[0])) ? 1 : 3}></input></td>
                                    <td className="opcion"><input type="radio" name={item[0]} value={invertir.includes(parseInt(item[0])) ? 0 : 4}></input></td>
                                </tr>                 
                                )}
                        </tbody>
                    </table>                    
                    </div>)}
                    <div className="box-boton">        
                        {index === 15
                            ?   <button type="button" onClick={handleSubmit}>Enviar</button>
                            :   <button type="button" onClick={botonSiguiente} className="clase">{index === 0 ? 'Iniciar' : 'Siguiente'}</button>}
                    </div>
        </form>
        
    )
}

