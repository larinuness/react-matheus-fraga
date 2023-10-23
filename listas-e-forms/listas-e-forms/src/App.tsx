import { useState } from "react";
import './App.css'

function App() {
  // Estado 'input' para a entrada do nome da tarefa
  const [input, setInput] = useState<string>("");

  // Estado 'editTask' para controlar a edição da tarefa
  const [editTask, setEditTask] = useState({ enable: false, task: "" });

  // Estado 'tasks' para armazenar a lista de tarefas
  // Tipar pra ser uma lista de string
  const [tasks, setTasks] = useState<string[]>([
  
  ]);

  // Função para adicionar uma nova tarefa à lista
  function handleRegister() {
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
  }

  // Função para excluir uma tarefa
  function handleDelete(item: string) {
    // Filtra as tarefas para remover a que corresponde ao item passado
    const removeTask = tasks.filter((task) => task !== item);
    // Atualiza o estado 'tasks' com as tarefas restantes
    setTasks(removeTask);
  }

  // Função para editar uma tarefa
  function handleEdit(item: string) {
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

  // Renderização da interface do aplicativo
  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <div className="teste"> <input
        type="text"
        placeholder="Digite o nome da tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-update-button"onClick={handleRegister}>{editTask.enable ? "Atualizar" : "Adicionar tarefa"}</button></div>
      <hr />

      {tasks.map((task, index) => (
        <section key={index}>
          <span>{task}</span>
          <button className="update"onClick={() => handleEdit(task)}>Editar</button>
          <button className="delete"onClick={() => handleDelete(task)}>Excluir</button>
        </section>
      ))}
    </div>
  );
}

export default App;
