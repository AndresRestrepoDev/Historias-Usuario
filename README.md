# 🛒 API de Inventario y Pedidos

Esta es una API RESTful desarrollada en Node.js con TypeScript, Express y Sequelize, que permite gestionar productos, clientes y pedidos con autenticación y documentación Swagger.

---

## 🚀 Características

- CRUD de Productos, Clientes y Pedidos
- Validaciones con Zod (DTOs)
- Documentación Swagger
- Relaciones entre entidades
- Manejo de stock automático en pedidos
- Código limpio siguiendo principios de Clean Code
- Conexión a base de datos PostgreSQL
- Seeds automáticos al iniciar

---

## 📦 Requisitos

- Node.js `>= 18`
- PostgreSQL `>= 13`
- Docker (opcional, recomendado para entorno de desarrollo)

---

## 🛠 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/AndresRestrepoDev/Historias-Usuario.git
cd Historias-Usuario
```

2. Instalar dependencias

```
    npm install

3. Configurar variables de entorno

```
    Crea un archivo .env en la raíz del proyecto:

    PORT=3002

    DB_NAME=nombre_db
    DB_USER=nombre_user
    DB_PASSWORD=tu_contraseña
    DB_HOST=localhost
    DB_PORT=5432

    JWT_SECRET=typescript+nodeJS
    API_KEY=riwi_api_key_123

4. Crear la base de datos

Puedes usar pgAdmin, psql o Docker para crear la base de datos indicada en .env.

5. Ejecutar el servidor en desarrollo

```
    npm run listen

    Esto iniciará:

    El servidor en: http://localhost:3002
    La documentación Swagger en: http://localhost:3002/docs


```
6. Estructura del proyecto
```


    src/
    ├── config/            # Configuración de DB y Swagger
    ├── controllers/       # Controladores Express
    ├── daos/              # Capa de acceso a datos (DAO)
    ├── dtos/              # Esquemas de validación Zod
    ├── middlewares/       # Middlewares personalizados
    ├── models/            # Modelos Sequelize
    ├── routes/            # Rutas de la API
    ├── services/          # Lógica de negocio
    ├── seeders/           # Datos iniciales
    ├── utils/             # Funciones auxiliares
    └── index.ts           # Punto de entrada

