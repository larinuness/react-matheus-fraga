import "./App.css";
import { useState } from "react";
import logoImg from "./assets/logo.png";

function App() {
  const [textoFrase, setTextoFrase] = useState(""); // Estado para armazenar a frase gerada.
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0); // Estado para armazenar a categoria selecionada.

  const allFrases = [
    // Define as categorias e suas frases.
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Acredite em si mesmo e tudo é possível",
        "O caminho para o topo começa no primeiro passo",
        "O otimismo é a fé que leva à realização. Nada pode ser feito sem esperança e confiança",
        "O único modo de fazer um excelente trabalho é amar o que você faz",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia",
      ],
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Cada manhã é uma oportunidade para recomeçar e ser melhor. Bom dia!",
        "Bom dia! Lembre-se de que cada dia é uma nova chance para alcançar seus sonhos",
        "Que o seu dia seja tão brilhante quanto o sol que nasce pela manhã. Bom dia!",
        "A vida é um presente e cada novo dia é uma bênção. Aproveite-o ao máximo. Bom dia!",
        "Bom dia! Sorria, pois a felicidade está esperando por você",
      ],
    },
  ];
  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index); // Atualiza o estado da categoria selecionada.
  }

  function gerarFrase() {
    // Gera uma frase aleatória da categoria atualmente selecionada.
    let numeroAleatorio = Math.floor(
      Math.random() * allFrases[categoriaSelecionada].frases.length
    );
    setTextoFrase(
      `"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`
    );
  }
  return (
    <div className="container">
      <img src={logoImg} className="logo" alt="Logo Frases" />
      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth:
                item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "pink",
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={gerarFrase}>
        Gerar frase
      </button>
      {textoFrase != "" && <p className="texto-frase">{textoFrase}</p>}
    </div>
  );
}

export default App;
