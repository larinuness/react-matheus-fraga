import { useState } from "react";

import "./App.css";

function App() {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState("Larissa Nunes")

  return (
    <div>
      <button onClick={() => setSigned(true)}>Entrar</button>
      {/* Exemplo 1 */}
      {signed ? <h1>Bem vinda Larissa Nunes!</h1> : <h1>Nada</h1>}

      {/* Exemplo 2 */}
      {signed && <h1>Bem vinda Larissa Nunes!</h1>}

      {/* Exemplo 3 */}
      {signed && (
        <div>
          <h1>Bem vinda Larissa Nunes!</h1>
          <p>Testando 1,2,3...</p>
          <button onClick={() => setSigned(false)}>Sair</button>
        </div>
      )}
      {/* Exemplo 4 */}
      {name.length >= 5 && <h1>Nome muito grande</h1>}
    </div>
  );
}

export default App;
