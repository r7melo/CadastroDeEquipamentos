import { LocalStorageEquipamentoRepository } from "./LocalStorageEquipamentoRepository";
import { SupabaseEquipamentoRepository } from "./SupabaseEquipamentoRepository";

const dataSource = import.meta.env.VITE_DATA_SOURCE || 'localstorage';

let repositoryInstance;

if (dataSource === 'supabase') {
  repositoryInstance = new SupabaseEquipamentoRepository();
} else {
  repositoryInstance = new LocalStorageEquipamentoRepository();
}

/**
 * Instância ativa do repositório de equipamentos injetada na aplicação.
 * @type {import("./IEquipamentoRepository").IEquipamentoRepository}
 */
export const equipamentoRepository = repositoryInstance;
// 
