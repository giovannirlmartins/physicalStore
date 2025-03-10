"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCepData = getCepData;
const axios_1 = __importDefault(require("axios"));
function getCepData(cep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro)
                throw new Error("CEP inválido.");
            return response.data;
        }
        catch (error) {
            throw new Error("Erro ao buscar CEP.");
        }
    });
}
// import { Request, Response } from 'express';
// import BuscarCepService from '../services/buscarCep';
// class CepController {
//   async buscar(req: Request, res: Response) {
//     const { cep } = req.params;
//     try {
//       const dadosCep = await BuscarCepService.buscarCEP(cep);
//       res.status(200).json(dadosCep);
//     } catch (error: any) {
//       res.status(400).json({ message: error.message });
//     }
//   }
// }
// export default new CepController();
