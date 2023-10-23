import "./App.css";
import { useState, FormEvent } from "react";
import logo from "./assets/logo.png";

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolInput] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  //tipando o tipo do pârametro
  function calcular(event: FormEvent) {
    event.preventDefault();
    let calculo = alcoolInput / gasolinaInput;
    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar Álcool!",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    } else {
      setInfo({
        title: "Compensa usar Gasolina!",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    }
  }

  function formatarMoeda(valor: number){
    let valorFormatado = valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })

    return valorFormatado;
  }
  return (
    <div>
      <main className="container">
        <img className="logo" src={logo} alt="" />
        <h1 className="title">Qual melhor opção?</h1>
        <form className="form" onSubmit={calcular}>
          <label htmlFor="">Álcool (preço por litro)</label>
          <input
            type="number"
            placeholder="4,90"
            className="entrada"
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            //converte a string pra number
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label htmlFor="">Gasolina (preço por litro)</label>
          <input
            type="number"
            placeholder="4,90"
            className="entrada"
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            //converte a string pra number
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <div className="button-container">
            <input type="submit" value="Calcular" className="button" />
          </div>
        </form>
        {/* checa se a info né undefined antes da validação */}
        {info && Object.keys(info).length > 0 && (
          <section className="result">
            <h2 className="result-title">{info.title}</h2>
            <span>Álcool {info.alcool}</span>
            <span>Gasolina {info.gasolina}</span>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
