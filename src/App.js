import react from 'react';
import image from './img/people.svg'
import './App.css';

function App() {

  const [ Comentario, setcomentario] = react.useState()
  const [ todosOsComentarios, setTodosOsComentario] = react.useState([])
  
  function cliqueinoBotao() {
    const todosOsComentariosAnteriores = [... todosOsComentarios,Comentario]
      
    setTodosOsComentario(todosOsComentariosAnteriores) 
  }
  
  function digiteinotextarea(evento){
    setcomentario(evento.target.value)
  }
  return (
    <div>
      <img src={image} alt='imagem-pessoas' />
      <textarea onChange={digiteinotextarea}>Seu comentário aqui</textarea>
      <button onClick={cliqueinoBotao} >Comentar</button>

      <ul id='ul-1'>

        {todosOsComentarios.map( coment => (
        <li key={coment}>{coment}   </li>
        ))}
       Comentário aqui
      </ul>

      <ul id='ul-2'>Outro Comentário aqui

      </ul>

      <ul id='ul-3'>Mais um Comentário

      </ul>

    </div>
  );
}

export default App;