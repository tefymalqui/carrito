import './App.css';
import ItemListContainer from './components/catalogo/catalogo';
import NavBar from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
