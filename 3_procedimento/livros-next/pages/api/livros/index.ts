import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros  } from '../../../classes/controle/ControleLivros';
import { Livro } from '../../../classes/modelo/Livro';

export const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Handle GET request
    const livros = controleLivro.obterLivros();
    res.status(200).json(livros);
  } else if (req.method === 'POST') {
    // Handle POST request
    const novoLivro: Livro = req.body;
    controleLivro.incluir(novoLivro);
    res.status(200).json({ mensagem: 'Livro incluído com sucesso' });
  } else {
    // Handle other HTTP methods
    res.status(405).json({ mensagem: 'Método não permitido' });
  }
};
