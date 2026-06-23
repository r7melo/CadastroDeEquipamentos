import { useState } from 'react';
import { equipamentoRepository } from '../../repositories';

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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await equipamentoRepository.create(equipamento);

      setEquipamento({
        nome: '',
        setor: '',
      });

      onSave();
    } catch (err) {
      console.error("Erro ao salvar equipamento:", err);
      alert("Erro ao salvar equipamento.");
    }
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