import React from "react"

function Atualizar({props, setMuda, edita, ativo, setAtivo,setEmail,setNome,salvar}){

  
  return(
    <div className="edit">
      <div>
        <button onClick={()=>setMuda(false)}>Voltar</button>
      </div>
      <div>
          <h2>Cadastro</h2>
                 <form onSubmit={(e)=>salvar(e)}>
                    <div className="mb-3 form-floating">
                        <input value={edita == null ? "" : edita.nome} onChange={e=>setNome(e.target.value)} className="form-control" id="txtNome" placeholder="None"/>
                        <label htmlFor="txtNome" className="form-label">Nome</label>
                    </div>
                    <div className="mb-3 form-floating">
                        <input value={edita == null ? "" : edita.email} onChange={e=>setEmail(e.target.value)} className="form-control" id="txtEmail" placeholder="None"/>
                        <label htmlFor="txtEmail" className="form-label">E-mail</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input checked={ativo} onChange={e=>setAtivo(e.target.checked)} type="checkbox" className="form-check-input" id="cboxStatus"/>
                        <label className="form-check-label" htmlFor="cboxStatus">Ativo</label>
                    </div>
                        <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
      </div>
    </div>
  )

}

export default Atualizar;