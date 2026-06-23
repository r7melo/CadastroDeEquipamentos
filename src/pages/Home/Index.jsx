import { useState } from 'react';
import Equipamento from "../../components/Equipamento/Index";
import ListaEquipamentos from "../../components/ListaEquipamentos/Index";

export default function Home() {
  const [reload, setReload] = useState(false);

  function atualizarLista() {
    setReload(!reload);
  }

  return (
    <>
      <h1>CADASTRO DE EQUIPAMENTOS</h1>
      <Equipamento onSave={atualizarLista} />
      <ListaEquipamentos reload={reload} />
    </>
  );
}