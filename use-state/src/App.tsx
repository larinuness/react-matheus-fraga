import { useState } from "react";

interface InfoAlunoProps {
  nome: string;
  idade: string;
}

export default function App() {
  //começa com o valir inicial vazio ""
  const [inputName, setInputName] = useState("");
  const [inputIdade, setInputIdade] = useState("");
  const [aluno, setAluno] = useState("Sem nome");
  //tipa pra apenas receber esses dois tipos de valores
  const [idade, setIdade] = useState("");
  //tipando o useState
  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();
  const [contador, setContador] = useState(0);

  function mostrarAluno() {
    setInfoAluno({
      nome: aluno,

      idade: idade,
    });

    setAluno(inputName);
    setIdade(inputIdade);

    //limpa depois que clicar no botão
    setInputName("");
    setInputIdade("");
  }
  function aumentar() {
    setContador((valorAtual) => valorAtual + 1);
  }
  function diminuir() {
    //se chegar em 0 não diminui mais
    if (contador === 0) {
      return;
    }
    setContador((valorAtual) => valorAtual - 1);
  }
  return (
    <div>
      <h1>Conhecendo useState</h1>
      <input
        type="text"
        placeholder="Digite o nome:"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Digite a idade:"
        value={inputIdade}
        onChange={(e) => setInputIdade(e.target.value)}
      />
      <br />
      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <hr />
      <h3>
        Bem vindo: {aluno}, sua idade é: {idade}
      </h3>
      <h3>
        Bem vindo: {infoAluno?.nome}, sua idade é: {infoAluno?.idade}
      </h3>
      <hr />
      <br />
      <h1>Contador com useState</h1>
      <button onClick={aumentar}>+</button> {contador}{" "}
      <button onClick={diminuir}>-</button>
    </div>
  );
}
