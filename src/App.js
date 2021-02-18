import { useSelector } from 'react-redux';
import './App.css';
import Signin from './components/Signin';
import Todo from './components/Todo';

function App() {

  const signin = useSelector(state => state.signin)

  if(signin.user!==null){
    return <Todo />
  }
  return (
    <div className="App">
      <div className="App-header">
        <Signin />
      </div>
    </div>
  )
}

export default App;
