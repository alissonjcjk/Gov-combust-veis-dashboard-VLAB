import json
import random
from faker import Faker

# Configura o Faker para Português do Brasil
fake = Faker('pt_BR')

def generate_full_db(records=100):
    fuel_types = ["Gasolina", "Diesel", "Etanol", "Gasolina Aditivada"]
    gas_stations = ["Posto Alvorada", "Posto Ipiranga", "Posto Shell", "Posto Petrobras", "Posto Graal"]
    months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

    # 1. Gerar Lista de Abastecimentos
    abastecimentos = []
    for i in range(1, records + 1):
        valor_litro = round(random.uniform(4.80, 6.50), 2)
        litros = random.uniform(20, 80)
        total_pago = round(valor_litro * litros, 2)
        
        entry = {
            "id": i,
            "data": fake.date_between(start_date='-1y', end_date='today').strftime('%Y-%m-%d'),
            "posto": random.choice(gas_stations),
            "cidade": fake.city(),
            "cpf": fake.cpf().replace('.', '').replace('-', ''), # Gera apenas números
            "uf": fake.state_abbr(),
            "combustivel": random.choice(fuel_types),
            "valorLitro": valor_litro,
            "totalPago": total_pago,
            "motorista": fake.name(),
            "placa": fake.license_plate()
        }
        abastecimentos.append(entry)

    # 2. Gerar KPIs (podem ser estáticos ou baseados na média dos dados gerados)
    kpis = {
        "precoMedioNacional": round(sum(d['valorLitro'] for d in abastecimentos) / records, 2),
        "totalConsumido": int(sum(d['totalPago'] / d['valorLitro'] for d in abastecimentos)),
        "postosAtivos": 128
    }

    # 3. Gerar Histórico de Preços (Simulação de 6 meses)
    historico_precos = []
    base_price = 5.80
    for mes in months[:6]: # Janeiro a Junho
        base_price += random.uniform(-0.10, 0.15)
        historico_precos.append({
            "mes": mes,
            "valor": round(base_price, 2)
        })

    # Estrutura Final do JSON
    db_final = {
        "abastecimentos": abastecimentos,
        "kpis": kpis,
        "historicoPrecos": historico_precos
    }

    # Salva o arquivo
    with open('db.json', 'w', encoding='utf-8') as f:
        json.dump(db_final, f, ensure_ascii=False, indent=2)

    print(f"✅ db.json atualizado com {records} registros e CPF incluído!")

if __name__ == "__main__":
    generate_full_db(150) # Gera 150 registros para testar bem a tabela