'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return {message: 'Hello World!'};
        }
    });

    //nodemon

    server.route({
        method: 'GET',
        path: "/user",
        handler: (request, h) => {
            return {
                id: 1,
                nickname: 'VanGogh',
                name: 'Matheus',
                email: 'martinsmf00@gmail.com'
            }
        }
    })

    server.route({
        method: 'POST',
        path: '/user',
        handler: (request, h) => {
            return {id: 2}
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();