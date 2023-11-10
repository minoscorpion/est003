import React, { useState, useEffect } from 'react';
import { ControleLivros } from './ControleLivros';
import { ControleEditora } from './ControleEditora';
import { Navigate, useNavigate } from 'react-router-dom';

const LivroDados = ({controleLivro} ) => {
    const controleEditora = new ControleEditora();

  const [opcoes, setOpcoes] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes.length > 0 ? opcoes[0].value : 1);

  const navigate = useNavigate();

  useEffect(() => {
    const editoras = controleEditora.getEditoras();
    setOpcoes(editoras.map(editora => ({ value: editora.codEditora, text: editora.nome })));
  }, [controleEditora]);

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = async (event) => {
    event.preventDefault();
    const autoresArray = autores.split('\n').map((autor) => autor.trim());
    const livro = {
      titulo,
      resumo,
      autores: autoresArray,
      codEditora,
    };
    await controleLivro.incluir(livro);
    navigate("/");
  };

  return (
    <main>
      <h2>Cadastro de Livro</h2>
      <form onSubmit={incluir}>
        <label>Título:</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />

        <label>Resumo:</label>
        <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} />

        <label>Autores (separados por linha):</label>
        <textarea value={autores} onChange={(e) => setAutores(e.target.value)} />

        <label>Editora:</label>
        <select value={codEditora} onChange={tratarCombo}>
          {opcoes.map((opcao) => (
            <option key={opcao.value} value={opcao.value}>
              {opcao.text}
            </option>
          ))}
        </select>

        <button type="submit">Salvar</button>
      </form>
    </main>
  );
};

export default LivroDados;