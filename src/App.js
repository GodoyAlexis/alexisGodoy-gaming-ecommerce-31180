// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CardList from "./components/CardList/CardList";


// or less ideally

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardList title={"Leggins"}/>
    </div>
  );
}

export default App;
