import { useState } from 'react';

export default function Equipamento({onSave}) {

  const [equipamento, setEquipamento] = useState({
    nome: '',
    setor: '',
  });

  function handleChange(e) {
    setEquipamento({
      ...equipamento,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const listaEquipamentos = JSON.parse(localStorage.getItem('equipamentos')) || [];
    listaEquipamentos.push(equipamento);

    localStorage.setItem('equipamentos', JSON.stringify(listaEquipamentos));

    setEquipamento({
      nome: '',
      setor: '',
    });

    onSave();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={equipamento.nome}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Setor:</label>
        <input
          type="number"
          name="setor"
          value={equipamento.setor}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}