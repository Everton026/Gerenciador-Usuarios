import React from "react";
import "./App.css"
import Cadastro from "./Componentes/Cadastro";
import Listagem from "./Componentes/Listagem";
import Atualizar from "./Componentes/Atualizar";    
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
        {nome: "Lores", email:"lolis@gmail.com", status: false},
        {nome: "Arthur", email:"arthurdoval@gmail.com", status: true},
        {nome: "Zezin",  email:"ainzedamanga@gmail.com", status: true},
        {nome: "Kelvin",  email:"kevinx@gmail.com", status: true}
    ]

     const [usuarios, setUsuarios] = React.useState(usuarios_padrao);
     const [edita, setEdita] = React.useState(null);
     const [muda, setMuda] = React.useState(false)
    //console.log(usuarios)

  return (
    <div className="container">
        <ToastContainer
            position="top-right" 
            autoClose={5000}        
            hideProgressBar={false}            
            newestOnTop={false}            
            closeOnClick 
            rtl={false}                       
            pauseOnFocusLoss            
            draggable            
            pauseOnHover            
            theme="dark"           
        />                          
               
            <div className="pai" >

            {!muda ? 
            (
                <>
                    <Listagem usuarios={usuarios} setUsuarios={setUsuarios} setEdita={setEdita} setMuda={setMuda}/>
                    <Cadastro usuarios={usuarios} setUsuarios={setUsuarios} edita={edita}/>
                </>
            )
              : <Atualizar setMuda={setMuda} edita={edita} usuarios={usuarios} setUsuarios={setUsuarios}/> }
           
            </div>
    
    </div>
  );
}


export default App;