import './Card.css';

export default function Card({ nome, setor }) {
  return (
    <div className="card">
      <h3>{nome}</h3>
      <p>Setor: {setor}</p>
    </div>
  );
}