const Koa = require('koa');
const Logger = require('koa-logger');
const { koaBody } = require('koa-body');
const router = require('./routes.js');
const orm = require('./models');
const cors = require('@koa/cors');

const app = new Koa();

app.context.orm = orm;

// cors para poder hacer peticiones desde el frontend
app.use(cors());

// Middlewares proporcionados por Koa
app.use(Logger());
app.use(koaBody());

// koa router
app.use(router.routes());

app.use((ctx) => {
    ctx.body = 'Hello world';
});

// --------------------------------------------


module.exports = app;