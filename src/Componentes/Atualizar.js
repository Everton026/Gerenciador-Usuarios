import React from "react"
import Listagem from "./Listagem";

function Atualizar(){
  
  const [edit, setEdita] = React.useState(false)
  
  return(
    <div>
      {
        edit == false ?
          <>
          <button onClick={()=>setEdita(true)} >Voltar</button>
          </>
          :
            <Listagem setEdita={setEdita}/>
      }
    </div>
  )

}

export default Atualizar;