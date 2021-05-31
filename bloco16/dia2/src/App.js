import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';

export const store = createStore(rootReducer);


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
