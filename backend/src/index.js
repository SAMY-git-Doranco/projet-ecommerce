const fastify = require('fastify')({ logger: true })

const PORT = 4000


fastify.register(require('fastify-mongodb'), {
    forceClose: true,
    url: 'mongodb://localhost:27017/e-commerce'
})

//Importation des routes
fastify.register(require('./routes/articles'));

// GET http://localhost:4000/articles

const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()

