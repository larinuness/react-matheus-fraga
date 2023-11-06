import { Aluno } from "./components/Aluno";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div>
      <Header/>
      <Aluno nome="Larissa" idade={25} />
      <Aluno nome="Viviane" idade={25} />
      <Footer/>
    </div>
  );
}




