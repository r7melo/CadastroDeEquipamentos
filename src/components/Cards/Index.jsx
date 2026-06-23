import './Card.css';

/**
 * Componente visual do Card de Equipamento.
 */
export default function Card({ nome, setor, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h3>{nome}</h3>
      <p>Setor: {setor}</p>
    </div>
  );
}