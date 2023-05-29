function Listagem(props){

    return (
        <div className="caixa">
           <h2>Listagem</h2>

            {
                props.usuarios.map(item => 
                    <div style={{border:"2px solid #bdbdbd"}}>  
                        <p>Nome: {item.nome}</p>
                        <p>Status: {item.status == true ? "Ativo" : "Banido"}</p>
                    </div>
                )
             
            }
        </div>
    )   
}

export default Listagem;