const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger.json');
const app = require('express')();
const router = require('./routes');

const port = process.env.PORT || 3000;

/* Middlewares */
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
    console.info(`Server running at http://localhost:${port}`);
    console.info(`Swagger UI API documentation http://localhost:${port}/api-docs`);
});
