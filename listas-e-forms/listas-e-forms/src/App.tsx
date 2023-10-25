import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "./App.css";

function App() {
  // Usar pra fazer referência a algo
  // Tipar pra não dar erro
  // O tipo é uma Tag do HTML
  const inputRef = useRef<HTMLInputElement>(null); // Cria uma ref para o elemento de entrada de texto
  const firstRender = useRef(true); // Utilizado para rastrear o primeiro render

  // Estado 'input' para a entrada do nome da tarefa
  const [input, setInput] = useState<string>("");

  // Estado 'editTask' para controlar a edição da tarefa
  const [editTask, setEditTask] = useState({ enable: false, task: "" });

  // Estado 'tasks' para armazenar a lista de tarefas
  // Tipar pra ser uma lista de string
  const [tasks, setTasks] = useState<string[]>([]);

  // O useEffect é tipo o initState do Flutter
  useEffect(() => {
    // Dessa forma com a função anônima faz e o array de dependência vazia,
    // ele vai executar apenas uma vez, quando o componente for montado na tela
    const tarefasSalvas = localStorage.getItem("@cursoreact");
    if (tarefasSalvas) {
      setTasks(JSON.parse(tarefasSalvas));
    }
  }, []);

  // Toda vez que o estado "tasks" mudar ele vai salvar
  useEffect(() => {
    // Se entrar é porque é a primeira vez que roda o componente
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem("@cursoreact", JSON.stringify(tasks));
    console.log("useEffect foi chamado");
  }, [tasks]);

  // Função para excluir uma tarefa
  function handleDelete(item: string) {
    // Filtra as tarefas para remover a que corresponde ao item passado
    const removeTask = tasks.filter((task) => task !== item);
    // Atualiza o estado 'tasks' com as tarefas restantes
    setTasks(removeTask);
  }

  // Função para editar uma tarefa
  function handleEdit(item: string) {
    inputRef.current?.focus(); // Define o foco no campo de entrada
    // Define o campo de entrada como o valor da tarefa selecionada
    setInput(item);
    // Configura 'editTask' para habilitar a edição
    setEditTask({
      enable: true,
      task: item,
    });
  }

  // Função para salvar as edições em uma tarefa
  function handleSaveEdit() {
    // Encontra o índice da tarefa a ser editada no array 'tasks'
    const findIndexTask = tasks.findIndex((task) => task === editTask.task);
    // Cria uma cópia do array 'tasks' e atualiza a tarefa editada
    const allTasks = [...tasks];
    allTasks[findIndexTask] = input;
    // Atualiza o estado 'tasks' com as tarefas editadas e limpa o campo de entrada
    setTasks(allTasks);
    setInput("");
  }

  // Toda vez que tiver tasks ele vai chamar o useMemo
  // Só renderiza quando mudar algo na lista add/update/delete
  const totalTasks = useMemo(() => {
    return tasks.length; // Calcula o número total de tarefas
  }, [tasks]); // Dependência: quando tasks muda, recalcule totalTasks

  // Função para adicionar uma nova tarefa à lista
  // Só rendereiza quando input ou tasks mudar
  const handleRegister = useCallback(() => {
    if (!input) {
      alert("Preencha o nome da tarefa");
      return;
    }
    if (editTask.enable) {
      handleSaveEdit();
      return;
    }
    // Adiciona a nova tarefa ao array 'tasks' usando o operador spread
    setTasks((tarefas) => [...tarefas, input]);
    // Limpa o campo de entrada
    setInput("");
  }, [input, tasks]);

  // Renderização da interface do aplicativo
  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Digite o nome da tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef} // Passa a referência do useRef
        />
        <button className="add-update-button" onClick={handleRegister}>
          {editTask.enable ? "Atualizar" : "Adicionar tarefa"}
        </button>
      </div>
      <hr />
      <br />
      {/* Melhor usar o useMemo pois ele não renderiza a tela sempre que mudar algo no onChange */}
      <strong>Você tem {totalTasks} tarefas</strong>
      {/* Exemplo usando o useState padrão */}
      <strong>Você tem {tasks.length} tarefas</strong>
      <br />

      {tasks.map((task, index) => (
        <section key={index} className="section">
          <span>{task}</span>
          <button className="update" onClick={() => handleEdit(task)}>
            Editar
          </button>
          <button className="delete" onClick={() => handleDelete(task)}>
            Excluir
          </button>
        </section>
      ))}
    </div>
  );
}

export default App;
