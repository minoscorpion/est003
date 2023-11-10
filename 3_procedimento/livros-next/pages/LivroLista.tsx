import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../classes/componentes/Menu';
import { LinhaLivro } from './LinhaLivro';
import { Livro } from '../classes/modelo/Livro';

import styles from '.';

const LivroLista: React.FC = () => {
  const baseURL = 'http://localhost:3000/api/livros';

  const obter = async () => {
    const resposta = await fetch(baseURL);
    return resposta.json();
  };

  const excluirLivro = async (codigo: number) => {
    const resposta = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    });
    return resposta.ok;
  };

  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  useEffect(() => {
    obter().then((dados) => {
      setLivros(dados);
      setCarregado(true);
    });
  }, [carregado]);

  const excluir = async (codigo: number) => {
    await excluirLivro(codigo);
    setCarregado(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Livros</title>
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>Lista de Livros</h1>

        <table className="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Editora</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
