import './App.css';

//components
import Header from './components/Header';
import Linkform from './components/Linkform';
import Links from './components/Links';

function App() {
  return (
    <div>
      <Header/>
      <div className='App-bottom'>
      <Linkform/>
      <Links/>
      </div>
    </div>
  );
}

export default App;
