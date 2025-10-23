import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Inventario y Pedidos',
      version: '1.0.0',
      description: 'Documentación Swagger generada automáticamente',
    },
    servers: [
      {
        url: 'http://localhost:3002',
        description: 'Servidor local de desarrollo',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Aquí se buscarán los comentarios @swagger
};

export const swaggerSpec = swaggerJSDoc(options);
export { swaggerUi };
