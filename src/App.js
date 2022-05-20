// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// or less ideally

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title={"Leggins"} />
    </div>
  );
}

export default App;
