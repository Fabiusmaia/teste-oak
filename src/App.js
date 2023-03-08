import './App.css';
import Formulario from './componentes/Formulario';
import Listagem from './componentes/Listagem';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

function App() {
  const [list, setList] = useState([])
  const [render, setRender] = useState(false)
  function handleSaveProduct(data){
    let newList = [...list]
    newList.push(data)
    setList(newList.sort(function(a, b) {
      return parseFloat(a.preco) - parseFloat(b.preco)}))

  }

useEffect(() => {
  list.sort(function(a, b) {
    return parseFloat(a.preco) - parseFloat(b.preco);
  })

},[list])

  function handleRemove(index){
    let newList = list.filter((item, i) => {
      return (i !== index)
    })
    setList(newList)
  }
  return (
    <div className="App h-screen">
     <Formulario onAddUser={handleSaveProduct}/>
    <Listagem dados={list} removeProduct={handleRemove}/>
    
    </div>
  );
}

export default App;
