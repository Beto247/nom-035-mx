import './App.css';
import IngresarDatos from './componentes/ingresarDatos';
import Terminos from './componentes/Terminos';
import Aviso from './componentes/Aviso';
import Formulario1 from './componentes/Formulario1';
import Formulario2 from './componentes/Formulario2';
import IngresarDatos2 from './componentes/ingresarDatos2';
import { PdfProvider } from './contextos/pdfcontext';
import { useState } from 'react';
import { shareOnMobile } from 'react-mobile-share';


function App() {
  const [visible, setVisible] = useState('Datos') 
  const [form1, setForm1] = useState({})
  const [form2, setForm2] = useState({})
  
  //console.log(visible)
  return (
    <div className="App">
      <PdfProvider>
      {visible === 'Datos' && <IngresarDatos visible={setVisible}/>} 
      {visible === 'Terminos' && <Terminos visible={setVisible}/>} 
      {visible === 'Aviso' && <Aviso visible={setVisible}/>}  
      {visible === 'F1' && <Formulario1 setForm1={setForm1} visible={setVisible}/>}
      {visible === 'F2' && <Formulario2 setForm2={setForm2} visible={setVisible}/>} 
      {visible === 'Empresa' && <IngresarDatos2 visible={setVisible} form1={form1} form2={form2}/>}
      {visible === 'Compartir' &&
        <div className='descarga'>
        <p>Tus respuestas han sido evaluadas, podrás ver tus resultados en el documento PDF que has descargado.</p>
        <p>Comparte este cuestionario con un compañero:</p>  
        <button onClick={()=>shareOnMobile({text: "Conoce los riesgos psicosociales en tu entorno de trabajo",
            url: "https://nom-035-mx.web.app",
            title: "Cuestionario NOM-035"})}>Compartir</button>
        </div>}      
      </PdfProvider>
    </div>
  );
}

export default App;


