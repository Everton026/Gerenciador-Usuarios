function Listagem(props){

    function remover(usuario){
        const novos_usuarios = props.usuarios.filter(item => item.nome != usuario.nome)
        props.setUsuarios(novos_usuarios)
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
                       <div className="sla">
                            <button onClick={()=> remover(item)} className="btn btn-outline-secondary">
                                <i className="fa-solid fa-trash-can"></i></button>
                            <button className="btn btn-outline-secondary"><i class="fa-solid fa-pen-to-square"></i></button>
                        </div> 
                    </div>
                )
             
            }
        </div>
    )   
}

export default Listagem;