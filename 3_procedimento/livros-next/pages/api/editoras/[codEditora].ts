import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from './index';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Tratamento para requisição GET com parâmetro
    const { codEditora } = req.query;
    const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));
    res.status(200).json({ nome: nomeEditora });
  } else {
    // Tratamento para outros métodos não permitidos
    res.status(405).json({ message: 'Método não permitido' });
  }
};