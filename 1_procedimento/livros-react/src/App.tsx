import React from 'react';
import logo from './logo.svg';
import LivroLista from './controle/LivroLista.js';
import LivroDados from './controle/livroDados.js';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { ControleLivros } from './controle/ControleLivros';

// No nível superior do seu aplicativo
const controleLivro = new ControleLivros();

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Livros
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Lista de Livros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dados">
                Cadastro de Livro
              </Link>
            </li>
          </ul>
        </div>
      </nav>

        <Routes>
        <Route
          path="/"
          element={<LivroLista controleLivro={controleLivro} />}
        />
        <Route
          path="/dados"
          element={<LivroDados controleLivro={controleLivro} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;