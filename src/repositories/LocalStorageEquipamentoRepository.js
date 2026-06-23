import { IEquipamentoRepository } from "./IEquipamentoRepository";

/**
 * Implementação do repositório de equipamentos utilizando LocalStorage.
 */
export class LocalStorageEquipamentoRepository extends IEquipamentoRepository {
  /**
   * Recupera todos os equipamentos do LocalStorage.
   * @returns {Promise<Array<{nome: string, setor: string|number}>>}
   */
  async getAll() {
    return JSON.parse(localStorage.getItem('equipamentos')) || [];
  }

  /**
   * Insere um novo equipamento no LocalStorage.
   * @param {{nome: string, setor: string|number}} equipamento
   * @returns {Promise<void>}
   */
  async create(equipamento) {
    const lista = await this.getAll();
    lista.push(equipamento);
    localStorage.setItem('equipamentos', JSON.stringify(lista));
  }
}
