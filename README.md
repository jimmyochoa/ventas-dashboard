# Dashboard de Análisis de Ventas

## Descripción

Este proyecto consiste en una aplicación web de análisis de ventas para una tienda, la cual permite visualizar, filtrar y analizar los datos de ventas utilizando gráficos interactivos y tablas. El sistema permite al usuario filtrar los datos por rango de fechas, categoría y proporciona indicadores clave como el total de ventas y ganancias. Además, la aplicación presenta un gráfico de línea que muestra la relación entre la fecha y la venta.

## Tecnologías Usadas

- **Back-End**: Django (Python)
- **Front-End**: Node JS, React.js, HTML, CSS
- **Librerías JavaScript**:
  - **Chart.js** (para la visualización de gráficos)
  - **React-datepicker** (para los filtros de fechas)
- **Base de Datos**: PostgreSQL
- **Docker**: Para el despliegue del entorno de desarrollo

## Requisitos Técnicos

- **Docker**
- **Docker Compose**

## Instrucciones de Despliegue

### 1. Clonar el repositorio

```bash
git clone https://github.com/jimmyochoa/ventas-dashboard.git
cd ventas-dashboard
```
## 2. Levantar el entorno de desarrollo con Docker

```bash
docker-compose up -d --build
```
## 3. Verificar que los contenedores estén corriendo

```bash
docker ps
```

## 4. Acceder a la aplicación

Una vez que el entorno de desarrollo esté levantado, se puede acceder al front-end en la siguiente dirección:

```bash
http://localhost:5173/
```

