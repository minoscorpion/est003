// ControleLivros.ts
import { Livro } from '../modelo/Livro';

export class ControleLivros {
  private livros: Livro[];

  constructor() {
     this.livros = [
      new Livro(1, 'Livro 1', 'Resumo 1', ['Autor 1'], 1),
      new Livro(2, 'Livro 2', 'Resumo 1', ['Autor 2'], 2),
      new Livro(3, 'Livro 3', 'Resumo 1', ['Autor 3'], 1),
    ];
  }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo), 0) + 1;
    livro.codigo = novoCodigo;

    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(l => l.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}