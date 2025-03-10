import { Request, Response, NextFunction } from "express";
import axios from "axios";

export async function getCepData(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { cep } = req.params;

  try {

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.data.erro) throw new Error("CEP inválido.");

    res.json(response.data);
  } catch (error) {
    next(error);
  }
}
