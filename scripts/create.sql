CREATE TABLE IF NOT EXISTS sales_data (
    order_id VARCHAR(50) PRIMARY KEY,
    customer_name VARCHAR(255),
    category VARCHAR(255),
    sub_category VARCHAR(255),
    city VARCHAR(255),
    order_date DATE,
    region VARCHAR(255),
    sales NUMERIC,
    discount NUMERIC,
    profit NUMERIC,
    state_name VARCHAR(255)
);

COPY sales_data(order_id, customer_name, category, sub_category, city, order_date, region, sales, discount, profit, state_name)
FROM '/scripts/dataset.csv'
WITH (FORMAT csv, HEADER true, DELIMITER ',', QUOTE '"');
