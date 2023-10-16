

export default function Aviso(props){

    const aceptar = ()=>{
        props.visible('F1')
    }
    return(
        <div className="centrar">
        <div className="aviso">
            <h1 className="box-boton">ATENCIÓN</h1>
            <p>A continuación, se presentan dos cuestionarios publicados en la NOM-035-STPS-2018. El primero con el objetivo de <b>Identificar a los Trabajadores que Fueron Sujetos a Acontecimientos Traumáticos Severos</b> y el segundo, con el objetivo de <b>Identificar y Analizar los Factores de Riesgo Psicosocial y la Evaluación Del Entorno Organizacional en los Centros de Trabajo.</b></p>
            <p>La respuesta de los siguientes cuestionarios <b>NO ES VÁLIDA</b> como evidencia de Implementación de la NOM-035-STPS-2018 en tu centro de trabajo. Los resultados son de carácter informativo y para cumplir correctamente es necesario cubrir con los puntos mencionados en el <b>Punto 2: Campo de Aplicación</b> de la presente NORMA.</p>
            <p>Los resultados enviados serán utilizados con fines estadísticos y no se compartirán datos personales a ninguna empresa o institución.</p>
            <div className="box-boton">
            <button onClick={aceptar}>Aceptar</button>
            </div>
        </div>
        </div>
    )
}












