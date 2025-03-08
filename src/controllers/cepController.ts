import { Request, Response } from 'express';
import BuscarCepService from '../services/buscarCep';

class CepController {
  async buscar(req: Request, res: Response) {
    const { cep } = req.params;

    try {
      const dadosCep = await BuscarCepService.buscarCEP(cep);
      res.status(200).json(dadosCep);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new CepController();
