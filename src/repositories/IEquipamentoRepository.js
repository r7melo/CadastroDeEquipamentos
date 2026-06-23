/**
 * Contrato (classe base) que define a interface para o repositório de equipamentos.
 */
export class IEquipamentoRepository {
  /**
   * Recupera todos os equipamentos.
   * @returns {Promise<Array<{id: number|string, nome: string, setor: string|number}>>}
   */
  async getAll() {
    throw new Error("Método 'getAll()' precisa ser implementado.");
  }

  /**
   * Cria um novo registro de equipamento.
   * @param {{nome: string, setor: string|number}} equipamento
   * @returns {Promise<void>}
   */
  async create(equipamento) {
    throw new Error("Método 'create(equipamento)' precisa ser implementado.");
  }

  /**
   * Atualiza um equipamento existente.
   * @param {number|string} id Identificador único do equipamento.
   * @param {{nome: string, setor: string|number}} equipamento Dados atualizados.
   * @returns {Promise<void>}
   */
  async update(id, equipamento) {
    throw new Error("Método 'update(id, equipamento)' precisa ser implementado.");
  }

  /**
   * Exclui um equipamento existente.
   * @param {number|string} id Identificador único do equipamento.
   * @returns {Promise<void>}
   */
  async delete(id) {
    throw new Error("Método 'delete(id)' precisa ser implementado.");
  }
}
