import React from "react"
import { toast } from 'react-toastify';

function Atualizar({props, setMuda, nome, setNome, setEmail, email, ativo, setAtivo, edita, setUsuarios, usuarios}){

  function atua(e){
    e.preventDefault()

    const usuario = {
      nome: nome,
      email: email,
      status: ativo
  }

  if(verifica()){
    setUsuarios([...usuarios, usuario])
  }

  function veriEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email)
// if(email.indexOf("@") == -1 || email.length < 10 || email.indexOf (".") == -1)
  }

  function verifica(){

    if(!nome){
        toast('✖. Digite um Nome!')
        return;
    }
    if(nome.length < 3){
        toast('✖. Não Aceitamos Nomes Com Menos de 3 Caracteres.')
        return;
    }
    if(!email){
        toast('✖. Digite um e-mail!')
        return;
    }
    if(!veriEmail(email)){
        toast('✖! Digite um e-mail Valido!')
        return;
    }
    return true;
  }

  }

  
  return(
  <div className="edit">
      <div className="vlt">
        <button onClick={()=>setMuda(false)} className="btn btn-outline-secondary"><i class="fa-solid fa-rotate-left"></i></button>
      </div>
      
      <div className="atua">
        <form onSubmit={(e)=>atua(e)}>
            <div className="mb-3">
                <input value={edita == null ? "" : edita.nome} onChange={e=>setNome(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
            </div>
            <div className="mb-3">
                <input value={edita == null ? "" : edita.email} onChange={e=>setEmail(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
                <label htmlFor="exampleInputPassword1" className="form-label">E-mail</label>
            </div>
            <div className="mb-3 form-check">
                <input checked={ativo} onChange={e=>setAtivo(e.target.checked)} type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Ativo</label>
            </div>
            <button type="submit" className="btn btn-primary">Atualizar</button>
          </form>
      </div>
  </div> 
  )
}

export default Atualizar;