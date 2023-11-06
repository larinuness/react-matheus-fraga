import { useState } from "react";

interface UserProps {
  nome: string;
  cargo: string;
}

function App() {
  const [user, setUser] = useState<UserProps>({
    nome: "Visitante",
    cargo: "",
  });
  function handleLogin() {
    setUser({nome: "Sujeito Desenvolvedor", cargo: "Desenvolvedor"})
  }
  function handleLogout() {
    setUser({nome: "Visitante", cargo: ""})
  }

  return (
    <div>
      <h1>Conhecendo o useState</h1>
      <button onClick={handleLogin}>Entrar</button>
      <button onClick={handleLogout}>Sair</button>
      <h4>Olá {user.nome}</h4>
      <strong>{user.cargo}</strong>
    </div>
  );
}

export default App;
