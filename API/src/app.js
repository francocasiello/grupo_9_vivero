const express = require('express');
const app = express();
const path = require('path');

const mainRoutes = require('./routes/main/mainRoutes');
const apiClientesRouter = require('./routes/api/products')

/* ojo */
const apiUsersRouter = require ('./routes/api/users');
const apiProductsRouter = require ('./routes/api/products')


app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'))
app.use(express.urlencoded({ extended: false }));



app.use(mainRoutes);
app.use('/api/clientes',apiClientesRouter);

/* ojo */
app.use('/api/users',apiUsersRouter);
app.use('/api/products',apiProductsRouter);


app.listen(3001,console.log('Servidor corriendo en el puerto 3001'));

