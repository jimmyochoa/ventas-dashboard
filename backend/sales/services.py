
from sales_backend.db_config import get_db_connection

def fetch_all_sales(start_date=None, end_date=None, category=None):
    query = """
        SELECT order_id, customer_name, category, sub_category, city, region, sales, order_date, discount, profit
        FROM sales_data
        WHERE (%s IS NULL OR order_date >= %s)
        AND (%s IS NULL OR order_date <= %s)
        AND (%s IS NULL OR category = %s)
        ORDER BY order_date DESC;
    """
    params = (start_date, start_date, end_date, end_date, category, category)

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(query, params)
    results = cursor.fetchall()
    cursor.close()
    conn.close()

    return [
        {
            "order_id": row[0], "customer_name": row[1], "category": row[2], 
            "sub_category": row[3], "city": row[4], "region": row[5], 
            "sales": row[6], "order_date": row[7].strftime("%Y-%m-%d"), 
            "discount": row[8], "profit": row[9]
        }
        for row in results
    ]

def fetch_sales_summary(start_date=None, end_date=None, category=None):
    query = """
        SELECT SUM(sales), SUM(profit), COUNT(DISTINCT customer_name) FROM sales_data
        WHERE (%s IS NULL OR order_date >= %s)
        AND (%s IS NULL OR order_date <= %s)
        AND (%s IS NULL OR category = %s);
    """
    params = (start_date, start_date, end_date, end_date, category, category)

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(query, params)
    result = cursor.fetchone()
    cursor.close()
    conn.close()

    return {"total_sales": result[0] if result[0] else 0, "total_profit": result[1] if result[1] else 0, "total_customers": result[2] if result[2] else 0}

def fetch_top_customers():
    query = """
        SELECT customer_name, city, SUM(sales) as total_sales, SUM(profit) as total_profit
        FROM sales_data
        GROUP BY customer_name, city
        ORDER BY total_sales DESC
        LIMIT 10;
    """

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(query)
    results = cursor.fetchall()
    cursor.close()
    conn.close()

    return [
        {"customer_name": row[0], "city": row[1], "total_sales": row[2], "total_profit": row[3]}
        for row in results
    ]
