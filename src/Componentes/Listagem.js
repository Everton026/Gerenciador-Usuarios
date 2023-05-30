function Listagem(props){

    return (
        <div className="caixa">
           <h2>Listagem</h2>

            {
                props.usuarios.map(item => 
                    <div className="status" key={item.nome}>  
                        <p>Nome: {item.nome}</p>
                        <p>Email: {item.email}</p>
                        <p>Status: {item.status == true ? "Ativo ✔" : "Banido ✖"}</p>
                    </div>
                )
             
            }
        </div>
    )   
}

export default Listagem;