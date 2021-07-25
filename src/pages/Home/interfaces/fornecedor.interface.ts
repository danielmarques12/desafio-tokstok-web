export interface Fornecedor {
  nome: string;
  razao_social: string;
  cnpj: string;
  segmento: string;
  telefone: string;
  email: string;
  endereco: {
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
  };
}
