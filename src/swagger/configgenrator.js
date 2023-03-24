const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['../routes/auth.js','../routes/category.js','../routes/posts.js','../routes/users.js']

swaggerAutogen(outputFile, endpointsFiles)