// Formato tomado de la ayudantia de mi primera api

const Router = require('koa-router');
const router = new Router();
const { Entry, User } = require('../models');

// Ruta asistida por copilot (DEBUGGING YA QUE BELONGTO ME SALIA COMO NULL)
// Crear registro
router.post('/', async (ctx) => {
    const { title, body, belongs_to, date } = ctx.request.body;
    console.log(ctx.request.body);
    try {
        const entry = await Entry.create({
            title,
            body,
            belongsTo: belongs_to,
            date
        });
        ctx.status = 201;  
        ctx.body = entry;
    } catch (error) {
        console.error(error);  
        ctx.status = 400;  
        ctx.body = { error: error.message };
    }
});

// Ruta asistida por copilot
// Ver todos los registros
router.get('/', async (ctx) => {
    
    try {
        const entries = await Entry.findAll();
        ctx.body = entries;
    } catch (error) {
        console.error(error);
        ctx.status = 404;
    }
});

// Ruta asistida por copilot
// Ver registro por su usuario
router.get('/user/:username', async (ctx) => {
    try {
        const entries = await Entry.findAll({ where: { belongsTo: ctx.params.username } });
        ctx.body = entries;
    } catch (error) {
        ctx.status = 500;
        ctx.body = { error: error.message };
    }
});

// Ruta asistida por copilot
// Detalle de un registro
router.get('/:id', async (ctx) => {
    try {
        const entry = await Entry.findByPk(ctx.params.id);
        if (entry) {
            ctx.body = entry;
        } else {
            ctx.status = 404;
            ctx.body = { error: 'Entry not found' };
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = { error: error.message };
    }
});

// Ruta asistida por copilot
// Actualizar un registro
router.patch('/:id', async (ctx) => {
    try {
        const { id } = ctx.params;
        const [updated] = await Entry.update(ctx.request.body, {
            where: { id }
        });

        if (updated) {
            const updatedEntry = await Entry.findByPk(id);
            ctx.body = updatedEntry;
        } else {
            ctx.status = 404;
            ctx.body = { error: 'Entry not found' };
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = { error: error.message };
    }
});

// Ruta asistida por copilot
// Eliminación de un registro específico
router.delete('/:id', async (ctx) => {
    try {
        const { id } = ctx.params;
        const deleted = await Entry.destroy({
            where: { id }
        });

        if (deleted) {
            ctx.status = 204; // No Content
        } else {
            ctx.status = 404;
            ctx.body = { error: 'Entry not found' };
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = { error: error.message };
    }
});


module.exports = router;