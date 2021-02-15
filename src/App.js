import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import HooksCounter from './components/HooksCounter';
import Todo from './components/Todo';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
        <HooksCounter />
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
