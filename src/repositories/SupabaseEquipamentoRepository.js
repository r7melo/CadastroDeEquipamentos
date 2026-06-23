import { IEquipamentoRepository } from "./IEquipamentoRepository";
import { supabase } from "../supabaseClient";

/**
 * Implementação do repositório de equipamentos utilizando o banco de dados Supabase.
 */
export class SupabaseEquipamentoRepository extends IEquipamentoRepository {
  /**
   * Busca todos os registros da tabela 'equipamentos' ordenados por data de criação.
   * @returns {Promise<Array<{id?: number, nome: string, setor: number}>>}
   */
  async getAll() {
    if (!supabase) {
      throw new Error("Supabase não está configurado. Adicione credenciais válidas no arquivo .env.");
    }

    const { data, error } = await supabase
      .from('equipamentos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Erro ao buscar dados do Supabase:", error);
      throw error;
    }
    return data || [];
  }

  /**
   * Insere um novo registro na tabela 'equipamentos'.
   * @param {{nome: string, setor: string|number}} equipamento
   * @returns {Promise<void>}
   */
  async create(equipamento) {
    if (!supabase) {
      throw new Error("Supabase não está configurado. Adicione credenciais válidas no arquivo .env.");
    }

    const { error } = await supabase
      .from('equipamentos')
      .insert([
        {
          nome: equipamento.nome,
          setor: Number(equipamento.setor)
        }
      ]);

    if (error) {
      console.error("Erro ao inserir dados no Supabase:", error);
      throw error;
    }
  }
}
