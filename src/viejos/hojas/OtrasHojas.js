
export function Criterios(){
    return(
        <div className="hoja">
        <h1 className="titulo">Criterios de Evaluación</h1>
        <p className="parrafo">Los resultados de tus cuestionarios se evaluan de acuerdo a la siguiente Escala de Riesgos:</p>
        <div className="outer-box">
            <p className="box3 muy-alto" ><b>MUY ALTO</b></p>
            <p className="box3 alto" ><b>ALTO</b></p>
            <p className="box3 medio" ><b>MEDIO</b></p>
            <p className="box3 bajo" ><b>BAJO</b></p>
            <p className="box3 nulo" ><b>NULO</b></p>
        </div>
        <p className="parrafo">De acuerdo a la <b>NOM-035-STPS-2018</b> tu Centro de Trabajo tendrá que realizar acciones de mejora a partir del <b>NIVEL DE RIESGO BAJO.</b></p>
        <p className="parrafo">Las Evaluaciones fueron calculadas de acuerdo a las tablas 5, 6 y 7 mencionadas en la Guía de Referencia III de la presente Norma Oficial Mexicana.</p>
       </div>
    )
}


export function Cover(props){
    return(
        <div className="hoja">
        <div className="cover"><p>{props.texto}</p></div>
        </div>
    )
}