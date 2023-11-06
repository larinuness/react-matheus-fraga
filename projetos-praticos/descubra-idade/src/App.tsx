import { FormEvent, useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularIdade(event: FormEvent) {
    event.preventDefault();
    var now = new Date();
    var year = now.getFullYear();
    var result = year - Number(ano);
    if (Number(ano) > year) {
      setResultado("Ainda não nasceu");
    } else {
      setResultado(`${nome} tem: ${result} anos`); // Atualize o estado usando setResultado
    }
  }
  return (
    <div className="app">
      <h1 className="title">Descubra sua idade</h1>
      <div className="container">
        <label>Digite seu nome:</label>
        <input
          className="entrada"
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label>Digite o ano que nasceu:</label>
        <input
          type="number"
          className="entrada"
          min="0"
          step="1"
          placeholder="Digite o ano que nasceu"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        />
        <button className="button" onClick={calcularIdade}>
          Descobrir idade
        </button>
      </div>
      {resultado != "" && <p className="idade">{resultado}</p>}
    </div>
  );
}

export default App;
