import { createStore, combineReducers } from 'redux';
import Tempo from './components/Tempo';
import rootReducer from './reducers/reducer';

export const store = createStore(rootReducer);


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Tempo />
    </div>
  );
}

export default App;
