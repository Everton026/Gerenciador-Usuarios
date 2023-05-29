import React from "react";
import "./App.css"
import Cadastro from "./Componentes/Cadastro";
import Listagem from "./Componentes/Listagem"

function App() {

    // Como funciona objetos em JS
    const usuario = {
        // chave: valor
        nome: "Everton",
        idade: 18,
        status: true,
        endereco: {
            rua: "Rua X",
            numero: 139,
            complemento: "ap 20"
        },
        vacinasCovid19: ["Pfizer", "Pfizer", "Pfizer", "J&J"]
    }

    // Contabiliza quantos itens tem dentro do array
    const qtdVacina = usuario.vacinasCovid19.length - 1

    // console.log(usuario)
    // console.log(usuario.endereco.rua, usuario.endereco.numero)
    // console.log(Object.keys(usuario))
    
    // Como usar um array com objetos dentro
    const usuarios_padrao = [
        {nome: "Lores", status: false},
        {nome: "Arthur", status: true},
        {nome: "Zezin", status: true},
        {nome: "Kelvin", status: true}
    ]

    
     const [usuarios, setUsuarios] = React.useState(usuarios_padrao);

    //console.log(usuarios)

  return (
    <div className="container">
    
        <div className="d-flex justify-content-around">

        <Listagem usuarios={usuarios}/>

        <Cadastro usuarios={usuarios} setUsuarios={setUsuarios}/>

        </div>
        

    </div>
  );
}



export default App;
