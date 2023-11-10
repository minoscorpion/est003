import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <p className="navbar-brand">Home</p>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/LivroLista">
                <p className="nav-link">Lista</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados">
                <p className="nav-link">Cadastro</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
