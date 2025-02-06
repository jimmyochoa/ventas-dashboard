import psycopg2
import pandas as pd

# Configuración de la base de datos
DB_CONFIG = {
    'dbname': 'sales',
    'user': 'postgres',
    'password': 'password',
    'host': 'localhost',
    'port': '5432'
}

CSV_PATH = "dataset.csv"  # Ruta del archivo CSV

def load_data():
    # Conectar a la base de datos
    conn = psycopg2.connect(**DB_CONFIG)
    cursor = conn.cursor()

    # Cargar el CSV
    df = pd.read_csv(CSV_PATH)

    # Insertar datos en la tabla
    for _, row in df.iterrows():
        cursor.execute("""
            INSERT INTO sales_data (order_id, customer_name, category, sub_category, city, region, sales, order_date, discount, profit)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            ON CONFLICT (order_id) DO NOTHING;
        """, (
            row["Order ID"], row["Customer Name"], row["Category"], row["Sub Category"], 
            row["City"], row["Region"], row["Sales"], row["Order Date"], 
            row["Discount"], row["Profit"]
        ))

    # Confirmar y cerrar conexión
    conn.commit()
    cursor.close()
    conn.close()
    print("Datos cargados exitosamente.")

if __name__ == "__main__":
    load_data()
