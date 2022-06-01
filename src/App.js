// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

// or less ideally

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer title={"Leggins"} /> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
