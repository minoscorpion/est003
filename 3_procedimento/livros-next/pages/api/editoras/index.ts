// pages/api/editoras/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../classes/controle/ControleEditora';

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Tratamento para requisição GET
    const editoras = controleEditora.getEditoras();
    res.status(200).json(editoras);
  } else {
    // Tratamento para outros métodos não permitidos
    res.status(405).json({ message: 'Método não permitido' });
  }
};