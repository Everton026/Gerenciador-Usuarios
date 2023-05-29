import React from "react";

function Cadastro(usuarios, setUsuarios) {

    const [nome, setNome] = React.useState("");
    const [ativo, setAtivo] = React.useState(false);

    function salvar(e){
        e.preventDefault()

        const usuario = {
            nome: nome,
            status: ativo
        }

        // O operador ... se chama spread ou "despejar"
        setUsuarios([...usuarios, usuario])
        //usuarios.push(usuario)
    }

    return (
             <div className="caixa">
                <h2>Cadastro</h2>
                 <form onSubmit={(e)=>salvar(e)}>
                    <div class="mb-3 form-floating">
                        <input onChange={e=>setNome(e.target.value)} class="form-control" id="txtNome" placeholder="None"/>
                        <label for="txtNome" class="form-label" >Nome</label>
                    </div>
                    <div class="mb-3 form-check">
                        <input checked={ativo} onChange={e=>setAtivo(e.target.checked)} type="checkbox" class="form-check-input" id="cboxStatus"/>
                        <label class="form-check-label" for="cboxStatus">Ativo</label>
                    </div>
                        <button type="submit" class="btn btn-primary">Salvar</button>
                </form>
            </div>
    )

}

export default Cadastro;