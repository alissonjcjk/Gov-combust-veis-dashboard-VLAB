export interface DashboardStats {
  precoMedioNacional: number;
  totalConsumido: number; // Sincronizado com o HTML
  postosAtivos: number;    // Sincronizado com o HTML
}

export interface Abastecimento {
  id: number;
  data: string;
  posto: string;
  cidade: string;
  uf: string;
  combustivel: 'Gasolina' | 'Etanol' | 'Diesel';
  valorLitro: number;
  totalPago: number;
  motorista: string;
  placa: string;
}