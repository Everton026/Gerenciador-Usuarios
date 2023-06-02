import { useState } from "react";
import { toast } from 'react-toastify';

function Cadastro({usuarios, setUsuarios, edita}){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [ativo, setAtivo] = useState(false);

    function salvar(e){
        e.preventDefault()
        
        const usuario = {
            nome: nome,
            email: email,
            status: ativo
        }
        //setUsuarios((velho)=>{velho.push(usuario)})
        // O operador ... se chama spread ou "despejar"
        //usuarios.push(usuario)
        
        if(verifica()){
            setUsuarios([...usuarios, usuario])
        }
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

    return (
             <div className="registro">
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
                    <div>
                        <img src="./assets/Mordecai.png" alt=""/>
                    </div>
            </div>
    )

}

export default Cadastro;