// const swaggerAutogen = require('swagger-autogen')();
import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        version: '1.0.0',
        title: "youtube-backend",
        description: 'MERN stack Youtube-Clone=App for for video streaming and sharing',
    },
    host: '',
    basePath: '/',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
    ],
    securityDefinitions: {
        Bearer: {
            type: "apiKey",
            in: "header", // can be "header", "query" or "cookie"
            name: "Authorization", // name of the header, query parameter or cookie
            description:
                "Please enter a valid token to test the requests below...",
        },
    },
    definitions: {},          // by default: empty object (Swagger 2.0)
    components: {}            // by default: empty object (OpenAPI 3.x)
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/auth.js',
                        './src/routes/user.js',
                        './src/routes/video.js',
                        './src/routes/comment.js',
];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);