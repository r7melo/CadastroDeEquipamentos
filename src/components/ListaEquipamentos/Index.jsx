import { useEffect, useState } from 'react';
import Card from '../Cards/Index';
import { equipamentoRepository } from '../../repositories';

export default function ListaEquipamentos({reload}) {

  const [listaEquipamentos, setLista] = useState([]);

  useEffect(() => {
    async function carregarEquipamentos() {
      try {
        const dados = await equipamentoRepository.getAll();
        setLista(dados);
      } catch (err) {
        console.error("Erro ao buscar equipamentos:", err);
      }
    }
    carregarEquipamentos();
  },[reload]);

  return (
    <>
      {
        listaEquipamentos.map((item, index) => (
            <Card key={index} nome={item.nome} setor={item.setor} />
        ))
      }
    </>
  );
}