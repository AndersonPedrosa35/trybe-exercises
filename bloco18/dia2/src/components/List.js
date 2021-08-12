import { useState } from 'react';

export default function List() {
  const [task, setTask] = useState('');
  const [input, setInput] = useState('');
  console.log(task);
  return (
    <div>
      <h1>Lista de tarefas</h1>
      <form>
        <input type='text' value={ input } onChange={ ({ target: { value } }) => setInput(value) } />
        <button type='button'
        onClick={ () => setTask(input) }>
          Criar tarefa
        </button>
      </form>
    </div>
  )
}
