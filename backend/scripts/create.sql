CREATE TABLE IF NOT EXISTS sales_data (
    order_id VARCHAR(50) PRIMARY KEY,
    customer_name VARCHAR(255),
    category VARCHAR(255),
    sub_category VARCHAR(255),
    city VARCHAR(255),
    region VARCHAR(255),
    sales NUMERIC,
    order_date DATE,
    discount NUMERIC,
    profit NUMERIC
);
