
import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [ linea_1, setLinea1 ] = useState('');
  const [ linea_2, setLinea2 ] = useState('');
  const [ imagen, setImagen ] = useState('');
  
  const onChangeLinea1 = (ele) => {
    setLinea1(ele.target.value);
  };

  const onChangeLinea2 = (ele) => {
    setLinea2(ele.target.value);
  };

  const onChangeImagen = (ele) => {
    setImagen(ele.target.value);
  };

  const onClickExportar = (ele) => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      const img = canvas.toDataURL('image/png');
      const link = document.createElement('a');

      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      
      { /* Seleccionar meme */ }
      <select onChange={ onChangeImagen }>
        <option value="fire">Casa en Llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Phylosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br/>

      { /* Input para escribir línea (arriba) */ }
      <input onChange={ onChangeLinea1 }  type="text" placeholder="Línea 1"/> <br/>

      { /* Input para escribir línea (abajo) */ }
      <input onChange={ onChangeLinea2 } type="text" placeholder="Línea 1"/> <br/>

      { /* Exportar meme */ }
      <button onClick={ onClickExportar }>Exportar</button>

      <div className="css-meme" id="meme">
        <span>{ linea_1 }</span><br/>
        <span>{ linea_2 }</span>
        <img src={ "/memes/" + imagen + ".jpeg" }/>
      </div>

    </div>
  );
}

export default App;