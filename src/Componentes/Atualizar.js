import React from "react"
import Listagem from "./Listagem";

function Atualizar({props, muda, setMuda}){
  
  
  return(
    <div>
      {
        muda == false ?
          <>
          <button onClick={()=>props.setMuda(true)}>Voltar</button>
          </>
          :
            <Listagem setMuda={setMuda}/>
      }
    </div>
  )

}

export default Atualizar;