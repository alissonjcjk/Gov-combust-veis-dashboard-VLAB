export interface DashboardStats {
  precoMedioNacional: number;
  totalConsumido: number; // Sincronizado com o HTML
  postosAtivos: number;    // Sincronizado com o HTML
}

//Contém as interfaces que descrevem os objetos do domínio.
//Por exemplo, aqui você define o que é um Abastecimento.

export interface Abastecimento {
  id: number;
  data: string;
  posto: string;
  cidade: string;
  uf: string;
  cpf: string;
  combustivel: 'Gasolina' | 'Etanol' | 'Diesel';
  valorLitro: number;
  totalPago: number;
  motorista: string;
  placa: string;
}