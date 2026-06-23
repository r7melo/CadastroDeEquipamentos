import { useEffect, useState } from 'react';
import Card from '../Cards/Index';

export default function ListaEquipamentos({reload}) {

  const [listaEquipamentos, setLista] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('equipamentos')) || [];
    setLista(dados);
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