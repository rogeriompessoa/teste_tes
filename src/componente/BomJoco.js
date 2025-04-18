import { useState } from "react";

function BomJogo() {
  const [name, setName] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    alert (`use o nome ${name}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          placeholder="digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">enviar</button>
      </form>
    </div>
  );
}

export default BomJogo;
