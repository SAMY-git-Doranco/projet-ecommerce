const { ObjectId } = require('mongodb');

async function routes(fastify, options, done) {


    const postCourseBody = {
        type: 'object',
        properties: {
            name: { type: 'string' },
            image: { type: 'string' },
            description: {
                type: 'string',
                minLength: 10,
                maxLength: 1000,
            },
            price: {
                type: 'integer',
                minimum: 0,
                maximum: 100000,
            },

            categories: {
                type: 'array',
                maxItems: 9,
                uniqueItems: true,
                items: {
                    type: 'string',
                    enum: ['']
                },
                default: [],
            }
        },
        required: ['name', 'image', 'description', 'price'],
        additionalProperties: false,
    }


    const patchCourseBody = {
        type: 'object',
        properties: {
            name: { type: 'string' },
            image: { type: 'string' },
            description: {
                type: 'string',
                minLength: 10,
                maxLength: 1000,
            },
            price: {
                type: 'integer',
                minimum: 0,
                maximum: 100000,
            },

            categories: {
                type: 'array',
                maxItems: 9,
                uniqueItems: true,
                items: {
                    type: 'string',
                    enum: ['']
                },
                default: [],
            }
        },
        additionalProperties: false,
    }

    fastify.post('/articles', { schema: { body: postCourseBody } }, async (request, reply) => {
        console.log(request.body)
        const db = fastify.mongo.db;
        const collection = db.collection('articles')
        const result = await collection.insertOne(request.body);
        return result;
    })



    fastify.get('/articles', async (request, reply) => {
        const collection = fastify.mongo.db.collection('articles');
        const result = collection.find().toArray();
        //return db.courses;
        return result;
    })

    fastify.get('/articles/:id', async (request, reply) => {
        const id = request.params.id;
        const collection = fastify.mongo.db.collection('articles');
        const result = await collection.findOne({ _id: ObjectId(id) });

        return result;
    })

    fastify.delete('/articles/:id', async (request, reply) => {
        const id = request.params.id;
        //const {id} = request.params;
        const collection = fastify.mongo.db.collection('articles');
        //const result = await collection.findOneDelete({ _id: ObjectId(id) });
        const result = await collection.deleteOne({ _id: ObjectId(id) });

        return result;
    })

    fastify.patch('/articles/:id', { schema: { body: patchCourseBody } }, async (request, reply) => {
        const id = request.params.id;
        //const {id} = request.params;
        const collection = fastify.mongo.db.collection('articles');
        //const result = await collection.findOneAndUpdate({ _id: ObjectId(id) });
        const query = { _id: ObjectId(id) };
        const update = { $set: request.body };
        const options = { returnOriginal: false };
        const result = await collection.updateOne(query, update, options);
        return result;
    })


}

module.exports = routes;