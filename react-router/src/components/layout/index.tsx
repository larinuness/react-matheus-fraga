import { Outlet } from "react-router-dom";
import { Header } from "../header";

export function Layout(){
    return(
        // Tudo o que está acima do outlet vai ser redenzirado como filho 
        // Header sempre fixo em cima e conteudo dentro
        // Footer fixado embaixo (não é filho)
        <>
        <Header/>
        <Outlet/>
        <br /><br />
        <footer>
            <span>Todos os direitos reservados @2024</span>
        </footer>
        </>
    )
}