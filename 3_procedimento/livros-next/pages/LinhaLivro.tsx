import React from 'react';
import { Livro } from '../classes/modelo/Livro';  // Certifique-se de ajustar o caminho

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{livro.autores.join(', ')}</td>
      <td>{livro.codEditora}</td>
      <td>
        <button onClick={excluir} className="btn btn-danger">
          Excluir
        </button>
      </td>
    </tr>
  );
};
