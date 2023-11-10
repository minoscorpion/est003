// LinhaLivro.js
import React from 'react';
import { ControleEditora } from '../controle/ControleEditora';

const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir }) => {

  const nomeEditora = controleEditora ? controleEditora.getNomeEditora(livro.codEditora) : '';

  return (
    <tr>
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

export default LinhaLivro;