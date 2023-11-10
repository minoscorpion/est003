// LivroLista.js
import React, { useState, useEffect } from 'react';
import { ControleLivros } from '../controle/ControleLivros';

import LinhaLivro from '../controle/LinhaLivro';

//const controleLivro = new ControleLivros();


const LivroLista = ( {controleLivro} ) => {
  //const { controleLivro } = props;
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const obterLivros = async () => {
      const livrosObtidos = await controleLivro.obterLivros();
      setLivros(livrosObtidos);
      setCarregado(true);
    };

    obterLivros();
  }, [carregado, controleLivro]);  // Certifique-se de incluir controleLivros como dependência


  const excluir = async (codigo) => {
    await controleLivro.excluir(codigo);
    setCarregado((prev) => !prev);
  };

  return (
    <main>
      <h1>Lista de Livros</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Código</th>
            <th>Título</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
