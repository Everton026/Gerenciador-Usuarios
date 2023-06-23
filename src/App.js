import React, { useCallback } from "react";
import "./App.css"
import Cadastro from "./Componentes/Cadastro";
import Listagem from "./Componentes/Listagem";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import supabase from "./supabase";

function App() {

     const [usuarios, setUsuarios] = React.useState([buscaTodos]);

     const [telaEdita, setTelaEdita] = React.useState(false);

     function buscaTodos(){
        supabase.from("Usuarios").select()
        .then(reponse => {
            console.log("Conexão bem sucedida!")
            console.log(reponse)
            setUsuarios(reponse.data)
        })
        .catch(reponse => {
            console.log("Deu erro na conexão!")
            console.log(reponse)
        });
     }
     
     React.useEffect(()=>{
        buscaTodos();
    },[])

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

            <Listagem usuarios={usuarios} setUsuarios={setUsuarios}/>

            {telaEdita ? <Cadastro setTelaEdita={setTelaEdita} /> : <Cadastro usuarios={usuarios} setUsuarios={setUsuarios}
            setTelaEdita={setTelaEdita} />}

        </div>
        
    </div>
  );
}



export default App;
