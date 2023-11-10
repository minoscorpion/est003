import { Editora } from '../modelo/Editora';

export class ControleEditora {
  private editoras: Array<Editora>;

  constructor() {
    
    this.editoras = [
      { codEditora: 1, nome: 'Editora A' },
      { codEditora: 2, nome: 'Editora B' },
      { codEditora: 3, nome: 'Editora C' },
    ];
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find(editora => editora.codEditora === codEditora);

    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }
}