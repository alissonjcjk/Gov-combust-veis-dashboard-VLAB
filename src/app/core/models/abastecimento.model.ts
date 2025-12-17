
//Isso garante que a aplicação seja fortemente tipada

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

export interface DashboardStats {
  precoMedioNacional: number;
  totalLitrosConsumidos: number;
  postosMonitorados: number;
}