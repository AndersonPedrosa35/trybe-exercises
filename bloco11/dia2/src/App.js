import Pokedex from "./components/Pokedex";
import pokemons from './data';
import './posicao.css';

function App() {
  return (
    <section>
      <h1>Pokemons</h1>
      <section className='posicao'>
        {pokemons.map((pokemon) => <Pokedex user={ pokemon }/>)}
      </section>
    </section>
  );
}

export default App;
