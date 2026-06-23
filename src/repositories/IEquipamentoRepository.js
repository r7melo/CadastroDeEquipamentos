/**
 * Contrato (classe base) que define a interface para o repositório de equipamentos.
 */
export class IEquipamentoRepository {
  /**
   * Recupera todos os equipamentos.
   * @returns {Promise<Array<{nome: string, setor: string|number}>>}
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
}
