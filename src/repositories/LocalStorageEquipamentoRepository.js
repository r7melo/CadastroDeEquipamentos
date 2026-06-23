import { IEquipamentoRepository } from "./IEquipamentoRepository";

/**
 * Implementação do repositório de equipamentos utilizando LocalStorage.
 */
export class LocalStorageEquipamentoRepository extends IEquipamentoRepository {
  /**
   * Recupera todos os equipamentos do LocalStorage, gerando IDs únicos para registros antigos se necessário.
   * @returns {Promise<Array<{id: number|string, nome: string, setor: string|number}>>}
   */
  async getAll() {
    const lista = JSON.parse(localStorage.getItem('equipamentos')) || [];
    let houveAlteracao = false;

    // Garante que todos os registros possuam um ID único (migração de dados legados)
    const listaMigrada = lista.map((item, index) => {
      if (item.id === undefined || item.id === null) {
        item.id = Date.now() + index;
        houveAlteracao = true;
      }
      return item;
    });

    if (houveAlteracao) {
      localStorage.setItem('equipamentos', JSON.stringify(listaMigrada));
    }

    return listaMigrada;
  }

  /**
   * Insere um novo equipamento no LocalStorage com um ID único.
   * @param {{nome: string, setor: string|number}} equipamento
   * @returns {Promise<void>}
   */
  async create(equipamento) {
    const lista = await this.getAll();
    const novoEquipamento = {
      ...equipamento,
      id: Date.now() // Gera ID numérico único
    };
    lista.push(novoEquipamento);
    localStorage.setItem('equipamentos', JSON.stringify(lista));
  }

  /**
   * Atualiza um equipamento no LocalStorage pelo ID.
   * @param {number|string} id
   * @param {{nome: string, setor: string|number}} equipamento
   * @returns {Promise<void>}
   */
  async update(id, equipamento) {
    const lista = await this.getAll();
    const listaAtualizada = lista.map(item => {
      // Comparação flexível (==) caso o ID venha como string ou número
      if (item.id == id) {
        return { ...item, nome: equipamento.nome, setor: equipamento.setor };
      }
      return item;
    });
    localStorage.setItem('equipamentos', JSON.stringify(listaAtualizada));
  }

  /**
   * Remove um equipamento do LocalStorage pelo ID.
   * @param {number|string} id
   * @returns {Promise<void>}
   */
  async delete(id) {
    const lista = await this.getAll();
    const listaFiltrada = lista.filter(item => item.id != id);
    localStorage.setItem('equipamentos', JSON.stringify(listaFiltrada));
  }
}
