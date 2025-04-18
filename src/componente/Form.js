import { useState } from "react";


function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
   
   console.log({name},{password})
   



  
  };
  var [name,setName] = useState()
var [password,setPassword] = useState()
  return (
    <div>
      <h1>cadastrar usuario</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="digite seu nome"
          onChange={(e) => setName (e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="digite sua senha"
            onChange ={(e) => setPassword (e.target.value)}
            />
        </div>
        
          <button type="submit" >cadastrar usuario</button>
        
      </form>
    </div>
  );
}

export default Form;
