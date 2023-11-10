import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router'; // Importando useRouter
import { Menu } from '../classes/componentes/Menu';
import Head from 'next/head';
import { Livro } from '../classes/modelo/Livro';  // Certifique-se de ajustar o caminho
import { Editora } from '../classes/modelo/Editora';  // Certifique-se de ajustar o caminho
import { ControleEditora } from '../classes/controle/ControleEditora';  // Certifique-se de ajustar o caminho
import styles from '.';

const controleEditora = new ControleEditora();

const LivroDados: React.FC = () => {
  // Importar os estilos com import styles from '../styles/Home.module.css'
  // Definir um objeto do tipo ControleEditora, com o nome controleEditora
  // Definir uma constante com o nome baseURL, do tipo texto, utilizando o valor "http://localhost:3000/api/livros"

  const router = useRouter(); // Inicializando o hook useRouter

  const baseURL = 'http://localhost:3000/api/livros';

  const incluirLivro = async (livro: Livro) => {
    const resposta = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    });
    return resposta.ok;
  };

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<number>(opcoes[0]?.value || 0);

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const livro: Livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    const sucesso = await incluirLivro(livro);

    if (sucesso) {
      // Navegar para a página LivroLista após a inclusão
      router.push('/LivroLista');
    } else {
      // Lógica para tratamento de erro, se necessário
      console.error('Erro ao incluir livro.');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Incluir Livro</title>
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>Incluir Livro</h1>

        <form onSubmit={incluir}>
          <div className="mb-3">
            <label htmlFor="titulo">Título:</label>
            <input className='form-control'
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div  className="mb-3">
            <label htmlFor="resumo">Resumo:</label>
            <textarea  className='form-control'
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
            ></textarea>
          </div>
          <div  className="mb-3">
            <label htmlFor="autores">Autores:</label>
            <textarea  className='form-control'
              id="autores"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
            ></textarea>
          </div>
          <div className='mb-3'>
            <label htmlFor="codEditora">Editora:</label>
            <select id="codEditora" className='form-select' value={codEditora} onChange={tratarCombo}>
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button type="submit">Incluir Livro</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
