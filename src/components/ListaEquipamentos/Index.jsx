import { useEffect, useState } from 'react';
import Card from '../Cards/Index';
import EquipamentoModal from '../EquipamentoModal/Index';
import { equipamentoRepository } from '../../repositories';

/**
 * Componente que lista os equipamentos cadastrados e gerencia a exibição do modal de edição/exclusão.
 */
export default function ListaEquipamentos({ reload }) {
  const [listaEquipamentos, setLista] = useState([]);
  const [selectedEquipamento, setSelectedEquipamento] = useState(null);

  // Busca a lista de equipamentos do repositório ativo
  async function carregarEquipamentos() {
    try {
      const dados = await equipamentoRepository.getAll();
      setLista(dados);
    } catch (err) {
      console.error("Erro ao buscar equipamentos:", err);
    }
  }

  // Recarrega sempre que a prop 'reload' for alterada pelo formulário pai
  useEffect(() => {
    carregarEquipamentos();
  }, [reload]);

  /**
   * Atualiza a lista local e fecha o modal após salvar alterações.
   */
  function handleUpdate() {
    setSelectedEquipamento(null);
    carregarEquipamentos();
  }

  /**
   * Atualiza a lista local e fecha o modal após excluir o item.
   */
  function handleDelete() {
    setSelectedEquipamento(null);
    carregarEquipamentos();
  }

  return (
    <>
      {listaEquipamentos.map((item, index) => (
        <Card
          key={item.id || index}
          nome={item.nome}
          setor={item.setor}
          onClick={() => setSelectedEquipamento(item)}
        />
      ))}

      {selectedEquipamento && (
        <EquipamentoModal
          equipamento={selectedEquipamento}
          onClose={() => setSelectedEquipamento(null)}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      )}
    </>
  );
}