import { useState, useEffect } from 'react';
import { equipamentoRepository } from '../../repositories';

/**
 * Componente de modal para visualização, edição e exclusão de equipamentos.
 */
export default function EquipamentoModal({ equipamento, onClose, onUpdate, onDelete }) {
  const [nome, setNome] = useState('');
  const [setor, setSetor] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (equipamento) {
      setNome(equipamento.nome);
      setSetor(equipamento.setor);
    }
  }, [equipamento]);

  /**
   * Salva as alterações editadas no banco/localstorage.
   */
  async function handleSave(e) {
    e.preventDefault();
    if (!nome.trim() || !setor) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);
    try {
      await equipamentoRepository.update(equipamento.id, { nome, setor });
      onUpdate();
    } catch (err) {
      console.error("Erro ao atualizar:", err);
      alert("Erro ao atualizar o equipamento.");
    } finally {
      setLoading(false);
    }
  }

  /**
   * Exclui o equipamento atual após confirmação.
   */
  async function handleDelete() {
    const confirmar = window.confirm(`Tem certeza que deseja excluir o equipamento "${equipamento.nome}"?`);
    if (!confirmar) return;

    setLoading(true);
    try {
      await equipamentoRepository.delete(equipamento.id);
      onDelete();
    } catch (err) {
      console.error("Erro ao excluir:", err);
      alert("Erro ao excluir o equipamento.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Detalhes do Equipamento</h2>
          <button className="close-btn" onClick={onClose} aria-label="Fechar">&times;</button>
        </div>

        <form onSubmit={handleSave} className="modal-form">
          <div>
            <label>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div>
            <label>Setor:</label>
            <input
              type="number"
              value={setor}
              onChange={(e) => setSetor(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div className="modal-actions">
            <button type="submit" className="save-btn" disabled={loading}>
              {loading ? "Salvando..." : "Salvar"}
            </button>
            <button type="button" className="delete-btn" onClick={handleDelete} disabled={loading}>
              {loading ? "Excluindo..." : "Excluir"}
            </button>
            <button type="button" className="cancel-btn" onClick={onClose} disabled={loading}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
