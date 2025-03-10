import axios from 'axios';

class BuscarCepService {

  async buscarCEP(cep: string) {
    try {

      if (cep.length!=8) {
        throw new Error('CEP inválido. Deve conter 8 dígitos.');
      }

      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      if (response.data.erro) {
        throw new Error('CEP não encontrado.');
      }

      return response.data;

    } catch (error: any) {
      throw new Error(error.message || 'Erro ao buscar o CEP.');
    }
  }
}

export default new BuscarCepService();
