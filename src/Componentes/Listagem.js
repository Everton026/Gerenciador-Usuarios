import React from "react"

function Listagem(props){

    function remover(usuario){
        const novos_usuarios = props.usuarios.filter(item => item.nome != usuario.nome)
        props.setUsuarios(novos_usuarios)
    }
    function atualizar(usuario){
        props.setMuda(false)
    }

    return (
        <div className="caixa">
           <h2>Listagem</h2>

            {
                props.usuarios.map(item => 
                    <div className="status" key={item.nome}>  
                        <p>Nome: {item.nome}</p>
                        <p>Email: {item.email}</p>
                        <p>Status: {item.status == true ? "Ativo ✔" : "Banido ✖"}</p>
                        
                        <div className="d-flex sts">
                            <button onClick={()=> remover(item)} className="btn btn-outline-secondary"><i className="fa-solid fa-trash-can flex-fill"></i></button>
                            <button onClick={()=> atualizar(item) } className="btn btn-outline-secondary"><i className="fa-solid fa-user-pen flex-fill"></i></button>
                        </div>

                    </div>
                )
            }
        </div>
    )   
}

export default Listagem;